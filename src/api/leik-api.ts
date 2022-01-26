import axios from 'axios';
import { Game } from '../landing-page/game-types';

export const fetchGames = async (): Promise<Game[]> => {
    const fetchedAuctionObject = await axios.get<Game[]>('https://leik-api.herokuapp.com/');

    return fetchedAuctionObject.data;
};
