import './App.css'
import { Route, Routes } from 'react-router'
import Home from './components/Home'
import Article from './components/Article'
import Articles from './components/Articles'

function App() {
  return (
    <div className="App">
      <h1>NC News!</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/article/:article_id" element={<Article />} />
      </Routes>
    </div>
  );
}

export default App

