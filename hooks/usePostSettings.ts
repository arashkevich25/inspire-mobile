import { GeoDataResult } from '@inspire/types';
import { useEffect, useState } from 'react';

import { SummaryState } from '../screens/AddPost/components/AddBasicPost/components/AddForm/AddForm';
import { initLocation } from '../screens/AddPost/components/AddBasicPost/components/AddForm/constants/initLocation';

interface UsePostSettingsOutput {
    shareToSubscribers: () => void;
    shareToWorld: () => void;
    makePrivate: () => void;
    shareToGroup: () => void;
    setLocation: (location: GeoDataResult) => void;
    postData: SummaryState;
}

export function usePostSettings(postSettings: SummaryState): UsePostSettingsOutput {
    const [postData, setPostData] = useState<SummaryState>(postSettings);

    function shareToSubscribers() {
        setPostData({
            ...postData,
            isPrivate: false,
            isPublic: false,
            isSubscribers: !postData.isSubscribers,
            isGroup: false,
        });
    }

    function shareToWorld() {
        setPostData({
            ...postData,
            isPrivate: false,
            isPublic: !postData.isPublic,
            isSubscribers: false,
            isGroup: false,
        });
    }

    function makePrivate() {
        setPostData({
            ...postData,
            isPrivate: !postData.isPrivate,
            isSubscribers: false,
            isPublic: false,
            isGroup: false,
        });
    }

    function shareToGroup() {
        setPostData({
            ...postData,
            isGroup: !postData.isGroup,
            isSubscribers: false,
            isPublic: false,
            isPrivate: false,
        });
    }

    function setLocation(location: GeoDataResult) {
        if (!postData.location || postData.location.place_id !== location.place_id) {
            setPostData({ ...postData, location });
            return;
        }

        setPostData({ ...postData, location: initLocation });
    }

    useEffect(() => {
        setPostData(postSettings);
    }, [postSettings]);

    return {
        shareToSubscribers,
        shareToWorld,
        makePrivate,
        shareToGroup,
        setLocation,
        postData,
    };
}
