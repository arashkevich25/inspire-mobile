import { useDispatch, useSelector } from 'react-redux';

import { resetPassword, signIn } from 'actions';
import { AppState } from 'reducers';
import { getAuthEmail, initAppIsPending } from 'selectors';
import { authenticatedIsPending } from '../selectors/authenticated';

interface UseSignInOutput {
    signInHandle: (email: string, password: string) => void;
    email: string;
    authToAppIsPending: boolean;
    resetPasswordHandle: (email: string) => void;
}

export function useSignIn(): UseSignInOutput {
    const email = useSelector((state: AppState) => getAuthEmail(state));
    const appInitIsPending = useSelector((state: AppState) => initAppIsPending(state));
    const isPending = useSelector((state: AppState) => authenticatedIsPending(state));
    const dispatch = useDispatch();

    const authToAppIsPending = appInitIsPending || isPending;

    function resetPasswordHandle(email: string) {
        dispatch(resetPassword(email));
    }

    function signInHandle(email: string, password: string) {
        dispatch(signIn(email, password));
    }

    return {
        authToAppIsPending,
        signInHandle,
        email,
        resetPasswordHandle,
    };
}
