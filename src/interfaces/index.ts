export interface INews {
    author: string;
    category: CategoriesType[];
    description: string;
    id: string;
    image: string;
    language: string;
    published: string;
    title: string;
    url: string;
}
export interface INewsApiResponse {
    news: INews[];
    page: number;
    status: string;
}

export interface ICategoriesApiResponse {
    categories: CategoriesType[];
    description: string;
    status: string;
}

export interface IPaginationProps {
    totalPage: number;
    nextPage: () => void;
    previousPage: () => void;
    currentPage: number;
    handlePageClick: (page: number) => void;
}

export interface IFilters {
    page_number: number;
    page_size: number;
    category: CategoriesType | null;
    keywords: string;
}

export type SkeletonType = "banner" | "item";
export type DirectionType = "row" | "column";

export type ParamsType = Partial<IFilters>;

export type CategoriesType =
    | "regional"
    | "technology"
    | "lifestyle"
    | "business"
    | "general"
    | "programming"
    | "science"
    | "entertainment"
    | "world"
    | "sports"
    | "finance"
    | "academia"
    | "politics"
    | "health"
    | "opinion";
