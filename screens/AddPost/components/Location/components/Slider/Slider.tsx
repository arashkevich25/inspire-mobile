import { GeoDataAddressResponse, GeoDataResult } from '@inspire/types';
import React from 'react';

import { ScrollView, View } from 'react-native';

import { Pill } from 'components';
import { EmptyPlug } from './components';

import { Styles } from './styles';

interface SliderProps {
    locationState: GeoDataAddressResponse | undefined;
    setLocationProps: (location: GeoDataResult) => void;
    selectedLocation: GeoDataResult | null;
    getAddressCallback: () => void;
}

export function Slider({ locationState, setLocationProps, selectedLocation, getAddressCallback }: SliderProps) {
    return (
        <View>
            <ScrollView style={Styles.scrollContent} horizontal={true} showsHorizontalScrollIndicator={false}>
                {locationState ? (
                    locationState.results.map((location, index) => (
                        <Pill<GeoDataResult>
                            isSelected={selectedLocation ? location.place_id === selectedLocation.place_id : false}
                            selectHandle={setLocationProps}
                            key={index}
                            argsHandle={location}>
                            {location.formatted_address}
                        </Pill>
                    ))
                ) : (
                    <EmptyPlug getAddressCallback={getAddressCallback} />
                )}
            </ScrollView>
        </View>
    );
}
