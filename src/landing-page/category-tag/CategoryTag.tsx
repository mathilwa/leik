import React from 'react';
import { Category } from './category-tag-types';
import './category-tag.css';
import { getSelectedColorForTag, getThemeForTag } from './category-tag-theme';

interface Props {
    tag: Category;
    selected: boolean;
    onClick: () => void;
}

const Tag: React.FC<Props> = ({ tag, selected, onClick }) => {
    const theme = getThemeForTag(tag);
    const selectedTheme = getSelectedColorForTag(tag);

    return (
        <div
            className="tag"
            style={{
                ...theme,
                backgroundColor: selected ? selectedTheme.backgroundColor : theme.backgroundColor,
                color: selected ? selectedTheme.color : theme.color,
            }}
            onClick={onClick}
        >
            {tag}
        </div>
    );
};

export default Tag;
