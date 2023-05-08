import axios from "axios";
import { byIdUrl, listUrl } from "src/app/store/urls";
import { create } from "zustand";

export interface Video {
  id: string;
  snippet: {
    title: string;
    tags: string[];
    thumbnails: {
      medium: {
        url: string;
      };
    };
  };
  statistics: {
    viewCount: string;
    likeCount: string;
  };
}

interface videoStoreProps {
  videos: Video[];
  video: Video | null;
  isLoading: boolean;
  error: Error | null;
  fetchVideos: () => void;
  fetchVideoById: (id: string) => void;
}

export const videoStore = create<videoStoreProps>((set, get) => ({
  videos: [],
  video: null,
  isLoading: false,
  error: null,

  fetchVideos: async () => {
    set({ isLoading: true, error: null });
    try {
      const response = await axios.get(listUrl);
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
  fetchVideoById: async (id: string) => {
    const isVideo = get().videos.find((v) => v.id === id);

    if (isVideo) {
      set({
        video: isVideo,
      });
    } else {
      set({ isLoading: true, error: null });
      try {
        const response = await axios.get(byIdUrl(id));
        const data = response.data.items;

        if (data.length === 0) throw new Error("No video found!");

        set({
          video: data[0],
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
    }
  },
}));
