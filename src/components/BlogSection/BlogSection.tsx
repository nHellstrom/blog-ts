import React, {useState} from "react";
import { IBlogPost } from "../../interfaces";
import Post from "../Post/Post";
import "./BlogSection.css"

const BlogSection = (props : any) => {
    const posts = [...props.posts]
    const [isVisible, setVisibility] = useState<boolean>(false);

    const toggleSectionVisibility = () => {
        setVisibility(!isVisible);
    }

    const styleHeader =  props.tag.charAt(0).toUpperCase() + props.tag.toLowerCase().slice(1);

    return <section className="BlogSection__container">
        <div className="BlogSection__header">
            <h4 className="BlogSection__title">Section <i>{styleHeader}</i></h4>
            <b>Posts: {props.posts.length}</b>
            <div className="BlogSection__toggle" onClick={toggleSectionVisibility}>{isVisible ? "Close ❌" : "Open 🟢"} </div>
        </div>
        <div className={`BlogSection__content BlogSection__content--${isVisible ? "visible" : "hidden"}`}>
            {props.posts.map((p : IBlogPost) => <Post data={p} key={p.id}/>)}

        </div>
    </section>
}

export default BlogSection;