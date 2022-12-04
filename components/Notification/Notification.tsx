import React from 'react';
import { InspiredToast, RecommendToast } from '../ToastsMessages';

import { View } from 'react-native';
import Toast from 'react-native-toast-message';

import { Styles } from './styles';

export function Notification() {
    return (
        <View style={Styles.contentContainer}>
            <Toast
                config={{
                    inspired: InspiredToast,
                    recommend: RecommendToast,
                }}
            />
        </View>
    );
}
