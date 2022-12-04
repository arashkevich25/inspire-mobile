import React from 'react';

import { View } from 'react-native';

import { PostRating } from 'components';

interface RatingProps {
    updateRating: (postId: string, rating: number) => void;
    userId: number;
    rating: number;
    userRating: number;
    ratingCount: number;
    isRateByUser: boolean;
    postId: string;
    postUserId: number;
}

export function Rating(props: RatingProps) {
    return (
        <View>
            <PostRating {...props} />
        </View>
    );
}
