import React from 'react';

import { View } from 'react-native';

import { ChildrenProps } from 'types';

import { Styles } from './styles';

interface LayoutProps {
    children: ChildrenProps;
}

interface LayoutState {}
//TODO check component and remove if unused
export class Layout extends React.PureComponent<LayoutProps, LayoutState> {
    public render(): React.ReactElement<LayoutProps> {
        return <View style={Styles.contentContainer}>{this.props.children}</View>;
    }
}
