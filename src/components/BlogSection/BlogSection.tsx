import React, {useState} from "react";
import "./BlogSection.css"

const BlogSection = (props : any) => {
    const [isVisible, setVisibility] = useState<boolean>(false);

    const toggleSectionVisibility = () => {
        console.log(this)
    }

    return <section className="BlogSection__container">
        <div className="BlogSection__header">
            <h4 className="BlogSection__title">Section "{props.tag}"</h4>
            <b>Posts: {props.posts.length}</b>
            <div className="BlogSection__toggle" onClick={toggleSectionVisibility}>Open/Close ❌</div>
        </div>
        <div className={`BlogSection__content BlogSection__content--${isVisible ? "visible" : "hidden"}`}>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui, aliquid?</p>
        </div>
    </section>
}

export default BlogSection;