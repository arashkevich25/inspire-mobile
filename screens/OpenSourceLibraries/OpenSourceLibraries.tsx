import React from 'react';

import { FlatList } from 'react-native';
import { Navigation } from 'react-native-navigation';

import { WebView } from 'navigation/components/webView';
import { ListItem, Separator } from './components';

export interface License {
    licenses: string;
    repository: string;
    licenseUrl: string;
    parents: string;
}

export interface FinalLicense {
    name: string;
    version: string;
    licenseSpecs: License;
}

export function OpenSourceLibraries() {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const licenses: { [id: string]: License } = require('../../../licenses.json');

    const numberRegex = /\d+(\.\d+)*/;
    const atRegex = /(?:@)/gi;

    const finalLicense: FinalLicense[] = Object.keys(licenses).map((licence: string) => {
        const version = licence.match(numberRegex);
        const nameWithoutVersion = licence.replace(atRegex, '').replace(version ? version[0] : '', '');
        return {
            name: nameWithoutVersion,
            version: version ? version[0] : '',
            licenseSpecs: licenses[licence],
        };
    });

    async function openLicenceFile(url: string) {
        await Navigation.showModal({
            stack: { children: [{ component: WebView(url) }] },
        });
    }

    return (
        <FlatList
            keyboardShouldPersistTaps={'handled'}
            data={finalLicense}
            renderItem={({ item }) => <ListItem onPress={openLicenceFile} item={item} />}
            ItemSeparatorComponent={Separator}
            keyExtractor={(item, index) => index.toString()}
        />
    );
}
