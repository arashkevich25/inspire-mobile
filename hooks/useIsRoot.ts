import { User } from '@inspire/types';
import { useSelector } from 'react-redux';

import { useInitUserData } from 'hooks/useInitUserData';
import { AppState } from 'reducers';
import { getUserId } from 'selectors';

type UserIsRootOutput = [boolean, User];

export function useIsRoot(userId: number): UserIsRootOutput {
    const rootId = useSelector((state: AppState) => getUserId(state));
    const { details } = useInitUserData(rootId);

    return [rootId == userId, details as User];
}
