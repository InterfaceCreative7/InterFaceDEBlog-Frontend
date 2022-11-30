import classes from "./EditPage.module.css"
import { Link } from "react-router-dom"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import ReactMarkdown from "react-markdown"
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import api from "../component/server/Auth.js"

const EditPage = () => {
    const params = useParams();
    const [body, setBody] = useState("")
    useEffect(() => {
        const submitData = async () => {
            await api.get(`posts/findall/?title=_id&value=${params._id}`)
                .then(res => {
                    const { data } = res;
                    setBody(data[0]);

                })
        }
        submitData()
    }, [])

    const deletPost = async (event) => {
        if (window.confirm("정말로 삭제하겠습니까?") === true) {
            console.log(params._id)
            await api.delete("posts/delete", {
                data: {
                    _id: params._id
                }n
            })
        }
        else {
            return
        }
    }
    return (

        <div className={classes.main}>
            <div className={classes.BodyPage}>
                <h1 className={classes.head}>{body.title}</h1>
                <div className={classes.body}>
                    <div className={classes.middle}>
                        <p>{body.writername}</p>
                        <p>{body.writedate?.slice(0, 10)}</p>
                        <div className={classes.modify}>
                            <Link to={`/Correction/ModifyPage/${params._id}`}><button>수정</button></Link>
                            <button onClick={deletPost}>삭제</button>
                        </div >
                    </div >
                    <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]} className={`${classes.contents} ${classes.same}`}>
                        {body.blogBody}
                    </ReactMarkdown>
                </div >
            </div >

        </div >
    )
}

export default EditPage;