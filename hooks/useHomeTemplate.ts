import { useDispatch, useSelector } from 'react-redux';

import { fetchSectionData, getMoreHomeTemplateData, initHomeSections } from 'actions';
import { AppState } from 'reducers';
import { homeTemplateSections } from 'selectors';
import { HomeTemplateSectionStateItem } from '../reducers/homeTemplate';
import { homeTemplateSectionsHasFetched, homeTemplateSectionsIsFetching } from '../selectors/homeTemplate';

type UseHomeTemplateOutput = [
    HomeTemplateSectionStateItem[],
    (item: HomeTemplateSectionStateItem) => void,
    (filterId: string) => HomeTemplateSectionStateItem | undefined,
    (filterId: string) => void,
    () => void,
    boolean,
    boolean,
];

export function useHomeTemplate(): UseHomeTemplateOutput {
    const sections = useSelector((state: AppState) => homeTemplateSections(state));
    const isFetching = useSelector((state: AppState) => homeTemplateSectionsIsFetching(state));
    const hasFetched = useSelector((state: AppState) => homeTemplateSectionsHasFetched(state));
    const dispatch = useDispatch();

    function loadMore(section: HomeTemplateSectionStateItem) {
        const { skip, isLoading, allContentWasLoaded } = section;
        if (isLoading || allContentWasLoaded) {
            return;
        }
        dispatch(getMoreHomeTemplateData(section.body.filterId, skip));
    }

    function fetchData(filterId: string) {
        dispatch(fetchSectionData(filterId));
    }

    function initHomeHandle() {
        dispatch(initHomeSections());
    }

    function getSectionByFilterId(filterId: string): HomeTemplateSectionStateItem | undefined {
        return sections.find(item => item.body.filterId === filterId);
    }

    return [sections, loadMore, getSectionByFilterId, fetchData, initHomeHandle, isFetching, hasFetched];
}
