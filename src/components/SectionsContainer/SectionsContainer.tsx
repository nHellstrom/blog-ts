import React from "react";
import BlogSection from "../BlogSection/BlogSection";
import "./SectionsContainer.css"
import {IBlogPost} from "../../interfaces";

const SectionsContainer = (props : any) => {

    return <div className = "Sections__container">
        {props.tags?.map((t : string) => <BlogSection tag={t} posts={props.posts.filter((x : IBlogPost) => x.tags.includes(t))}/>)}
    </div>
}

export default SectionsContainer;