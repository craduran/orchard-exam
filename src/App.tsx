import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ArticleSection } from './components/articles/ArticleSection';
import { MainArticle } from './components/main/MainArticle';

function App() {
  return (
    <div className="container mx-auto text-white">
      <MainArticle />
      <ArticleSection />
    </div>
  );
}

export default App;
