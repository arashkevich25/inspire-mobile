import { SwitchItem } from 'types';
import { AddBasicPost, AddQuestionPost } from '../components';

export const AddPostTab: SwitchItem = {
    title: 'addPost.titles.post',
    component: AddBasicPost,
    rootIsRequired: false,
    testId: '',
};

export const AddQuestionPostTab: SwitchItem = {
    title: 'addPost.titles.question',
    component: AddQuestionPost,
    rootIsRequired: false,
    testId: '',
};

export const switchSettings: SwitchItem[] = [AddPostTab];
