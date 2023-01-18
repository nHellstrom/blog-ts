import React from "react";
import { IBlogPost } from "../../interfaces";
import "./Post.css";

const Post = (props : any) => {
    console.log("1 post: ", props)

const { id, title, body, userId, tags, reactions} = props.data;

    return <div className="Post__container">
        <h4>{title}</h4>

        {tags.forEach((t : string) => {
            <i>{t}</i>
        })}

        <p>{body}</p>

        <span>By user #{userId}</span>

        <b>{reactions + "likes this. " + "👍".repeat(reactions)}</b>
    </div>
}

export default Post;