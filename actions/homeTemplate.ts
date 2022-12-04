import { HomeTemplateSection, SimplifiedPost } from '@inspire/types';
import { HomeTemplateActions } from 'app-constants/actionTypes/homeTemplate';
import { Dispatch } from 'redux';

import { GET_SECTIONS_DATA } from 'schemes';
import { graphqlQueryWithPolicyByNetworkConnection, RollbarLogging } from 'tools';

export function initHomeTemplate() {
    return {
        type: HomeTemplateActions.InitHomeTemplate,
    };
}

export function initHomeTemplateSuccess(sections: HomeTemplateSection[]) {
    return {
        type: HomeTemplateActions.InitHomeTemplateSuccess,
        sections,
    };
}

export function initHomeTemplateFailed() {
    return {
        type: HomeTemplateActions.InitHomeTemplateFailed,
    };
}

export function fetchSectionData(filterId: string) {
    return (dispatch: Dispatch) => {
        dispatch({
            type: HomeTemplateActions.FetchHomeSectionsData,
            filterId,
        });

        graphqlQueryWithPolicyByNetworkConnection<{ getSectionsData: SimplifiedPost[] }>({
            query: GET_SECTIONS_DATA,
            variables: {
                filterId,
                skip: 0,
            },
        })
            .then(({ data: { getSectionsData } }) => {
                dispatch(fetchSectionDataSuccess(getSectionsData, filterId));
            })
            .catch(error => {
                RollbarLogging.reportErrorAtSpace(error, 'fetchSectionData');
                dispatch(fetchSectionDataFailure(filterId));
            });
    };
}

function fetchSectionDataSuccess(data: SimplifiedPost[], filterId: string) {
    return {
        type: HomeTemplateActions.FetchHomeSectionsDataSuccess,
        filterId,
        data,
    };
}

function fetchSectionDataFailure(filterId: string) {
    return {
        type: HomeTemplateActions.FetchHomeSectionsDataFailure,
        filterId,
    };
}

export function getMoreHomeTemplateData(filterId: string, skip: number) {
    return (dispatch: Dispatch) => {
        dispatch({
            type: HomeTemplateActions.UpdateHomeSectionsData,
            filterId,
        });

        graphqlQueryWithPolicyByNetworkConnection<{ getSectionsData: SimplifiedPost[] }>({
            query: GET_SECTIONS_DATA,
            variables: {
                filterId,
                skip,
            },
        })
            .then(({ data: { getSectionsData } }) => {
                dispatch(getMoreHomeTemplateDataSuccess(getSectionsData, filterId, skip));
            })
            .catch(error => {
                RollbarLogging.reportErrorAtSpace(error, 'getMoreHomeTemplateData');
                dispatch(getMoreHomeTemplateDataFailure(filterId));
            });
    };
}

function getMoreHomeTemplateDataSuccess(data: SimplifiedPost[], filterId: string, skip: number) {
    return {
        type: HomeTemplateActions.UpdateHomeSectionsDataSuccess,
        data,
        filterId,
        skip,
    };
}

function getMoreHomeTemplateDataFailure(filterId: string) {
    return {
        type: HomeTemplateActions.UpdateHomeSectionsData,
        filterId,
    };
}
