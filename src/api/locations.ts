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

export const getCharactersDataByLocationId = async (
  id: string
): Promise<Character[]> => {
  try {
    const locationData = await axios.get(
      "https://rickandmortyapi.com/api/location/" + id
    );
    return new Promise((resolve) => {
      return resolve(
        locationData.data.residents.map(async (singleUrl: string) => {
          const response = await axios.get(singleUrl);
          return response.data;
        })
      );
    });
  } catch (error) {
    console.log(error);
    throw error;
  }
};