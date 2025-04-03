import axios from "axios";

export function fetchAllArticles() {
  return axios
    .get("https://nc-news-905s.onrender.com/api/articles")
    .then((response) => {
      return response.data;
    });
}

export function fetchArticleById(article_id) {
  return axios
    .get(`https://nc-news-905s.onrender.com/api/articles/${article_id}`)
    .then((response) => {
      return response.data;
    });
}

export function fetchCommentsById(article_id) {
  return axios
    .get(
      `https://nc-news-905s.onrender.com/api/articles/${article_id}/comments`,
    )
    .then((response) => {
      return response.data;
    });
}
