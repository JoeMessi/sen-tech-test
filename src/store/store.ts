import axios from "axios";
import { url } from "src/store/urls";
import { create } from "zustand";

export interface Video {
  id: string;
  snippet: {
    title: string;
    thumbnails: {
      medium: {
        url: string;
      };
    };
  };
}

interface videoStoreProps {
  videos: Video[];
  isLoading: boolean;
  error: Error | null;
  fetchVideos: () => void;
}

export const videoStore = create<videoStoreProps>((set) => ({
  videos: [],
  isLoading: true,
  error: null,

  fetchVideos: async () => {
    console.log("here");
    try {
      const response = await axios.get(url);
      const data = response.data.items;
      set({
        videos: data,
        isLoading: false,
      });
    } catch (error) {
      if (error instanceof Error) {
        set({
          error,
          isLoading: false,
        });
      }
    }
  },
}));
