import { User } from '@inspire/types';
import { ComponentId } from 'navigation/constants';
import React, { useEffect } from 'react';

import { Alert, FlatList, View } from 'react-native';
import { Navigation } from 'react-native-navigation';

import { Button, ButtonTypes, CustomRefreshControl } from 'components';
import { useRootUserData, useUserGroups } from 'hooks';
import I18n from 'tools/translate';
import { FlatListData } from 'types';
import { choosePersonToGroup } from '../../../e2e/selectors/choosePersonToGroup';
import { ItemUser } from './components';
import { ListFooter } from './components/ListFooter/ListFooter';

import { Styles } from './styles';

interface ChoosePersonToGroupProps {
    groupId: number;
}

export function ChoosePersonToGroup(props: ChoosePersonToGroupProps) {
    const [rootUserId, userFriends, friendsPending, getFriends] = useRootUserData();
    const { usersForGroup, addUserToGroup, removeUserFromGroup, leaveGroupFromGroup } = useUserGroups(rootUserId);

    const preparedArr: FlatListData[] = userFriends.map((user, index) => ({
        user,
        key: index.toString(),
    }));

    async function leaveGroup() {
        leaveGroupFromGroup(props.groupId);
        await Navigation.pop(ComponentId.ScreenChoosePersonToGroup);
        await Navigation.pop(ComponentId.ScreenAddEditGroup);
    }

    function leaveGroupModal() {
        Alert.alert(I18n.t('choosePersonToGroup.dialog.title'), I18n.t('choosePersonToGroup.dialog.subTitle'), [
            {
                text: I18n.t('choosePersonToGroup.dialog.buttons.cancel'),
                style: 'cancel',
            },
            {
                text: I18n.t('choosePersonToGroup.dialog.buttons.accept'),
                onPress: leaveGroup,
            },
        ]);
    }

    useEffect(() => {
        getFriends();
    }, []);

    return (
        <View style={Styles.contentContainer}>
            <FlatList
                style={Styles.listContainer}
                data={preparedArr}
                extraData={usersForGroup}
                keyExtractor={item => String(item.user.id)}
                refreshControl={<CustomRefreshControl refreshing={friendsPending} onRefresh={getFriends} />}
                renderItem={({ item }: { item: { key: string; user: User } }) => {
                    if (usersForGroup.some(user => user.id === item.user.id)) {
                        return (
                            <ItemUser
                                user={item.user}
                                onPressHandle={removeUserFromGroup}
                                btnTKey="subscribersFollowing.user.remove"
                            />
                        );
                    }

                    return (
                        <ItemUser
                            user={item.user}
                            onPressHandle={addUserToGroup}
                            btnTKey="subscribersFollowing.user.add"
                        />
                    );
                }}
                ListFooterComponent={<ListFooter />}
            />
            {props.groupId ? (
                <View>
                    <Button
                        testID={choosePersonToGroup.buttons.leaveFromGroup}
                        color="red"
                        type={ButtonTypes.Link}
                        onPress={leaveGroupModal}
                        translateKey="choosePersonToGroup.leaveGroup"
                    />
                </View>
            ) : null}
        </View>
    );
}
