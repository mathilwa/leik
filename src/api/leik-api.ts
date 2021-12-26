import axios from 'axios';

const apiUrl = `https://leik-api-staging.herokuapp.com`;

export const fetchGames = async (): Promise<string[]> => {
    const fetchedAuctionObject = await axios.get<string[]>(`${apiUrl}/`);

    return fetchedAuctionObject.data;
};
