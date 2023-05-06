const apiUrl = "https://www.googleapis.com/youtube/v3/videos";
const apiKey = process.env.REACT_APP_YOUTUBE_API_KEY;
const maxResults = 10;
const regionCode = "GB";
const part = "snippet,contentDetails,statistics";
const chart = "mostPopular";

export const url = `${apiUrl}?key=${apiKey}&part=${part}&chart=${chart}&maxResults=${maxResults}&regionCode=${regionCode}`;
