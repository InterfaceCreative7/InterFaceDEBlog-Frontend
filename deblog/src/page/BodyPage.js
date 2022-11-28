import classes from "./BodyPage.module.css"
import MenuBar from "../component/menubar/MenuBar"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import ReactMarkdown from "react-markdown"
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import api from "../component/server/Auth.js"

const BodyPage = () => {
    const params = useParams();
    const [body, setBody] = useState("")
    useEffect(() => {
        const id = params._id;
        console.log(id)
        const submitData = () => {
            api.get(`posts/findall/?title=_id&value=${id}`)
                .then(res => {
                    const { data } = res;
                    console.log(data[0])
                    setBody(data[0])
                })
        }
        submitData()
    }, [])
    return (
        <div>
            <MenuBar />
            <p>{body.title}</p>
            <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]} className={`${classes.contents} ${classes.same}`}>
                {body.blogBody}
            </ReactMarkdown>
        </div>
    )
}

export default BodyPage;