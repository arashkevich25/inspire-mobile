import { gql } from '@apollo/client';

export const SET_CLUB_MEMBER_ADDITIONAL_DATA = gql`
    mutation SetClubMemberAdditionalData($fullName: String, $sex: Int, $town: Int, $clubId: Int) {
        setClubMemberAdditionalData(additionalData: { clubId: $clubId, fullName: $fullName, sex: $sex, town: $town }) {
            id
        }
    }
`;
