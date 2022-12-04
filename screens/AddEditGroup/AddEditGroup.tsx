import { GroupsWithUsers, User } from '@inspire/types';
import { Formik, FormikProps } from 'formik';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavProps } from '../../types/NavProps';
import { switchSettings } from './constants/switchSettings';
import { FormValues } from './types/FormValues';

import { View } from 'react-native';
import { Navigation } from 'react-native-navigation';

import { clearAvatarStore, removeGroupPosts, removeUsersFromEditedGroup } from 'actions';
import { Switcher } from 'components';
import { useRootUserData, useUserGroups } from 'hooks';
import { AppState } from 'reducers';
import { getNewAvatar } from 'selectors';
import { s3Uploader } from 'tools/s3Uploader';
import { AvatarNameField } from './components/Members/components';

import { Styles } from './styles';

interface AddEditGroupProps extends NavProps {
    group?: GroupsWithUsers;
}

export function AddEditGroup(props: AddEditGroupProps) {
    // @ts-ignore
    const formEl = useRef<Formik<FormValues>>(null);
    const [userId] = useRootUserData();
    const [isLoading, setLoadingState] = useState(false);
    const { usersForGroup, createGroup, updateGroup, groupPosts } = useUserGroups(userId, props.group);
    const avatar = useSelector((state: AppState) => getNewAvatar(state));
    const dispatch = useDispatch();

    async function onSubmitHandle(values: FormValues) {
        if (avatar) {
            setLoadingState(true);
            // @ts-ignore
            const { postResponse } = await s3Uploader(
                {
                    uri: avatar,
                },
                [991],
                // eslint-disable-next-line @typescript-eslint/no-empty-function
                () => {},
            );
            createOrUpdateGroup(values.groupName, usersForGroup, postResponse.location);
            setLoadingState(false);
            return;
        }
        createOrUpdateGroup(values.groupName, usersForGroup, '');
    }

    function createOrUpdateGroup(groupName: string, users: User[], avatar: string) {
        if (props.group) {
            updateGroup(props.group.group.id, groupName, users, avatar || props.group.group.avatar);
            return;
        }
        createGroup(groupName, users, avatar);
    }

    useEffect(() => {
        return () => {
            dispatch(clearAvatarStore());
            dispatch(removeUsersFromEditedGroup());
            dispatch(removeGroupPosts());
        };
    }, []);

    async function navigateToProfile() {
        if (!formEl.current!.values.groupName) {
            return;
        }
        await formEl.current!.submitForm();
        await Navigation.pop(props.componentId);
    }

    return (
        <View style={Styles.contentContainer}>
            <View style={Styles.formBox}>
                <Formik
                    // @ts-ignore
                    innerRef={formEl}
                    initialValues={{
                        groupName: props.group?.group.name || '',
                    }}
                    onSubmit={onSubmitHandle}>
                    {(formikProps: FormikProps<FormValues>) => (
                        <AvatarNameField editedAvatar={props.group?.group.avatar} {...formikProps} />
                    )}
                </Formik>
            </View>
            <View style={Styles.switchBox}>
                <Switcher
                    isRoot={false}
                    userId={userId}
                    groupName={props.group?.group.name}
                    switchSettings={switchSettings}
                    navigateToProfile={navigateToProfile}
                    usersForGroup={usersForGroup}
                    posts={groupPosts}
                    groupId={props.group?.group.id}
                    updateLoading={isLoading}
                    {...props}
                />
            </View>
        </View>
    );
}
