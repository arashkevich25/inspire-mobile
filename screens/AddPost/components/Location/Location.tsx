import { GeoDataAddress, GeoDataResult } from '@inspire/types';
import { SearchLocalization } from 'navigation';
import React, { useEffect, useState } from 'react';
import { FormStyles } from '../../formStyles';

import { ActivityIndicator, View } from 'react-native';
import { Navigation } from 'react-native-navigation';

import { Button, ButtonTypes, Text } from 'components';
import { getAddressByGeoData, getCurrentLocation } from 'tools';
import { Sizes } from 'types';
import { Slider } from './components/Slider';

interface LocationProps {
    setLocationProps: (location: GeoDataResult) => void;
    selectedLocation: GeoDataResult | null;
}

export function Location(props: LocationProps) {
    const [locationState, setLocationState] = useState<GeoDataAddress>();
    const [locationLoading, setLocationLoading] = useState<boolean>(false);

    useEffect(() => {
        if (!props.selectedLocation?.formatted_address) {
            getAddress();
            return;
        }
        setLocationState({
            plus_code: { compound_code: '', global_code: '' },
            status: '',
            results: [props.selectedLocation],
        });
    }, [props.selectedLocation]);

    async function getAddress() {
        setLocationLoading(true);
        try {
            const {
                coords: { longitude, latitude },
            } = await getCurrentLocation();
            const response = await getAddressByGeoData(latitude, longitude);
            setLocationState(response);
            setLocationLoading(false);
        } catch (err) {
            setLocationLoading(false);
        }
    }

    async function setCustomLocalization(location: any) {
        const formattedHasName = location.formatted_address.includes(location.name);

        const changedLocation = formattedHasName
            ? [location]
            : [{ ...location, formatted_address: `${location.name}, ${location.formatted_address}` }];

        // @ts-ignore
        setLocationState({ results: changedLocation });
        props.setLocationProps(location);
    }

    function openSearchLocalization() {
        Navigation.showModal({
            stack: {
                children: [
                    {
                        component: SearchLocalization(setCustomLocalization, true),
                    },
                ],
            },
        });
    }

    return (
        <View style={FormStyles.detailContainer}>
            <Text fontSize={Sizes.Medium} translateKey="addPost.titles.selectLocalization" />
            {locationLoading && !locationState?.results.length ? (
                <ActivityIndicator />
            ) : (
                <Slider
                    getAddressCallback={getAddress}
                    locationState={locationState}
                    selectedLocation={props.selectedLocation}
                    setLocationProps={props.setLocationProps}
                />
            )}
            <Button
                size="small"
                color="blue"
                type={ButtonTypes.Link}
                translateKey="addPost.buttons.openSearchLocalization"
                onPress={openSearchLocalization}
            />
        </View>
    );
}
