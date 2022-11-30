import MenuBar from "../component/menubar/MenuBar.js"
import Panel from "../component/panel/Panel.js"
import api from "../component/server/Auth.js"
import classes from "./MainPage.module.css"
import PagiNation from "../component/pagination/PagiNation.js"
import Post from "../component/post/Post.js"
import { useState, useEffect } from "react"

const MainPage = () => {
    const [post, setPost] = useState([]);//서버에서 받아오는 데이터
    const [count, setCount] = useState(0);//아이템 총 개수
    const [postPerPage] = useState(9);//페이지당 보여줄 포스트 수
    const [page, setPage] = useState(1);//현재 보이는 페이지
    const [currentPosts, setCurrentPosts] = useState([]);//보여줄 페이지
    const [indexOfLastPost, setIndexOfLastPost] = useState(0);
    const [indexOfFirstPost, setIndexOfFirstPost] = useState(0);


    useEffect(() => {
        const submitData = async () => {
            await api.get("posts/findall/?title=dataType&value=User")
                .then(res => {
                    const { data } = res;
                    setPost(data.reverse())
                    setCount(data.length)
                })
        }
        submitData();
    }, [])

    useEffect(() => {
        setIndexOfLastPost(page * postPerPage);
        setIndexOfFirstPost(indexOfLastPost - postPerPage);
        setCurrentPosts(post.slice(indexOfFirstPost, indexOfLastPost));
    }, [page, indexOfFirstPost, indexOfLastPost, post])


    const handlePageChange = (pages) => {
        setPage(pages);
    }

    return (
        <div className={classes.main}>
            <MenuBar />
            <Panel className={classes.panel} />
            <div className={classes.post}>
                {currentPosts.map(element => (
                    <Post
                        key={element._id}
                        items={{
                            PostImgae: element.imageUrl,
                            PostTitle: element.title,
                            PostContent: element.blogBody,
                            PostFooter: element.writername,
                            _id: element._id,
                            date: element.updatedAt
                        }}
                    />
                ))}
            </div>
            <PagiNation page={page} postPerPage={postPerPage} count={count} onChange={handlePageChange} />
        </div>
    )
}

export default MainPage
