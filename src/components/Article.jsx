import { useState } from 'react';
import { fetchArticleById } from './api.js';
import { useEffect } from 'react';
import { useParams } from 'react-router';
import './Article.css';

function Article() {
  const { article_id } = useParams();
  const [article, setArticle] = useState({});
  const [loadingArticle, setLoadingArticle] = useState(true);

  useEffect(() => {
    fetchArticleById(article_id)
      .then((data) => { setArticle(data.article) })
      .finally(() => { setLoadingArticle(false) });
  }, []);

  if (loadingArticle) {
    return <p>Loading article...</p>;
  }

  return (
    <>
      <div className="article-box">
        <h3>{article.title}</h3>
        <h3>{'posted by: ' + article.author}</h3>
        <p>{article.body}</p>
      </div>
    </>
  );
}

export default Article;



