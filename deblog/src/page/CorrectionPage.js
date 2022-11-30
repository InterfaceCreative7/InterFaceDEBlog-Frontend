import { useEffect, useState } from "react"
import Post from "../component/edit/EditPost"
import api from "../component/server/Auth"
import classes from "./Correction.module.css"



const CorrectionPage = () => {
    const [post, setPost] = useState([])
    useEffect(() => {
        const submitData = async () => {
            await api.get("posts/findall/?title=dataType&value=User")
                .then(res => {
                    const { data } = res;
                    setPost(data)
                })
        }
        submitData();
    }, [])

    return (
        <div className={classes.main}>
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
                />))}
        </div>
    )
}

export default CorrectionPage