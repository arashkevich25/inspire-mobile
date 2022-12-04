import React, { useEffect, useMemo, useRef, useState } from 'react';
import { menuControl } from '../../MenuControl';

import { Animated } from 'react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler';

import { BottomMenuItem } from 'types';
import { GroupItem, Header, Item, MenuGroup, MenuItem } from './components';

import { Styles } from './styles';

interface MenuProps {
    children: any;
}

type GroupsElementType = React.ReactElement<BottomMenuItem> | null;

export function Menu(props: MenuProps) {
    const [activeGroup, setActiveGroup] = useState<GroupsElementType>(null);
    const prevGroups: GroupsElementType[] = useMemo(() => [], []);
    let isClosing = false;

    const collapseAnim = useRef(new Animated.Value(-1000)).current;
    const downEvent = async (event: any) => {
        if (event.nativeEvent.state === State.ACTIVE && event.nativeEvent.translationY > 0) {
            collapseAnim.setValue(event.nativeEvent.translationY * -1);
        }

        if (event.nativeEvent.translationY >= 120) {
            closeMenuHandle();
        }
    };

    function closeMenuHandle() {
        isClosing = true;
        Animated.timing(collapseAnim, {
            toValue: -1000,
            duration: 200,
            useNativeDriver: false,
        }).start();
        setTimeout(async () => await menuControl.closeMenu(), 200);
    }

    useEffect(() => {
        Animated.timing(collapseAnim, {
            toValue: 0,
            duration: 200,
            useNativeDriver: false,
        }).start();
    });

    function openDetailGroup(child: React.ReactElement<BottomMenuItem>) {
        prevGroups.push(activeGroup);
        setActiveGroup(child);
    }

    function backToMain() {
        setActiveGroup(prevGroups[prevGroups.length - 1]);
        prevGroups.splice(prevGroups.length - 1, 1);
    }

    function renderChildren(elementChildren: any): any {
        return React.Children.map(elementChildren, (child, index) => {
            if (child.type === MenuGroup) {
                return <GroupItem openGroupHandle={openDetailGroup} key={index} child={child} />;
            }

            if (child.type === MenuItem) {
                return <Item child={child} key={index} />;
            }

            return child;
        });
    }

    function onHandleGestureStateChange(event: any) {
        if (event.nativeEvent.state === State.END && !isClosing) {
            Animated.timing(collapseAnim, {
                toValue: 0,
                duration: 200,
                useNativeDriver: false,
            }).start();
        }
    }

    return (
        <PanGestureHandler onGestureEvent={downEvent} onHandlerStateChange={onHandleGestureStateChange} minDist={10}>
            <Animated.ScrollView
                style={[{ bottom: collapseAnim }, Styles.contentContainer]}
                stickyHeaderIndices={[0]}
                bounces={false}>
                <Header child={activeGroup} backHandle={backToMain} />
                {activeGroup ? renderChildren(activeGroup.props.children) : renderChildren(props.children)}
            </Animated.ScrollView>
        </PanGestureHandler>
    );
}
