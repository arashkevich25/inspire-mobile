import { useEffect, useState } from 'react';

import { findNodeHandle, Keyboard } from 'react-native';

import { emptyFn } from 'tools/emptyFn';

type UseKeyboardStateOutput = {
    keyboardIsOpened: boolean;
    focusOnField: (elementRef: any, scrollViewRef: any) => void;
};

export function useKeyboardState(showKeyboardCbk = emptyFn, hiddenKeyboardCbk = emptyFn): UseKeyboardStateOutput {
    const [keyboardIsOpened, setKeyboardIsOpened] = useState<boolean>(false);

    function keyboardHasShowedHandle() {
        setKeyboardIsOpened(true);
        showKeyboardCbk();
    }

    function keyboardHasHideHandle() {
        setKeyboardIsOpened(false);
        hiddenKeyboardCbk();
    }

    useEffect(() => {
        const listener1 = Keyboard.addListener('keyboardDidShow', keyboardHasShowedHandle);
        const listener2 = Keyboard.addListener('keyboardDidHide', keyboardHasHideHandle);
        return () => {
            listener1.remove();
            listener2.remove();
        };
    }, []);

    function focusOnField(elementRef: any, scrollViewRef: any) {
        if (elementRef && elementRef.isFocused()) {
            elementRef.measureLayout(
                findNodeHandle(scrollViewRef.current),
                (x: number, y: number) => scrollViewRef.current!.scrollTo({ x, y, animated: true }),
                null,
            );
        }
    }

    return {
        keyboardIsOpened,
        focusOnField,
    };
}
