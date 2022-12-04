import { BasicPost } from '@inspire/types';
import React from 'react';

import { View } from 'react-native';

import { InspirationCount } from 'components';
import { createdAtCalc } from 'tools';
import { WallPostHandles, WallPostHandlesTypes } from 'types';
import { ActionPanel, CreatedAt, Description, Photo, SharedDetails } from './components';

import { Styles } from './styles';

interface PostProps {
    post: BasicPost;
    rootUserId: number;
    pressHandle: (type: WallPostHandles, post: BasicPost) => void;
}

function Component(props: PostProps) {
    const [createdAt, , hours, , createdAtDate] = createdAtCalc(Number(props.post.createdAt));
    function showDetails() {
        props.pressHandle(WallPostHandlesTypes.OpenPostDetails, props.post);
    }

    function followOnFollowPost() {
        props.pressHandle(WallPostHandlesTypes.Inspire, props.post);
    }

    function openProfileHandle() {
        props.pressHandle(WallPostHandlesTypes.OpenProfile, props.post);
    }

    function recommendHandle() {
        props.pressHandle(WallPostHandlesTypes.Recommend, props.post);
    }

    function actionPresHandle(type: WallPostHandles): void {
        switch (type) {
            case WallPostHandlesTypes.Recommend: {
                recommendHandle();
                break;
            }
            case WallPostHandlesTypes.Inspire: {
                followOnFollowPost();
                break;
            }
            case WallPostHandlesTypes.OpenPostDetails: {
                showDetails();
                break;
            }
            default:
                break;
        }
    }

    return (
        <View style={Styles.contentContainer} testID={`post['wall-${props.post.name}']`}>
            <View style={Styles.topPanelContainer}>
                <SharedDetails
                    openProfile={openProfileHandle}
                    location={props.post.location}
                    postGroups={props.post.groups}
                    user={props.post.user}
                />
                <View style={Styles.inspireCountBox}>
                    <InspirationCount
                        authenticated={true}
                        inspirationCount={props.post.inspirationCount}
                        recommendCount={props.post.recommends}
                        usersAvatar={props.post.inspiredUsersAvatars}
                    />
                </View>
            </View>
            <Photo name={props.post.name} uri={props.post.photo} pressHandle={showDetails} />
            <View style={Styles.bottomContainer}>
                <ActionPanel
                    isInspiredByUser={props.post.isInspiredByUser}
                    hasRecommendByUser={props.post.userHasRecommend}
                    pressHandle={actionPresHandle}
                />
                <CreatedAt createdAt={createdAt} createdAtDate={createdAtDate} hours={hours} />
            </View>
            <View style={Styles.bottomContainer}>
                <Description onPressHandle={showDetails} desc={props.post.desc} />
            </View>
        </View>
    );
}

export const WallPost = React.memo(Component, (prevProps: PostProps, nextProps: PostProps) => {
    const isUserPrev = prevProps.post.inspirationCount;
    const isUserNext = nextProps.post.inspirationCount;

    return isUserPrev === isUserNext && prevProps.post.recommends == nextProps.post.recommends;
});
