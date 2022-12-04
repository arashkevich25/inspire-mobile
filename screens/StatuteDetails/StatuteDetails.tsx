import React, { useEffect } from 'react';

import { ScrollView, View } from 'react-native';

import { Button, Loader, Text } from 'components';
import { ButtonTypes } from 'components/Button/types/ButtonTypes';
import { useStatute } from 'hooks';
import { Sizes } from 'types';

import { Styles } from './styles';

interface StatuteDetailsProps {
    statuteId: number;
}

export function StatuteDetails(props: StatuteDetailsProps) {
    const { fetchStatuteDetails, statuteDetails, approveStatuteHandle, approveIsPending } = useStatute(props.statuteId);

    useEffect(() => {
        fetchStatuteDetails();
    }, []);

    if (!statuteDetails) {
        return <Loader />;
    }

    return (
        <View style={Styles.contentContainer}>
            <ScrollView>
                <Text fontSize={Sizes.Medium} style={Styles.text}>
                    {statuteDetails.statute}
                </Text>
            </ScrollView>
            <View style={Styles.buttonBox}>
                <Button
                    size="large"
                    type={ButtonTypes.Filled}
                    onPress={approveStatuteHandle}
                    isLoading={approveIsPending}
                    isBlocked={approveIsPending || statuteDetails.approvedByMe}
                    translateKey="buttons.approve"
                />
            </View>
        </View>
    );
}
