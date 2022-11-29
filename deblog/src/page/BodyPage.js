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
        const submitData = async () => {
            await api.get(`posts/findall/?title=_id&value=${id}`)
                .then(res => {
                    const { data } = res;
                    setBody(data[0]);

                })
        }
        submitData()
    }, [])
    return (

        <div className={classes.main}>
            <MenuBar />
            <div className={classes.BodyPage}>
                <h1 className={classes.head}>{body.title}</h1>
                <div className={classes.body}>
                    <div className={classes.middle}>
                        <p>{body.writername}</p>
                        <p>{body.writedate?.slice(0, 10)}</p>
                    </div>
                    <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]} className={`${classes.contents} ${classes.same}`}>
                        {body.blogBody}
                    </ReactMarkdown>
                </div>
            </div>

        </div>
    )
}

export default BodyPage;