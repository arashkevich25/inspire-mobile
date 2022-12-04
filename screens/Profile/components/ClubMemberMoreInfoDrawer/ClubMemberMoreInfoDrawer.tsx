import { User } from '@inspire/types';
import React from 'react';

import { ScrollView, View } from 'react-native';
import { Navigation } from 'react-native-navigation';

import { DrawSection, Text } from 'components';
import { SubscribersFollowersList } from 'navigation/components/subscribersFollowersList';
import I18n from 'tools/translate';
import { NavProps, Sizes } from 'types';

import { Styles } from './styles';

interface ClubMemberMoreInfoDrawerProps extends NavProps {
    recommendCount: number;
    viewsCount: number;
    postsCount: number;
    followersCount: number;
    subscribersCount: number;
    inspiredCount: number;
    subscribers: User[];
    followers: User[];
    isRoot: boolean;
}

export function ClubMemberMoreInfoDrawer(props: ClubMemberMoreInfoDrawerProps) {
    async function openSubscribersList() {
        await Navigation.push(props.componentId, {
            component: SubscribersFollowersList(
                props.subscribers,
                I18n.t('profile.title'),
                I18n.t('profile.statistics.subscribers'),
            ),
        });
    }

    async function openFollowersList() {
        await Navigation.push(props.componentId, {
            component: SubscribersFollowersList(
                props.subscribers,
                I18n.t('profile.title'),
                I18n.t('profile.statistics.followers'),
            ),
        });
    }

    return (
        <ScrollView>
            <View style={Styles.recommendsCount}>
                <Text isBold={true} style={Styles.recommendsCountText} fontSize={Sizes.DoubleLarge}>
                    {props.recommendCount}
                </Text>
                <Text
                    fontSize={Sizes.Small}
                    isBold={true}
                    style={Styles.recommendsCountAdditionalText}
                    color="gray"
                    translateKey="profile.texts.recommendUserText"
                />
            </View>
            <DrawSection title={I18n.t('profile.texts.postsCount')} value={props.postsCount} />
            <DrawSection title={I18n.t('profile.texts.inspirationsCount')} value={props.inspiredCount} />
            <DrawSection
                pressHandle={openFollowersList}
                title={I18n.t('profile.texts.followersCount')}
                value={props.followersCount}
            />
            <DrawSection
                pressHandle={openSubscribersList}
                title={I18n.t('profile.texts.subscribersCount')}
                value={props.subscribersCount}
            />
            <DrawSection title={I18n.t('profile.texts.viewsCount')} value={props.viewsCount} />
        </ScrollView>
    );
}
