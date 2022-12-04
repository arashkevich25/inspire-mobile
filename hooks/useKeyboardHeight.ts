import { useEffect, useState } from 'react';

import { Keyboard } from 'react-native';

export function useKeyboardHeight(): number {
    const [keyboardHeight, setKeyboardHeight] = useState<number>(0);

    function keyboardHasShowedHandle(event: any) {
        setKeyboardHeight(event.endCoordinates.height);
    }

    function keyboardHasHideHandle() {
        setKeyboardHeight(0);
    }

    useEffect(() => {
        const listener1 = Keyboard.addListener('keyboardDidShow', keyboardHasShowedHandle);
        const listener2 = Keyboard.addListener('keyboardDidHide', keyboardHasHideHandle);
        return () => {
            listener1.remove();
            listener2.remove();
        };
    }, []);

    return keyboardHeight;
}
