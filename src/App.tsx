import React, { useEffect, useState } from 'react';
import './App.css';
import * as LeikApi from './api/leik-api';

const App: React.FC = () => {
    const [games, setGames] = useState<string[]>([]);

    async function fetchAllGames() {
        const fetchedGames = await LeikApi.fetchGames();
        setGames(fetchedGames);
    }

    useEffect(() => {
        fetchAllGames();
    }, []);

    return (
        <div className="App">
            <h1>Lek mer</h1>
            <p>La oss leke litt </p>
            <div className="gamesList">
                {games.map(game => (
                    <li>{game}</li>
                ))}
            </div>
        </div>
    );
};

export default App;