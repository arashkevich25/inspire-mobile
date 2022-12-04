import React from 'react';

import FastImage from 'react-native-fast-image';

// @ts-ignore
import { Styles } from './styles';

type resizeMode = 'contain' | 'cover' | 'stretch' | 'center';

interface ImageProps {
    uri: any;
    width?: number | string;
    height?: number;
    borderRadius?: number;
    resizeMode?: resizeMode;
    tintColor?: string;
    style?: any;
}

interface ImageState {}

export class Image extends React.PureComponent<ImageProps, ImageState> {
    static defaultProps = {
        resizeMode: FastImage.resizeMode.contain,
        height: '100%',
        tintColor: '',
        borderRadius: 0,
    };

    public render(): React.ReactElement<ImageProps> {
        const { uri, height, width, borderRadius, ...otherPros } = this.props;

        return (
            <FastImage
                style={[Styles.contentContainer, { height, width, borderRadius }]}
                source={uri}
                resizeMode={this.props.resizeMode}
                {...otherPros}
            />
        );
    }
}
