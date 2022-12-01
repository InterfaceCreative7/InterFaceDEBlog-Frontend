import ReactMarkdown from "react-markdown"
import classes from "./ModifyPage.module.css"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import api from "../component/server/Auth.js"
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import { Link } from "react-router-dom"

const ModifyPage = () => {
    const params = useParams()
    const [title, setTitle] = useState("")
    const [content, setcontent] = useState("")
    const [write, setWirte] = useState("")
    const [id] = useState(params._id)
    useEffect(() => {
        const submitData = async () => {
            await api.get(`posts/findall/?title=_id&value=${id}`)
                .then(res => {
                    const { data } = res;
                    console.log(data[0])
                    setcontent(data[0].blogBody)
                    setTitle(data[0].title)
                    setWirte(data[0].writername)
                })
        }
        submitData()
    }, [])
    const titleChange = (event) => {
        setTitle(event.target.value)
    }
    const contentChange = (event) => {
        setcontent(event.target.value)
    }
    const writeChange = (event) => {
        setWirte(event.target.value)
    }
    const modifyBody = () => {
        api.patch("posts/modify", {
            _id: id,
            mod: {
                title: title,
                blogBody: content,
                writername: write
            }
        })
    }
    return (
        <div className={classes.main}>

            <div className={`${classes.write} ${classes.bisector}`}>
                <textarea className={`${classes.title} ${classes.border} ${classes.same}`} value={title} onChange={titleChange} placeholder="제목을 입력해 주세요." />
                <textarea className={`${classes.writename} ${classes.same}`} value={write} onChange={writeChange} placeholder="작성자 입력해 주세요." />
                <textarea className={`${classes.contents} ${classes.same}`} value={content} onChange={contentChange} placeholder="내용을 입력해 주세요." />
                <Link to="/Correction"><button className={classes.modify} onClick={modifyBody}>수정</button></Link>
            </div>
            <div className={`${classes.show} ${classes.bisector}`}>
                <h1 className={`${classes.title} ${classes.same}`}>{title}</h1>
                <p className={`${classes.writename} ${classes.same}`}>{write}</p>
                <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]} className={`${classes.contents} ${classes.same}`}>{content}</ReactMarkdown>
            </div>
        </div>
    )
}

export default ModifyPage