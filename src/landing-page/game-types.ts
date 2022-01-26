import { Category } from './category-tag/category-tag-types';

export interface Game {
    title: string;
    description: string;
    category: Category;
}
