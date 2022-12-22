import axios from 'axios';
import { Character } from './characters';

export interface Location {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: string[];
  url: string;
  created: string;
}

export const getLocations = async (): Promise<Location[]> => {
  try {
    const response = await axios.get('https://rickandmortyapi.com/api/location/');
    return response.data.results;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getLocationById = async (id: number): Promise<Location> => {
  try {
    const response = await axios.get(`https://rickandmortyapi.com/api/location/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getCharactersByLocationId = async (id: number): Promise<Character[]> => {
    try {
      const response = await axios.get(`https://rickandmortyapi.com/api/location/${id}/character`);
      return response.data.results;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };