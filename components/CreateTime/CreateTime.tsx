import { CreateTimeModel } from 'app-constants/createTime';
import React from 'react';

import { Text } from 'components';
import { createdAtCalc } from 'tools';
import { Sizes } from 'types';

import { Styles } from './styles';

interface CreateTimeProps {
    createdAt: number | Date;
}

export function CreateTime(props: CreateTimeProps) {
    const [createdAtString, , hours, , createdAtDate] = createdAtCalc(props.createdAt);

    return (
        <Text style={Styles.text} fontSize={Sizes.XSmall} color="gray">
            {hours > CreateTimeModel.maxHours ? createdAtDate : createdAtString}
        </Text>
    );
}
