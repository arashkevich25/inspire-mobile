/* eslint-disable react/jsx-no-undef */
import React from 'react';
import { Header } from '../Header';
import { StepCounter } from '../StepCounter';

import { Keyboard, TouchableOpacity, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { ButtonFilled, Image, Text } from 'components';
import { Sizes, UserIntroSetupStep } from 'types';
import { GlobalStyles } from '../../../../global-styles/globalStyles';

import { Styles } from './styles';

interface BaseProps {
    content: React.ReactElement;
    step: UserIntroSetupStep;
    steps: UserIntroSetupStep[];
    headerTkey: string;
    descriptionTkey?: string;
    handleSubmit: () => void;
    prevStep: () => void;
    bottomBarIsFloat?: boolean;
}

export function Base(props: BaseProps) {
    return (
        <KeyboardAwareScrollView>
            <TouchableOpacity activeOpacity={1} onPress={Keyboard.dismiss} style={Styles.contentContainer}>
                <View style={Styles.headerBox}>
                    <View style={Styles.itemBox}>
                        <StepCounter step={props.step} steps={props.steps} />
                    </View>
                    <View style={Styles.itemBox}>
                        <Header tkey={props.headerTkey} />
                    </View>
                </View>
                <View style={Styles.contentBox}>
                    {props.descriptionTkey ? (
                        <Text color="gray" style={Styles.descriptionBox} translateKey={props.descriptionTkey}></Text>
                    ) : null}
                    {props.content}
                </View>
                <View style={[Styles.buttonsContainer, Styles.itemBox]}>
                    {props.bottomBarIsFloat ? <View style={[Styles.floatOverlay, GlobalStyles.shadowBasic]} /> : null}
                    {props.steps.indexOf(props.step) != 0 ? (
                        <TouchableOpacity onPress={props.prevStep} style={Styles.prevButton}>
                            <Text fontSize={Sizes.Medium} translateKey="userIntroSetup.buttons.prev" color="blue" />
                        </TouchableOpacity>
                    ) : (
                        <View></View>
                    )}
                    <View style={Styles.buttonsBox}>
                        <ButtonFilled
                            fontSize={Sizes.Medium}
                            onPressHandle={props.handleSubmit}
                            translateKey="userIntroSetup.buttons.next"
                            icon={
                                <Image
                                    width={10}
                                    style={Styles.buttonIcon}
                                    uri={require('./../.../../../../../assets/arrow-next.png')}
                                />
                            }
                        />
                    </View>
                </View>
            </TouchableOpacity>
        </KeyboardAwareScrollView>
    );
}
