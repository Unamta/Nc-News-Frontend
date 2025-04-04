import { useState } from 'react';
import { fetchArticleById, fetchCommentsById, upvoteArticleById } from './api.js';
import { useEffect } from 'react';
import { useParams } from 'react-router';
import './Article.css';

function Article() {
  const { article_id } = useParams();
  const [article, setArticle] = useState({});
  const [votes, setVotes] = useState(0);
  const [comments, setComments] = useState([]);
  const [loadingArticle, setLoadingArticle] = useState(true);
  const [loadingComments, setLoadingComments] = useState(true);

  useEffect(() => {
    fetchArticleById(article_id)
      .then((data) => {
        setArticle(data.article);
        setVotes(data.article.votes);
      })
      .finally(() => { setLoadingArticle(false) });
  }, []);

  useEffect(() => {
    fetchCommentsById(article_id)
      .then((data) => { setComments(data.comments) })
      .finally(() => { setLoadingComments(false) });
  }, []);

  function upvote() {
    return upvoteArticleById(article_id)
      .then((data) => {
        setVotes(data.article.votes);
      });
  }

  if (loadingArticle || loadingComments) {
    return <p>Loading article...</p>;
  }

  return (
    <>
      <div className="article-box">
        <h3>{article.title + ` [Votes: ${votes}]`}</h3>
        <h3>{'posted by: ' + article.author}</h3>
        <p>{article.body}</p>
        <button onClick={upvote}>I like this!</button>
      </div>
      <div className="comments-wrapper">
        <ul>
          {comments.map((comment) => {
            return <li key={comment.comment_id}>
              <div className="comment-box">
                <h3>{comment.author}</h3>
                <p>{comment.body}</p>
              </div>
            </li>
          })}
        </ul>
      </div>
    </>
  );
}

export default Article;


