import { Category } from '@inspire/types';
import React from 'react';
import { Base } from '../Base';

import { useUserCategories } from 'hooks';
import { UserIntroSetupStep } from 'types';
import { CategoriesGrid } from './components';

interface SetUserCategoriesProps {
    progress: number;
    nextStep: () => void;
    prevStep: () => void;
    step: UserIntroSetupStep;
    steps: UserIntroSetupStep[];
}

export function SetUserCategories(props: SetUserCategoriesProps) {
    const {
        allCategories,
        userCategories,
        setCategory,
        removeCategory,
        updateUserCategoriesHandle,
        setAllCategories,
    } = useUserCategories();
    const selectedCategoriesIds = userCategories.map(item => item.id);

    function saveButtonHandler() {
        if (!selectedCategoriesIds.length) {
            setAllCategories(allCategories);
            updateUserCategoriesHandle(allCategories);
            props.nextStep();
            return;
        }
        updateUserCategoriesHandle();
        props.nextStep();
    }

    function selectCategory(category: Category) {
        if (selectedCategoriesIds.includes(category.id)) {
            removeCategory(category);
            return;
        }
        setCategory(category);
    }
    return (
        <Base
            headerTkey="setUserCategories.title"
            step={props.step}
            steps={props.steps}
            handleSubmit={saveButtonHandler}
            descriptionTkey="setUserCategories.description"
            prevStep={props.prevStep}
            bottomBarIsFloat={true}
            content={
                <CategoriesGrid
                    selectedCategories={selectedCategoriesIds}
                    selectHandle={selectCategory}
                    categories={allCategories}
                />
            }
        />
    );
}
