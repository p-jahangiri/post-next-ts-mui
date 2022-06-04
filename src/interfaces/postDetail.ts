export interface getResponsePostDetail {
    is_success: boolean;
    status: string;
    message?: null;
    entity: Entity;
  }
  export interface Entity {
    post: Post;
    newest_posts?: (NewestPostsEntityOrMostVisitedEntityOrMostRatedEntity)[] | null;
    most_visited?: (NewestPostsEntityOrMostVisitedEntityOrMostRatedEntity)[] | null;
    most_rated?: (NewestPostsEntityOrMostVisitedEntityOrMostRatedEntity)[] | null;
    same_category?: (SameCategoryEntity)[] | null;
    categories?: (CategoriesEntity)[] | null;
  }
  export interface Post {
    id: number;
    rate: number;
    favorite_count: number;
    is_special: number;
    category_id: number;
    thumbnail: string;
    user_id: number;
    visit_count: number;
    title: string;
    introduction: string;
    source: string;
    content: string;
    study_time?: null;
    date?: null;
    publish_at?: null;
    expire_at?: null;
    active: number;
    type: number;
    created_at: string;
    tag_names?: (null)[] | null;
    thumbnail_url: string;
    share_url: string;
    slug_url: string;
    tags?: (null)[] | null;
    comments?: (null)[] | null;
    category: Category;
    seo: Seo;
  }
  export interface Category {
    id: number;
    old_id?: null;
    parent_id: number;
    name: string;
    slug: string;
    type: string;
    description?: null;
    icon?: null;
    created_at?: null;
    icon_url: string;
    products_url: string;
    share_url: string;
  }
  export interface Seo {
    seoable_id: number;
    title: string;
    description: string;
    canonical?: null;
  }
  export interface NewestPostsEntityOrMostVisitedEntityOrMostRatedEntity {
    id: number;
    rate: number;
    favorite_count: number;
    is_special: number;
    category_id: number;
    thumbnail?: string | null;
    user_id: number;
    visit_count: number;
    title: string;
    introduction: string;
    source?: string | null;
    content: string;
    study_time?: string | null;
    date?: null;
    publish_at?: null;
    expire_at?: null;
    active: number;
    type: number;
    created_at: string;
    thumbnail_url: string;
    share_url: string;
    slug_url: string;
  }
  export interface SameCategoryEntity {
    id: number;
    rate: number;
    favorite_count: number;
    is_special: number;
    category_id: number;
    thumbnail?: string | null;
    user_id?: number | null;
    visit_count: number;
    title: string;
    introduction: string;
    source?: null;
    content: string;
    study_time?: string | null;
    date?: null;
    publish_at?: null;
    expire_at?: null;
    active: number;
    type: number;
    created_at: string;
    thumbnail_url: string;
    share_url: string;
    slug_url: string;
  }
  export interface CategoriesEntity {
    id: number;
    old_id?: null;
    parent_id: number;
    name: string;
    slug?: string | null;
    type: string;
    description?: null;
    icon?: null;
    created_at?: string | null;
    icon_url: string;
  }
  