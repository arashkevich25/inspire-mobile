import { SexSelectOptions } from '@inspire/types';
import { FormikProps } from 'formik';
import React from 'react';

import { Keyboard, TouchableOpacity, View } from 'react-native';

import { Button, ButtonTypes, Text } from 'components';
import { menuControl } from 'components/BottomMenu';
import { InputForm } from 'tools/formFields';
import { Sizes } from 'types';
import { SexSelect, TownSelect } from './components';

import { Styles } from './styles';

interface FormProps extends FormikProps<any> {}

export function Form(formikProps: FormProps) {
    function setSex(sex: number) {
        formikProps.setValues({ ...formikProps.values, sex });
    }

    function setTown(town: number, townName: string) {
        formikProps.setValues({ ...formikProps.values, town, townName });
    }

    async function showSexSelect() {
        Keyboard.dismiss();
        await menuControl.openMenu({ children: <SexSelect setSex={setSex} selectedValue={formikProps.values.sex} /> });
    }

    async function showTownSelect() {
        Keyboard.dismiss();
        await menuControl.openMenu({
            children: <TownSelect setTown={setTown} selectedValue={formikProps.values.town} />,
        });
    }

    const sexLib: any = {
        [SexSelectOptions.Female]: 'clubDetails.selectOptions.sex.female',
        [SexSelectOptions.Male]: 'clubDetails.selectOptions.sex.male',
        [SexSelectOptions.Another]: 'clubDetails.selectOptions.sex.another',
        [SexSelectOptions.DontSay]: 'clubDetails.selectOptions.sex.dontSay',
    };

    return (
        <View style={Styles.contentContainer}>
            <View>
                <View style={Styles.inputBox}>
                    <InputForm
                        label="clubDetails.fields.fullNameLabel"
                        translateKey="clubDetails.fields.fullNamePlaceholder"
                        onChangeText={formikProps.handleChange('fullName')}
                        value={formikProps.values.fullName}
                        size="wide"
                        hasError={formikProps.errors.fullName}
                        hasHighlight={true}
                    />
                </View>
                <View style={Styles.sexSwitchBox}>
                    <View>
                        <Text color="gray" translateKey="clubDetails.fields.sexLabel" />
                    </View>
                    <TouchableOpacity onPress={showSexSelect}>
                        {formikProps.values.sex ? (
                            <Text fontSize={Sizes.Medium} translateKey={sexLib[formikProps.values.sex]} />
                        ) : (
                            <Text
                                color="gray"
                                fontSize={Sizes.Medium}
                                translateKey="clubDetails.fields.sexPlaceholder"
                            />
                        )}
                    </TouchableOpacity>
                    <View style={Styles.divider} />
                    <Text style={Styles.text} color="color1" fontSize={Sizes.XSmall}>
                        {formikProps.errors.sex}
                    </Text>
                </View>
                <View>
                    <View>
                        <Text color="gray" translateKey="clubDetails.fields.townLabel" />
                    </View>
                    <TouchableOpacity onPress={showTownSelect}>
                        {formikProps.values.town ? (
                            <Text fontSize={Sizes.Medium}>{formikProps.values.townName}</Text>
                        ) : (
                            <Text
                                color="gray"
                                fontSize={Sizes.Medium}
                                translateKey="clubDetails.fields.townPlaceholder"
                            />
                        )}
                    </TouchableOpacity>
                    <View style={Styles.divider} />
                    <Text style={Styles.text} color="gray" fontSize={Sizes.XSmall}>
                        {formikProps.errors.town}
                    </Text>
                </View>
            </View>
            <View>
                <Button
                    type={ButtonTypes.Filled}
                    size="poor"
                    translateKey="buttons.next"
                    onPress={formikProps.submitForm}
                />
            </View>
        </View>
    );
}
