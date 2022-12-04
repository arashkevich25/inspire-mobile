import { isIphone } from 'app-constants';
import { ComponentId } from 'navigation';
import React from 'react';
import { Base } from '../Base/Base';

import { TouchableOpacity, View } from 'react-native';
import { Navigation } from 'react-native-navigation';

import { FloatBackButton, Image, Text } from 'components';
import I18n from 'tools/translate';
import { Sizes } from 'types';

import { Styles } from '../styles';

export function RememberPasswordDone() {
    function backHandle() {
        Navigation.popTo(ComponentId.AppLogin);
    }

    function backToResetPassword() {
        Navigation.pop(ComponentId.ScreenRememberPasswordDone);
    }

    return (
        <>
            {isIphone ? (
                <View style={Styles.backButtonBox}>
                    <FloatBackButton backHandle={backHandle} />
                </View>
            ) : null}
            <Base>
                <View style={Styles.roundImageBox}>
                    <Image style={Styles.resetPasswordDoneImage} width={110} uri={require('./../assets/check.png')} />
                </View>
                <View style={Styles.formContainer}>
                    <View style={Styles.resetPasswordDoneTitle}>
                        <Text isBold={true} fontSize={Sizes.DoubleLarge} translateKey="signIn.resetCheckEmailText" />
                    </View>
                    <View style={Styles.resetPasswordDoneDescription}>
                        <Text
                            style={Styles.restPasswordDescriptionText}
                            fontSize={Sizes.Medium}
                            translateKey="signIn.resetCheckEmailDescriptionText"
                        />
                    </View>
                    <View style={Styles.dividerLine} />
                    <View style={Styles.resetPasswordDoneDescription}>
                        <Text style={Styles.restPasswordDescriptionText} fontSize={Sizes.Small}>
                            {I18n.t('signIn.resetCheckEmailDescriptionText2')}
                            <TouchableOpacity
                                onPress={backToResetPassword}
                                style={Styles.resetPasswordDescriptionPressedArea}>
                                <Text
                                    style={[
                                        Styles.restPasswordDescriptionText,
                                        Styles.restPasswordDescriptionTextLineSmallHeight,
                                    ]}
                                    fontSize={Sizes.Small}
                                    color="blue"
                                    translateKey="signIn.resetCheckEmailDescriptionText3"
                                />
                            </TouchableOpacity>
                        </Text>
                    </View>
                </View>
            </Base>
        </>
    );
}
