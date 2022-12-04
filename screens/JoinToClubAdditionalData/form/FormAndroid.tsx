import { SexSelectOptions } from '@inspire/types';
import { FormikProps } from 'formik';
import React from 'react';

import { Picker } from '@react-native-community/picker';
import { View } from 'react-native';

import { Button, ButtonTypes, Text } from 'components';
import { useGeolocation } from 'hooks';
import { InputForm } from 'tools/formFields';
import I18n from 'tools/translate';
import { Sizes } from 'types';

import { Styles } from './styles';

interface FormProps extends FormikProps<any> {}

export function FormAndroid(formikProps: FormProps) {
    const { towns } = useGeolocation();

    function setSex(sex: any): void {
        formikProps.setValues({ ...formikProps.values, sex });
    }

    function setTown(town: any): void {
        formikProps.setValues({ ...formikProps.values, town });
    }

    return (
        <View style={[Styles.contentContainer, { marginTop: 60 }]}>
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
                    <Picker
                        style={Styles.androidFontSize}
                        selectedValue={formikProps.values.sex}
                        onValueChange={setSex}>
                        <Picker.Item
                            style={Styles.androidFontSize}
                            label={I18n.t('clubDetails.fields.sexLabel')}
                            value={undefined}
                            enabled={false}
                        />
                        <Picker.Item
                            label={I18n.t('clubDetails.selectOptions.sex.female')}
                            value={SexSelectOptions.Female}
                        />
                        <Picker.Item
                            label={I18n.t('clubDetails.selectOptions.sex.male')}
                            value={SexSelectOptions.Male}
                        />
                        <Picker.Item
                            label={I18n.t('clubDetails.selectOptions.sex.another')}
                            value={SexSelectOptions.Another}
                        />
                        <Picker.Item
                            label={I18n.t('clubDetails.selectOptions.sex.dontSay')}
                            value={SexSelectOptions.DontSay}
                        />
                    </Picker>
                    <View style={Styles.divider} />
                    <Text style={Styles.text} color="gray" fontSize={Sizes.XSmall}>
                        {formikProps.errors.sex}
                    </Text>
                </View>
                <View>
                    <Picker
                        style={Styles.androidFontSize}
                        selectedValue={formikProps.values.town}
                        onValueChange={setTown}>
                        <Picker.Item label={I18n.t('clubDetails.fields.townLabel')} value={undefined} enabled={false} />
                        {towns.map(town => (
                            <Picker.Item key={town.id} label={town.name} value={town.id} />
                        ))}
                    </Picker>
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
