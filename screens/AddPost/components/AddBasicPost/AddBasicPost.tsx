import React from 'react';
import { initialPostSettingsState } from '../../AddPost';

import { AddForm } from './components/AddForm';
import { SummaryState } from './components/AddForm/AddForm';
import { PostDetailsValues } from './components/AddForm/components/PostDetailsForm/PostDetailsForm';

interface AddBasicPostProps {
    initialFormValues?: PostDetailsValues;
    postSettings?: SummaryState;
}

export function AddBasicPost(props: AddBasicPostProps) {
    return (
        <AddForm
            initialFormValues={props.initialFormValues || { name: '', desc: '' }}
            postSettings={props.postSettings || initialPostSettingsState}
        />
    );
}
