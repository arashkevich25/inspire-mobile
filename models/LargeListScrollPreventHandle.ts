import { isIphone } from '../app-constants/isIphone';

import { PanResponder, PanResponderInstance } from 'react-native';

export class LargeListScrollPreventHandle {
    static isScrollingTimeout: any;
    static openPostHandle: (postId: string) => void;
    static coordinatesMoveY: number;
    static isScrolling: boolean;
    static timeoutAndroid = 300;
    static timeoutIos = 100;
    static timeout: number = isIphone
        ? LargeListScrollPreventHandle.timeoutIos
        : LargeListScrollPreventHandle.timeoutAndroid;
    static androidPanResponder: PanResponderInstance = PanResponder.create({
        onMoveShouldSetPanResponder: (_, gestureState) => {
            return !(gestureState.dx === 0 && gestureState.dy === 0);
        },
        onPanResponderMove: (_, gestureState) => {
            const moveY = Math.round(gestureState.moveY);
            if (moveY !== LargeListScrollPreventHandle.coordinatesMoveY) {
                LargeListScrollPreventHandle.clearScrollingTimeout();
            }
            LargeListScrollPreventHandle.coordinatesMoveY = moveY;
        },
    });
    static iosPanResponder: PanResponderInstance = PanResponder.create({
        onMoveShouldSetPanResponder: () => {
            return true;
        },
        onPanResponderMove: (_, coordinates) => {
            if (coordinates.moveY !== LargeListScrollPreventHandle.coordinatesMoveY) {
                LargeListScrollPreventHandle.clearScrollingTimeout();
            }
            LargeListScrollPreventHandle.coordinatesMoveY = coordinates.moveY;
        },
    });

    // static panResponder: PanResponderInstance = isIphone
    //     ? LargeListScrollPreventHandle.iosPanResponder
    //     : LargeListScrollPreventHandle.androidPanResponder;

    static panResponder: PanResponderInstance = isIphone
        ? LargeListScrollPreventHandle.iosPanResponder
        : PanResponder.create({});

    static startScrolling() {
        LargeListScrollPreventHandle.isScrolling = true;
        LargeListScrollPreventHandle.clearScrollingTimeout();
    }
    static stopScrolling() {
        LargeListScrollPreventHandle.isScrolling = false;
        LargeListScrollPreventHandle.clearScrollingTimeout();
    }
    static openPost(postId: string) {
        LargeListScrollPreventHandle.clearScrollingTimeout();
        LargeListScrollPreventHandle.isScrollingTimeout = setTimeout(
            () => LargeListScrollPreventHandle.openPostHandle(postId),
            LargeListScrollPreventHandle.timeout,
        );
    }
    static clearScrollingTimeout() {
        clearTimeout(LargeListScrollPreventHandle.isScrollingTimeout);
    }
}
