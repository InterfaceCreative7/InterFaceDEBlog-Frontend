import MenuBar from "../component/menubar/MenuBar.js"
import Panel from "../component/panel/Panel"

import classes from "./MainPage.module.css"
import PagiNation from "../component/pagination/PagiNation.js"

/*
import dummy from "./dummy.json"
import Post from "../component/post/Post.js"
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
*/

const MainPage = () => {

    return (
        <div className={classes.main}>
            <MenuBar />
            <Panel className={classes.panel} />

            <PagiNation />
        </div>
    )
}

export default MainPage