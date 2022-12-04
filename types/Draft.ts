import { PostDto } from '@inspire/types';

export interface Draft {
    id: string;
    createdDate: Date;
    post: PostDto;
}
