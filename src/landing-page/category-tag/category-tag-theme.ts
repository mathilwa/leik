import { Category } from './category-tag-types';

interface CategoryTagTheme {
    backgroundColor?: string;
    color: string;
    borderColor: string;
}

const themeEntries: { [key in Category]: CategoryTagTheme } = {
    [Category.Music]: {
        color: '#EA332B',
        borderColor: '#EA332B',
    },
    [Category.Quiz]: {
        color: '#679ED1',
        borderColor: '#679ED1',
    },
};

const selectedEntries: { [key in Category]: CategoryTagTheme } = {
    [Category.Music]: {
        color: '#FFF',
        backgroundColor: '#EA332B',
        borderColor: '#EA332B',
    },
    [Category.Quiz]: {
        color: '#FFF',
        backgroundColor: '#679ED1',
        borderColor: '#679ED1',
    },
};

export const getThemeForTag = (tag: Category): CategoryTagTheme => themeEntries[tag];
export const getSelectedColorForTag = (tag: Category): CategoryTagTheme => selectedEntries[tag];
