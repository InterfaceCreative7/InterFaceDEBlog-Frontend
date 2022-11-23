import ReactMarkdown from "react-markdown"
import classes from "./SubmitPage.module.css"
import { useState } from "react"
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import SubmitMenu from "../component/submitMenu/SubmitMenu"


const SubmitPage = () => {
    const [title, setTitle] = useState("")
    const [content, setcontent] = useState("")
    const titleChange = (event) => {
        setTitle(event.target.value)
    }
    const contentChange = (event) => {
        console.log(event.target.value)
        setcontent(event.target.value)
    }
    return (
        <div className={classes.main}>

            <div className={`${classes.write} ${classes.bisector}`}>
                <textarea className={`${classes.title} ${classes.border} ${classes.same}`} onChange={titleChange} placeholder="제목을 입력해 주세요." />
                <textarea className={`${classes.contents} ${classes.same}`} onChange={contentChange} placeholder="내용을 입력해 주세요." />

            </div>
            <div className={`${classes.show} ${classes.bisector}`}>
                <h1 className={`${classes.title} ${classes.same}`}>{title}</h1>
                <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]} className={`${classes.contents} ${classes.same}`}>{content}</ReactMarkdown>
            </div>
        </div>
    )
}

export default SubmitPage