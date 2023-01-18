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

    return <section className="BlogSection__container">
        <div className="BlogSection__header">
            <h4 className="BlogSection__title">Section "{props.tag}"</h4>
            <b>Posts: {props.posts.length}</b>
            <div className="BlogSection__toggle" onClick={toggleSectionVisibility}>{isVisible ? "Close ❌" : "Open 🟢"} </div>
        </div>
        <div className={`BlogSection__content BlogSection__content--${isVisible ? "visible" : "hidden"}`}>
            {props.posts.map((p : IBlogPost) => <Post data={p}/>)}

        </div>
    </section>
}

export default BlogSection;