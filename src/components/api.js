import axios from "axios";

export function fetchAllArticles() {
  return axios
    .get("https://nc-news-905s.onrender.com/api/articles")
    .then((response) => {
      return response.data;
    });
}
