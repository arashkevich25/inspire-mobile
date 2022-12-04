import React from 'react';
import { initialPostSettingsState } from '../../AddPost';
import { QuestionDetailsValues } from '../../types/QuestionDetailsValues';

import { SummaryState } from '../AddBasicPost/components/AddForm/AddForm';
import { AddForm } from './components/AddForm/AddForm';

interface AddQuestionPostProps {
    initialFormValues: QuestionDetailsValues;
    postSettings: SummaryState;
}

export function AddQuestionPost(props: AddQuestionPostProps) {
    return (
        <AddForm
            initialFormValues={props.initialFormValues || { name: '', desc: '', url: '', background: undefined }}
            postSettings={props.postSettings || initialPostSettingsState}
        />
    );
}
