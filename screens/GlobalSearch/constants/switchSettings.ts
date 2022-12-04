import { SwitchItem } from 'types';
import { groups } from '../../../../e2e/selectors/groups';
import { Accounts } from '../components/Accounts';
import { Posts } from '../components/Posts';
import { Tags } from '../components/Tags';

export const switchSettings: SwitchItem[] = [
    {
        title: 'globalSearch.accounts.title',
        component: Accounts,
        rootIsRequired: false,
        testId: groups.buttons.switchMembers,
    },
    {
        title: 'globalSearch.posts.title',
        component: Posts,
        rootIsRequired: false,
        testId: groups.buttons.switchPosts,
    },
    {
        title: 'globalSearch.tags.title',
        component: Tags,
        rootIsRequired: false,
        testId: groups.buttons.switchPosts,
    },
];
