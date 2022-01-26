import axios from 'axios';
import { Game } from '../landing-page/game-types';

const apiUrl = process.env.LEIK_API_BASEURL;

export const fetchGames = async (): Promise<Game[]> => {
    const fetchedAuctionObject = await axios.get<Game[]>(`${apiUrl}/`);

    return fetchedAuctionObject.data;
};
