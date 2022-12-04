import React, { useRef } from 'react';

import { View } from 'react-native';
import { DrawerLayout } from 'react-native-gesture-handler';

import { Styles } from './styles';

interface DrawerProps {
    children: any;
    drawerChildren: any;
}

export function Drawer(props: DrawerProps) {
    const drawerRef = useRef<any>(null);

    function openDrawerHandle() {
        drawerRef.current!.openDrawer();
    }

    function renderDrawer() {
        // eslint-disable-next-line react/prop-types
        return <View style={[Styles.drawerContainer]}>{props.drawerChildren}</View>;
    }

    return (
        <DrawerLayout
            ref={drawerRef}
            drawerWidth={200}
            drawerPosition="right"
            drawerType="slide"
            renderNavigationView={renderDrawer}>
            <View style={Styles.childrenContainer}>{props.children(openDrawerHandle)}</View>
        </DrawerLayout>
    );
}
