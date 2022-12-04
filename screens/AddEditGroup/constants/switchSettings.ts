import { SwitchItem } from '@inspire/types';

import { groups } from '../../../../e2e/selectors/groups';
import { Members, Posts } from '../components';

export const switchSettings: SwitchItem[] = [
    {
        title: 'profile.switcher.members',
        component: Members,
        rootIsRequired: false,
        testId: groups.buttons.switchMembers,
    },
    {
        title: 'profile.switcher.posts',
        component: Posts,
        rootIsRequired: false,
        testId: groups.buttons.switchPosts,
    },
];
