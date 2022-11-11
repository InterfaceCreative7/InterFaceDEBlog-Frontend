import MenuBar from "../component/menubar/MenuBar.js"
import Panel from "../component/panel/Panel"
import dummy from "./dummy.json"
import Post from "../component/post/Post.js"
import classes from "./MainPage.module.css"

const MainPage = () => {

    return (
        <div className={classes.main}>
            <MenuBar />
            <Panel className={classes.panel} />
            <div className={classes.post}>
                {dummy.map(element => (
                    <Post
                        items={{
                            PostImgae: element.image,
                            PostTitle: element.title,
                            PostContent: element.contents,
                            PostFooter: element.footer
                        }}

                    />
                ))}
            </div>
        </div>
    )
}

export default MainPage