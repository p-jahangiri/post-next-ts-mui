export interface getResponsePostDataType {
    is_success: boolean;
    status: string;
    message?: null;
    entity: Entity;
  }
  export interface Entity {
    specials?: (SpecialsEntityOrMostVisitedEntityOrMostRatedEntityOrDataEntity)[] | null;
    most_visited?: (SpecialsEntityOrMostVisitedEntityOrMostRatedEntityOrDataEntity)[] | null;
    most_rated?: (SpecialsEntityOrMostVisitedEntityOrMostRatedEntityOrDataEntity)[] | null;
    newest?: (NewestEntity)[] | null;
    posts: Posts;
    news?: (NewsEntity)[] | null;
    categories?: (CategoriesEntity)[] | null;
  }
  export interface SpecialsEntityOrMostVisitedEntityOrMostRatedEntityOrDataEntity {
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
    category: Category;
  }
  export interface Category {
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
    products_url: string;
    share_url: string;
  }
  export interface NewestEntity {
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
    category: Category1;
  }
  export interface Category1 {
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
  export interface Posts {
    current_page: number;
    data?: (SpecialsEntityOrMostVisitedEntityOrMostRatedEntityOrDataEntity)[] | null;
    first_page_url: string;
    from: number;
    last_page: number;
    last_page_url: string;
    links?: (LinksEntity)[] | null;
    next_page_url: string;
    path: string;
    per_page: number;
    prev_page_url?: null;
    to: number;
    total: number;
  }
  export interface LinksEntity {
    url?: string | null;
    label: string;
    active: boolean;
  }
  export interface NewsEntity {
    id: number;
    rate: number;
    favorite_count: number;
    is_special: number;
    category_id: number;
    thumbnail?: null;
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
    category: Category1;
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
  