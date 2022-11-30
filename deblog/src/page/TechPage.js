import MenuBar from "../component/menubar/MenuBar.js"
import classes from "./TechPage.module.css"
import { useEffect, useState } from "react"
import api from "../component/server/Auth.js"
import Post from "../component/post/Post.js"

const TechPage = () => {
    const [post, setPost] = useState([]);
    useEffect(() => {
        api.get("posts/findall/?title=dataType&value=User")
            .then(res => {
                const { data } = res;
                setPost(data)
            })
    }, [])
    return (
        <div className={classes.main}>
            <MenuBar />
            <div className={classes.post}>
                {post.map(element => (
                    <Post
                        key={element._id}
                        items={{
                            PostImgae: element.imageUrl,
                            PostTitle: element.title,
                            PostContent: element.blogBody,
                            PostFooter: element.writername,
                            _id: element._id
                        }}
                    />
                ))}
            </div>
        </div>
    )
}

export default TechPage