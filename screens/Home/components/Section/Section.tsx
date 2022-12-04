import { HomeTemplateSection, HomeTemplateSectionsTypes } from '@inspire/types';
import React from 'react';

import { View } from 'react-native';

import {
    ButtonSection,
    ClubsPostsSection,
    ClubsSection,
    FollowersPostSection,
    GroupsSection,
    InfoSection,
    InspirationsPostsSection,
    LocationPostsSection,
    PostsSection,
    PostsSectionByCategory,
    PostsSectionLastAdded,
    PostsSectionWithoutShowMore,
    PostsWithAddPostSection,
    UsersSection,
} from './components';

import { Styles } from './styles';

interface SectionProps {
    section: HomeTemplateSection;
    isInternetReachableState: boolean;
    isLastSection: boolean;
}

function Component({ section, isInternetReachableState, isLastSection }: SectionProps) {
    let Component: any;
    switch (section.sectionType) {
        case HomeTemplateSectionsTypes.ClubsSection:
            Component = ClubsSection;
            break;
        case HomeTemplateSectionsTypes.ClubsPostsSection:
            Component = ClubsPostsSection;
            break;
        case HomeTemplateSectionsTypes.ButtonSection:
            Component = ButtonSection;
            break;
        case HomeTemplateSectionsTypes.InfoSection:
            Component = InfoSection;
            break;
        case HomeTemplateSectionsTypes.FollowersPostsSection:
            Component = FollowersPostSection;
            break;
        case HomeTemplateSectionsTypes.InspirationsPostsSection:
            Component = InspirationsPostsSection;
            break;
        case HomeTemplateSectionsTypes.PostsSectionLastAdded:
            Component = PostsSectionLastAdded;
            break;
        case HomeTemplateSectionsTypes.PostsSectionByCategory:
            Component = PostsSectionByCategory;
            break;
        case HomeTemplateSectionsTypes.PostsSectionWithoutShowMore:
            Component = PostsSectionWithoutShowMore;
            break;
        case HomeTemplateSectionsTypes.GroupsSection:
            Component = GroupsSection;
            break;
        case HomeTemplateSectionsTypes.LocationPostsSection:
            Component = LocationPostsSection;
            break;
        case HomeTemplateSectionsTypes.PostsSection:
            Component = PostsSection;
            break;
        case HomeTemplateSectionsTypes.PostsWithAddPostSection:
            Component = PostsWithAddPostSection;
            break;
        case HomeTemplateSectionsTypes.UsersSection:
            Component = UsersSection;
            break;
        default:
            Component = View;
    }

    return (
        <View style={Styles.contentContainer}>
            <Component isInternetReachableState={isInternetReachableState} item={section} />
            {isLastSection ? <View style={Styles.lastSectionMargin}></View> : null}
        </View>
    );
}

export const Section = React.memo(Component);
