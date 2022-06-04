import api from './api';

import { getResponsePostDetail, Post } from 'interfaces/postDetail';
import { getResponsePostDataType, Entity, Posts } from 'interfaces/posts.interface';

const gets = {
    getPosts: ({ page = 1 }: { page: number }) =>
        api.get<getResponsePostDataType>('posts', { page }),

    getPostDetail: (id: string | string[] | undefined) =>
        api.get<getResponsePostDetail, Post[]>(`posts/${id}`),
};

const posts = {
    postLike: (id: number) => api.post<getResponsePostDataType, Entity>(`posts/${id}/like`),
    postDislike: (id: number) => api.post<getResponsePostDataType, Entity>(`posts/${id}/dislike`),
};
export default {
    ...gets,
    ...posts,
};
