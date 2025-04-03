import './App.css'
import { Route, Routes } from 'react-router'
import Home from './components/Home'
import Article from './components/Article'
import Articles from './components/Articles'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/article/:article_id" element={<Article />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App

