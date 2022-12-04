import React from 'react';

import { View } from 'react-native';
import StarRating from 'react-native-star-rating';

import { Text } from 'components/Text';
import { post } from 'e2e/selectors';
import { StylesValue } from 'tools';
import I18n from 'tools/translate';
import { Sizes, ThemeVariables } from 'types';

import { Styles } from './styles';

interface PostRatingProps {
    updateRating: (postId: string, rating: number, postUserId: number) => void;
    rating: number;
    userRating: number;
    ratingCount: number;
    postId: string;
    isRateByUser: boolean;
    postUserId: number;
}

export function PostRating(props: PostRatingProps) {
    function setRating(rating: number) {
        props.updateRating(props.postId, rating, props.postUserId);
    }

    const rating = props.isRateByUser ? props.userRating : props.rating;

    return (
        <View style={Styles.contentContainer}>
            <View style={Styles.starsBox}>
                <StarRating
                    starSize={20}
                    maxStars={5}
                    rating={rating}
                    fullStarColor={
                        props.isRateByUser
                            ? StylesValue(ThemeVariables.Gold)
                            : StylesValue(ThemeVariables.TextColorGray)
                    }
                    selectedStar={setRating}
                />
                {props.rating ? (
                    <View style={Styles.ratingText}>
                        <Text fontSize={Sizes.Small} color="gray">
                            {props.rating}/5
                        </Text>
                    </View>
                ) : null}
            </View>
            {props.ratingCount ? (
                <Text fontSize={Sizes.XSmall} color="gray" testID={post.texts.ratingCount}>
                    {I18n.t('text.ratingLabel')} {props.ratingCount}
                </Text>
            ) : null}
        </View>
    );
}
