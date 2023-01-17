import React, {useState} from "react";
import "./BlogSection.css"

const BlogSection = () => {
    const [isVisible, setVisibility] = useState<boolean>(false);

    return <section className="BlogSection__container">
        <div className="BlogSection__header">
            <h4 className="BlogSection__title">Section Category</h4>
            <div className="BlogSection__toggle">Open/Close ❌</div>
        </div>
        <div className={"BlogSection__content BlogSection__content--" + "visible"}>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui, aliquid?</p>
        </div>
    </section>
}

export default BlogSection;