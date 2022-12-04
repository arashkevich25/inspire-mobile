import { AppState } from 'reducers';
import { HomeTemplateSectionStateItem, HomeTemplateState } from 'reducers/homeTemplate';

function homeTemplateState(state: AppState): HomeTemplateState {
    return state.homeTemplate;
}

export function homeTemplateSections(state: AppState): HomeTemplateSectionStateItem[] {
    return homeTemplateState(state).sections;
}

export function homeTemplateSectionsIsFetching(state: AppState): boolean {
    return homeTemplateState(state).sectionsIsFetching;
}

export function homeTemplateSectionsHasFetched(state: AppState): boolean {
    return homeTemplateState(state).sectionsHasFetched;
}
