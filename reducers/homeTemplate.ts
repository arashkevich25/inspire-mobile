import { HomeTemplateSection } from '@inspire/types';
import { HomeTemplateActions, HomeTemplateUnion } from 'app-constants/actionTypes';
import { SkipCounters } from '../app-constants/SkipCounters';

export interface HomeTemplateSectionStateItem extends HomeTemplateSection {
    skip: number;
    isLoading: boolean;
    allContentWasLoaded: boolean;
}

export interface HomeTemplateState {
    sections: HomeTemplateSectionStateItem[];
    sectionsIsFetching: boolean;
    sectionsHasFetched: boolean;
}

export const initState: HomeTemplateState = {
    sections: [],
    sectionsIsFetching: false,
    sectionsHasFetched: false,
};

export function homeTemplateReducer(state: HomeTemplateState = initState, action: HomeTemplateUnion) {
    switch (action.type) {
        case HomeTemplateActions.InitHomeTemplate: {
            return {
                ...state,
                sectionsIsFetching: true,
                sectionsHasFetched: false,
            };
        }

        case HomeTemplateActions.InitHomeTemplateFailed: {
            return {
                ...state,
                sectionsIsFetching: false,
                sectionsHasFetched: false,
            };
        }

        case HomeTemplateActions.InitHomeTemplateSuccess: {
            return {
                ...state,
                sectionsHasFetched: true,
                sectionsIsFetching: false,
                sections: action.sections.map(item => ({
                    ...item,
                    skip: SkipCounters.WorldWall,
                    isLoading: false,
                    allContentWasLoaded: false,
                })),
            };
        }

        case HomeTemplateActions.FetchHomeSectionsData: {
            return {
                ...state,
                sections: state.sections.map(section => {
                    if (section.body.filterId === action.filterId) {
                        return {
                            ...section,
                            isLoading: true,
                            skip: SkipCounters.WorldWall,
                            allContentWasLoaded: false,
                        };
                    }
                    return section;
                }),
            };
        }

        case HomeTemplateActions.FetchHomeSectionsDataSuccess: {
            return {
                ...state,
                sectionsIsFetching: false,
                sectionsHasFetched: true,
                sections: state.sections.map(section => {
                    if (section.body.filterId === action.filterId) {
                        return {
                            ...section,
                            isLoading: false,
                            data: action.data,
                            allContentWasLoaded: action.data.length + 1 < SkipCounters.WorldWall,
                        };
                    }
                    return section;
                }),
            };
        }

        case HomeTemplateActions.FetchHomeSectionsDataFailure: {
            return {
                ...state,
                sectionsIsFetching: false,
                sectionsHasFetched: false,
                sections: state.sections.map(section => {
                    if (section.body.filterId === action.filterId) {
                        return {
                            ...section,
                            isLoading: false,
                            skip: 0,
                        };
                    }
                    return section;
                }),
            };
        }

        case HomeTemplateActions.UpdateHomeSectionsData: {
            return {
                ...state,
                sections: state.sections.map(section => {
                    if (section.body.filterId === action.filterId) {
                        return {
                            ...section,
                            isLoading: true,
                        };
                    }
                    return section;
                }),
            };
        }

        case HomeTemplateActions.UpdateHomeSectionsDataSuccess: {
            return {
                ...state,
                sections: state.sections.map(section => {
                    if (section.body.filterId === action.filterId) {
                        return {
                            ...section,
                            isLoading: false,
                            skip: action.skip + SkipCounters.WorldWall,
                            data: [...section.data, ...action.data],
                            allContentWasLoaded: action.data.length + 1 < SkipCounters.WorldWall,
                        };
                    }
                    return section;
                }),
            };
        }

        case HomeTemplateActions.UpdateHomeSectionsDataFailure: {
            return {
                ...state,
                sections: state.sections.map(section => {
                    if (section.body.filterId === action.filterId) {
                        return {
                            ...section,
                            isLoading: false,
                        };
                    }
                    return section;
                }),
            };
        }

        default:
            return state;
    }
}
