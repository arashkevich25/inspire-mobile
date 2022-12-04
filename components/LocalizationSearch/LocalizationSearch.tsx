import React from 'react';
import { EmptyFlatListPlug } from '../EmptyFlatListPlug';

// @ts-ignore
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Icon from 'react-native-vector-icons/FontAwesome';

import { ThirdPartApiCredo } from 'configs/thirdPartApiCredo';
import { StylesValue } from 'tools';
import I18n from 'tools/translate';
import { ThemeVariables } from 'types';

import { Styles } from './styles';

interface SearchProps {
    setLocalization: (location: any) => void;
    autoFocus?: boolean;
}

export function LocalizationSearch(props: SearchProps) {
    function setLocationHandle(location: any) {
        props.setLocalization(location);
    }

    function renderEmptyPlug() {
        return <EmptyFlatListPlug tkey="addPost.text.emptyLocalizationPlug" />;
    }

    function renderLeftButton() {
        return <Icon style={Styles.icon} name="search" size={16} color={StylesValue(ThemeVariables.Color1)} />;
    }

    return (
        <GooglePlacesAutocomplete
            placeholder={I18n.t('fields.searchLocalization')}
            minLength={2}
            allowFontScaling={false}
            autoFocus={props.autoFocus}
            returnKeyType={'search'}
            keyboardAppearance={'light'}
            listViewDisplayed={false}
            listEmptyComponent={renderEmptyPlug}
            fetchDetails={true}
            keyboardShouldPersistTaps="handled"
            renderDescription={(row: any) => row.description}
            onPress={(data: any, details = null) => {
                setLocationHandle(details);
            }}
            enablePoweredByContainer={false}
            getDefaultValue={() => ''}
            query={{
                key: ThirdPartApiCredo.Google,
                language: 'pl',
            }}
            styles={{
                textInputContainer: {
                    width: '100%',
                    backgroundColor: StylesValue(ThemeVariables.BackgroundColor2),
                    borderBottomColor: StylesValue(ThemeVariables.BackgroundColor1),
                    borderTopColor: StylesValue(ThemeVariables.BackgroundColor1),
                    position: 'relative',
                },
                textInput: {
                    backgroundColor: StylesValue(ThemeVariables.BackgroundColor2),
                    color: StylesValue(ThemeVariables.TextColor1),
                    height: 40,
                    paddingTop: 15,
                    paddingLeft: 50,
                },
                row: {
                    backgroundColor: StylesValue(ThemeVariables.BackgroundColor2),
                },
                description: {
                    fontWeight: 'bold',
                    backgroundColor: StylesValue(ThemeVariables.BackgroundColor2),
                    color: StylesValue(ThemeVariables.TextColor1),
                },
                predefinedPlacesDescription: {
                    backgroundColor: StylesValue(ThemeVariables.BackgroundColor2),
                    color: StylesValue(ThemeVariables.TextColor1),
                },
            }}
            currentLocation={false}
            nearbyPlacesAPI="GooglePlacesSearch"
            GoogleReverseGeocodingQuery={{}}
            GooglePlacesSearchQuery={{
                rankby: 'distance',
                type: 'cafe',
            }}
            GooglePlacesDetailsQuery={{
                fields: ['geometry', 'formatted_address', 'address_components', 'place_id', 'types'],
            }}
            filterReverseGeocodingByTypes={['locality', 'administrative_area_level_3']}
            debounce={200}
            renderLeftButton={renderLeftButton}
        />
    );
}
