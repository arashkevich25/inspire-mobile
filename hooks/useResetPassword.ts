import { useDispatch, useSelector } from 'react-redux';

import { resetPassword } from 'actions';
import { AppState } from 'reducers';
import { resetPasswordPending } from 'selectors';

interface UseResetPasswordOutput {
    resetPasswordHandle: (email: string) => void;
    resetPasswordIsPendingState: boolean;
}

export function useResetPassword(): UseResetPasswordOutput {
    const dispatch = useDispatch();
    const resetPasswordIsPendingState = useSelector((state: AppState) => resetPasswordPending(state));

    function resetPasswordHandle(email: string) {
        dispatch(resetPassword(email));
    }

    return {
        resetPasswordHandle,
        resetPasswordIsPendingState,
    };
}
