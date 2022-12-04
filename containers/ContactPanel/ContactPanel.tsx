import { UserContactData } from '@inspire/types';
import React from 'react';

import { Linking, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { StylesValue } from 'tools';
import { ThemeVariables } from 'types';

import { Styles } from './styles';

interface ContactPanelProps {
    contactData: UserContactData;
}

export function ContactPanel(props: ContactPanelProps) {
    async function openFbProfile() {
        await Linking.openURL(props.contactData.facebook || '');
    }
    async function openIgProfile() {
        await Linking.openURL(props.contactData.instagram || '');
    }
    async function openLinkedinProfile() {
        await Linking.openURL(props.contactData.linkedin || '');
    }
    async function openWeb() {
        await Linking.openURL(props.contactData.web || '');
    }
    async function openPhone() {
        await Linking.openURL(props.contactData.phone ? `tel://${props.contactData.phone}` : '');
    }
    async function openEmail() {
        await Linking.openURL(props.contactData.email ? `mailto:${props.contactData.email}` : '');
    }
    return (
        <View style={Styles.contentContainer}>
            {props.contactData.facebook ? (
                <TouchableOpacity onPress={openFbProfile}>
                    <Icon
                        style={Styles.icon}
                        name="facebook-square"
                        size={30}
                        color={StylesValue(ThemeVariables.Color1)}
                    />
                </TouchableOpacity>
            ) : null}

            {props.contactData.instagram ? (
                <TouchableOpacity onPress={openIgProfile}>
                    <Icon style={Styles.icon} name="instagram" size={30} color={StylesValue(ThemeVariables.Color1)} />
                </TouchableOpacity>
            ) : null}

            {props.contactData.linkedin ? (
                <TouchableOpacity onPress={openLinkedinProfile}>
                    <Icon style={Styles.icon} name="linkedin" size={30} color={StylesValue(ThemeVariables.Color1)} />
                </TouchableOpacity>
            ) : null}

            {props.contactData.web ? (
                <TouchableOpacity onPress={openWeb}>
                    <Icon style={Styles.icon} name="globe" size={30} color={StylesValue(ThemeVariables.Color1)} />
                </TouchableOpacity>
            ) : null}

            {props.contactData.phone ? (
                <TouchableOpacity onPress={openPhone}>
                    <Icon style={Styles.icon} name="phone" size={30} color={StylesValue(ThemeVariables.Color1)} />
                </TouchableOpacity>
            ) : null}

            {props.contactData.email ? (
                <TouchableOpacity onPress={openEmail}>
                    <Icon style={Styles.icon} name="envelope" size={30} color={StylesValue(ThemeVariables.Color1)} />
                </TouchableOpacity>
            ) : null}
        </View>
    );
}
