import axios from "axios";
export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: "1207",
    key: "AIzaSyAKip5ZHGxEilPNxB-Gx9sUsq8AccWrjrU",
    type: "video",
  },
});
