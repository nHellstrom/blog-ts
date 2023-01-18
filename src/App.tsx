import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import SectionsContainer from './components/SectionsContainer/SectionsContainer';
import {IBlogPost, IJsonData} from "./interfaces";

function App() {
  const [blogPosts, setBlogPosts] = useState<IBlogPost[] | undefined>(undefined);
  const [tags, setTags] = useState<string[] | undefined>(undefined);


  const extractTagsFromApiData = (jsondata : IJsonData) => {
    const posts : IBlogPost[] = jsondata.posts;
    setBlogPosts(posts);
    
    let tagsHolder : string[] = [];
    for(let i = 0; i < posts?.length; i++) {
      for(let j = 0; j < posts[i].tags.length; j++) {
        const tag : string = posts[i].tags[j];
        if (!tagsHolder.includes(tag)) {
          tagsHolder.push(tag)
        }
      }
    }

    setTags(tagsHolder);
  }

  
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("https://dummyjson.com/posts");
      const res = await data.json()
      console.log("API data: ", res);
      extractTagsFromApiData(res);
    }

    fetchData().catch(console.error)
  })

  

  return (
    <div className="App">
      <header className="App__header">
        Navbar
      </header>
      <div className="App__body">
        <div className="App__flexrow">
          <div className="App__welcome">
            <h1>Tiny (API) Blog</h1>
            <p>Welcome to a tiny blog!</p>
            <p>It currently contains the following tags:</p>
            <span className="App__welcometags">
              {tags?.map((tag) => <span key={tag} className="App__welcometag">{tag}</span>)}
            </span>
          </div>
        </div>
        <SectionsContainer tags={tags} posts={blogPosts}/>
      </div>
    </div>
  );
}

export default App;
