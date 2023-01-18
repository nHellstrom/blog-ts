import React, {useState} from "react";
import { IBlogPost } from "../../interfaces";
import "./Post.css";

const Post = (props : any) => {
    const [visible, setVisibility] = useState<boolean>(false);
    const { id, title, body, userId, tags, reactions} = props.data;
    // console.log("1 post tags: ", tags)

    const visibilityCss = visible ? "" : "Post__hidden";
    const titleVisibilityCss = visible ? "" : "Post__extramargin";

    return <>
        <div className={`Post__titlediv ${titleVisibilityCss}`} onClick={() => setVisibility(!visible)}>
            <h4 className="Post__title" >{title}</h4>
            <span className="Post__tags">
                {tags.map((x:string) => <p className="Post__individualtag">{x}</p>)}
            </span>
        </div>
        <div className={`Post__container ${visibilityCss}`}>
            <p className="Post__body">{body}</p>

            <span className="Post__author">By user #{userId}</span>

            <b className="Post__reactions">{reactions + " likes this. " + "👍".repeat(reactions)}</b>
            
        </div>
    </>
}

export default Post;