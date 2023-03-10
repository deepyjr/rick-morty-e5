import axios from "axios";
import { Character } from "./characters";

export interface Episode {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
  url: string;
  created: string;
}

export const getEpisodes = async (): Promise<Episode[]> => {
  try {
    const response = await axios.get(
      "https://rickandmortyapi.com/api/episode/"
    );
    return response.data.results;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getEpisodeById = async (id: number): Promise<Episode> => {
  try {
    const response = await axios.get(
      `https://rickandmortyapi.com/api/episode/${id}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getCharactersDataByEpisodeId = async (
  id: string
): Promise<Character[]> => {
  try {
    const episodeData = await axios.get(
      "https://rickandmortyapi.com/api/episode/" + id
    );
    return new Promise((resolve) => {
      return resolve(
        episodeData.data.characters.map(async (singleUrl: string) => {
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
