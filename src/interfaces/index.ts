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

export interface IFilters {
    page_number: number;
    page_size: number;
    category: CategoriesType | null;
    keywords: string;
}

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
