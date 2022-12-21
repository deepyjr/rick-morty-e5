import axios from 'axios';

export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
  };
  location: {
    name: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export const getCharacters = async (): Promise<Character[]> => {
  try {
    const response = await axios.get('https://rickandmortyapi.com/api/character?page=2');
    return response.data.results;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getCharacterById = async (id: number): Promise<Character> => {
  try {
    const response = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};