import React, { useEffect, useState } from 'react';
import './landing.css';
import headerPicture from './images/header-picture.svg';
import * as LeikApi from '../../api/leik-api';
import { Category } from './category-tag/category-tag-types';
import CategoryTag from './category-tag/CategoryTag';
import { Game } from '../../components/game/game-types';

const LandingPage: React.FC = () => {
    const [games, setGames] = useState<Game[]>([]);
    const [selectedCategories, setSelectedCategories] = useState<Category[]>([]);

    const tags = [Category.MusicGames];

    async function fetchAllGames() {
        const fetchedGames = await LeikApi.fetchGames();
        setGames(fetchedGames);
    }

    useEffect(() => {
        fetchAllGames();
    }, []);

    const updateSelectedCategories = (category: Category) => {
        if (selectedCategories.includes(category)) {
            setSelectedCategories(selectedCategories.filter(selectedCategory => selectedCategory !== category));
        } else {
            setSelectedCategories([...selectedCategories, category]);
        }
    };

    const gamesToShow = games.filter(game => selectedCategories.includes(game.category));

    return (
        <div className="pageContainer">
            <div className="headerPictureContainer">
                <img src={headerPicture} alt="Sidetittel som bilde: Bare fordi det er gøy med.." />
            </div>
            <div>
                {tags.map(tag => (
                    <CategoryTag
                        tag={tag}
                        selected={selectedCategories.includes(tag)}
                        onClick={() => updateSelectedCategories(tag)}
                    />
                ))}
            </div>
            <div className="gamesList">
                {gamesToShow.map(game => (
                    <li key={game.title} className="game">
                        <div className="gameTitle">{game.title}</div>
                        <div className="gameDescription">{game.description}</div>
                    </li>
                ))}
            </div>
        </div>
    );
};

export default LandingPage;
