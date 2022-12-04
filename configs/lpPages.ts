import { deviceLocation } from 'tools/deviceLocation';

const lpPage = 'https://app-inspire.net';

export const lpPages = {
    rules: `${lpPage}/${deviceLocation}/rules`,
    manual: `${lpPage}/${deviceLocation}/manual`,
    getApp: `${lpPage}/${deviceLocation}#get-the-app`,
    contact: `${lpPage}/${deviceLocation}#contact`,
};
