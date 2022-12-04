import { useDispatch } from 'react-redux';

import { increasePostSent } from 'actions';

interface UsePostSendOutput {
    increasePostSendHandle: (postId: string) => void;
}

export function usePostSend(): UsePostSendOutput {
    const dispatch = useDispatch();

    function increasePostSendHandle(postId: string) {
        dispatch(increasePostSent(postId));
    }

    return {
        increasePostSendHandle,
    };
}
