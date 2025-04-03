import { useState } from "react";
import { fetchAllArticles } from "./api.js";
import { useEffect } from "react";
import "./Articles.css";
import { Link } from "react-router";

function Articles() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAllArticles()
      .then((data) => {
        setArticles(data.articles);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading articles...</p>;
  }

  return (
    <>
      <h2>all articles</h2>
      <ul>
        {articles.map((article) => {
          return (
            <li key={article.article_id}>
              <div className="article-box">
                <Link to={"/article/" + article.article_id}>
                  <h3>{article.title}</h3>
                  <h3>{"posted by: " + article.author}</h3>
                </Link>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Articles;
