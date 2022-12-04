import { useDispatch, useSelector } from 'react-redux';

import { setPassword, signUp } from 'actions';
import { AppState } from 'reducers';
import { initAppIsPending } from 'selectors';
import { authenticatedIsPending, getSetPasswordIsPending } from 'selectors/authenticated';

type UseSignUpOutput = {
    signUpHandle: (email: string, password: string) => void;
    setPasswordHandle: (token: string, password: string) => void;
    authToAppIsPending: boolean;
};

export function useSignUp(): UseSignUpOutput {
    const dispatch = useDispatch();
    const isPending = useSelector((state: AppState) => authenticatedIsPending(state));
    const setPasswordIsPending = useSelector((state: AppState) => getSetPasswordIsPending(state));
    const appInitIsPending = useSelector((state: AppState) => initAppIsPending(state));

    const authToAppIsPending = appInitIsPending || isPending || setPasswordIsPending;

    function signUpHandle(email: string, password: string) {
        dispatch(signUp(email, password));
    }

    function setPasswordHandle(token: string, password: string) {
        dispatch(setPassword(token, password));
    }

    return {
        signUpHandle,
        setPasswordHandle,
        authToAppIsPending,
    };
}
