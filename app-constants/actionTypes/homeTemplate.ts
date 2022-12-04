import { HomeTemplateSection, SimplifiedPost } from '@inspire/types';

export enum HomeTemplateActions {
    InitHomeTemplate = '[Home] init home template',
    InitHomeTemplateSuccess = '[Home] init home template success',
    InitHomeTemplateFailed = '[Home] init home template failed',

    FetchHomeSectionsData = '[Home] fetch home section data',
    FetchHomeSectionsDataSuccess = '[Home] fetch home section data success',
    FetchHomeSectionsDataFailure = '[Home] fetch home section data failure',

    UpdateHomeSectionsData = '[Home] update home sections data',
    UpdateHomeSectionsDataSuccess = '[Home] update home sections data success',
    UpdateHomeSectionsDataFailure = '[Home] update home sections data failure',
}

interface InitHomeTemplate {
    type: typeof HomeTemplateActions.InitHomeTemplate;
}

interface InitHomeTemplateFailed {
    type: typeof HomeTemplateActions.InitHomeTemplateFailed;
}

interface InitHomeTemplateSuccess {
    type: typeof HomeTemplateActions.InitHomeTemplateSuccess;
    sections: HomeTemplateSection[];
}

interface UpdateHomeSectionsData {
    type: typeof HomeTemplateActions.UpdateHomeSectionsData;
    filterId: string;
}

interface FetchHomeSectionsDataSuccess {
    type: typeof HomeTemplateActions.FetchHomeSectionsDataSuccess;
    data: SimplifiedPost[];
    filterId: string;
}

interface FetchHomeSectionsData {
    type: typeof HomeTemplateActions.FetchHomeSectionsData;
    filterId: string;
}

interface FetchHomeSectionsDataFailure {
    type: typeof HomeTemplateActions.FetchHomeSectionsDataFailure;
    filterId: string;
}

interface UpdateHomeSectionsDataSuccess {
    type: typeof HomeTemplateActions.UpdateHomeSectionsDataSuccess;
    data: SimplifiedPost[];
    filterId: string;
    skip: number;
}

interface UpdateHomeSectionsDataFailure {
    type: typeof HomeTemplateActions.UpdateHomeSectionsDataFailure;
    filterId: string;
}

export type HomeTemplateUnion =
    | InitHomeTemplate
    | InitHomeTemplateSuccess
    | InitHomeTemplateFailed
    | UpdateHomeSectionsData
    | UpdateHomeSectionsDataSuccess
    | FetchHomeSectionsDataSuccess
    | FetchHomeSectionsData
    | FetchHomeSectionsDataFailure
    | UpdateHomeSectionsDataFailure;
