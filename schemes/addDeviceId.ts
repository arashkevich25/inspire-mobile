import { gql } from '@apollo/client';

export const ADD_DEVICE_ID = ({
    deviceId,
    osVersion,
    appVersion,
    isAndroid,
    deviceLanguage,
    isIos,
    deviceBrand,
    deviceModel,
}: any) => gql`
    mutation {
        addDeviceDetails(detailsInput: { 
	        deviceId: "${deviceId}", 
	        isAndroid: ${isAndroid}, 
	        isIos: ${isIos}, 
	        osVersion: "${osVersion}", 
	        appVersion: "${appVersion}", 
	        deviceLanguage: "${deviceLanguage}", 
	        deviceBrand: "${deviceBrand}", 
	        deviceModel: "${deviceModel}" 
        })
    }
`;
