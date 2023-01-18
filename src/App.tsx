import React, { useState } from 'react';
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

  const fetchData = async () => {
    const data = await fetch("https://dummyjson.com/posts");
    const res = await data.json()
    console.log("API data: ", res);
    extractTagsFromApiData(res);
  }

  

  return (
    <div className="App">
      <header className="App__header">
        Navbar
      </header>
      <div className="App__body">
        <div className="App__flexrow">
          <div className="App__welcome">
            <h1>Blog Title</h1>
            <p>Welcome! Press the button below to fetch data from the API.</p>
            <button onClick={fetchData}>Click me!</button>
          </div>
          <div className="App__welcome">
            <p>It currently contains the following tags:</p>
            <ol>
              {tags?.map((tag) => <li key={tag}>{tag}</li>)}
            </ol>
          </div>
        </div>
        <SectionsContainer tags={tags} posts={blogPosts}/>
      </div>
    </div>
  );
}

export default App;
