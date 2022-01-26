import { Category } from './category-tag-types';

interface CategoryTagTheme {
    backgroundColor?: string;
    color: string;
    borderColor: string;
}

const themeEntries: { [key in Category]: CategoryTagTheme } = {
    [Category.MusicGames]: {
        color: '#EA332B',
        borderColor: '#EA332B',
    },
};

const selectedEntries: { [key in Category]: CategoryTagTheme } = {
    [Category.MusicGames]: {
        color: '#FFF',
        backgroundColor: '#EA332B',
        borderColor: '#EA332B',
    },
};

export const getThemeForTag = (tag: Category): CategoryTagTheme => themeEntries[tag];
export const getSelectedColorForTag = (tag: Category): CategoryTagTheme => selectedEntries[tag];
