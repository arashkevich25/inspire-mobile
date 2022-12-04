import { AddressTypes } from '@inspire/types';
import React, { useEffect, useState } from 'react';
import { MapButton } from '../MapButton';

import { Keyboard, StyleSheet, View } from 'react-native';
import MapView, { LatLng, Marker } from 'react-native-maps';
import { Navigation } from 'react-native-navigation';

import { LocalizationSearch } from 'components';
import { useFilters, useLocationState } from 'hooks';
import { getAddressByGeoData, getCurrentLocation, StylesValue, winHeight } from 'tools';
import { ThemeVariables } from 'types';

import { Styles } from './styles';

interface ChooseLocationState {
    region: LatLng;
    city: string;
}

const autocompleteHeightInit = 47;

interface MapsProps {
    clbk: ((town: string) => void) | undefined;
}

export function Maps(props: MapsProps) {
    const [locationState, setLocationState] = useState<ChooseLocationState>({
        region: {
            longitude: 0,
            latitude: 0,
        },
        city: '',
    });

    const [autocompleteHeight, setAutoCompleteHeight] = useState(autocompleteHeightInit);

    const [, , , , setMapFilter] = useFilters();

    const [coordinates, , , getCoordinates] = useLocationState();

    useEffect(() => {
        getAddress();
        const keyboardWillShow = Keyboard.addListener('keyboardDidShow', openAutocomplete);
        const keyboardWillHide = Keyboard.addListener('keyboardDidHide', closeAutocomplete);
        return function cleanup() {
            keyboardWillShow.remove();
            keyboardWillHide.remove();
        };
    }, []);

    async function getAddress() {
        const {
            coords: { latitude, longitude },
        } = await getCurrentLocation();

        const address = await getAddressByGeoData(latitude, longitude);
        const city = address.results[0].address_components.filter(item => item.types.includes(AddressTypes.Locality))[0]
            .long_name;

        setLocation(longitude, latitude, city);
    }

    async function goBack() {
        setMapFilter(locationState.city);
        await Navigation.dismissAllModals();
        props.clbk ? props.clbk(locationState.city) : null;
    }

    function setLocation(longitude: number, latitude: number, city = '') {
        setLocationState({
            region: {
                longitude,
                latitude,
            },
            city,
        });

        if (city) {
            getCoordinates(city);
        }
    }

    function setFromSearch(location: any) {
        const {
            geometry: {
                location: { lng, lat },
            },
            address_components,
        } = location;

        const city = address_components.filter((address: any) => address.types.includes('locality'))[0].long_name;

        setLocation(lng, lat, city);
    }

    function openAutocomplete() {
        setAutoCompleteHeight(winHeight);
    }

    function closeAutocomplete() {
        setAutoCompleteHeight(autocompleteHeightInit);
    }

    return (
        <>
            <View style={[Styles.searchBox, { height: autocompleteHeight }]}>
                <LocalizationSearch setLocalization={setFromSearch} />
            </View>
            <View style={[Styles.widthBox, { height: winHeight }]}>
                <MapView
                    region={{
                        latitude: Number(locationState.region.latitude.toFixed(4)),
                        longitude: Number(locationState.region.longitude.toFixed(4)),
                        latitudeDelta: 1,
                        longitudeDelta: 1,
                    }}
                    loadingEnabled={true}
                    loadingIndicatorColor={StylesValue(ThemeVariables.HighlightColor1)}
                    loadingBackgroundColor={StylesValue(ThemeVariables.BackgroundColor1)}
                    moveOnMarkerPress={false}
                    showsCompass={false}
                    style={StyleSheet.absoluteFillObject}>
                    {coordinates
                        ? coordinates.map((coordinate, index) => (
                              <Marker
                                  key={index}
                                  coordinate={{
                                      latitude: coordinate.lat,
                                      longitude: coordinate.lng,
                                  }}
                              />
                          ))
                        : null}
                </MapView>
            </View>
            {locationState.city ? (
                <MapButton onPress={goBack} text={`${locationState.city} (${coordinates ? coordinates.length : 0})`} />
            ) : null}
        </>
    );
}
