import React from 'react';

import { View } from 'react-native';

import { UserIntroSetupStep } from 'types';

import { Styles } from './styles';

interface StepCounterProps {
    step: UserIntroSetupStep;
    steps: UserIntroSetupStep[];
}

export function StepCounter(props: StepCounterProps) {
    return (
        <View style={Styles.contentContainer}>
            {props.steps.map((step, index) => (
                <View
                    key={step}
                    style={[
                        Styles.stepPill,
                        props.step === step
                            ? Styles.activePill
                            : props.steps.indexOf(props.step) > index
                            ? Styles.finishedPill
                            : null,
                    ]}
                />
            ))}
        </View>
    );
}
