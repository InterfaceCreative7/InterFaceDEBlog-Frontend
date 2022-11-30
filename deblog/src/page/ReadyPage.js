import classes from "./ReadyPage.module.css"
import { useSelector } from "react-redux"
import api from "../component/server/Auth.js"
import { useRef } from "react"
import { Link } from "react-router-dom"
const ReadyPage = () => {
    const body = useSelector(state => state.post.body);
    const title = useSelector(state => state.post.title);
    const name = useRef();
    const tag = useRef();
    const submitBody = async () => {
        await api.post("posts/upload", {
            title: title,
            blogBody: body,
            tag: ["후기"],
            imageUrl: "",
            writername: name.current.value
        })
    }
    return (
        <div className={classes.main}>
            <form className={classes.form}>
                <div className={`${classes.pt1} ${classes.pt}`}>
                    <input className={classes.input} type="file" />
                    <Link to="/"><button onClick={submitBody} className={classes.btn}>제출</button></Link>
                </div>
                <div className={`${classes.pt2} ${classes.pt}`}>
                    <input ref={name} className={classes.input} placeholder="작성자명을 입력해주세요!" />
                    <input ref={tag} className={classes.input} placeholder="태그를 입력해 주세요!" />
                </div>
            </form>
        </div>
    )
}

export default ReadyPage;