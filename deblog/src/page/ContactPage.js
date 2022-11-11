import MenuBar from "../component/menuBar/MenuBar.js"
import Mapping from "../component/map/Mapping.js"
import classes from "./ContactPage.module.css"

const ContactPage = () => {
    return (
        <div>
            <MenuBar />
            <div className={classes.chat_r1}> </div>
            <div className={classes.chat_l1}>
                <Mapping />
            </div>
            <div className={classes.chat_r2}> </div>
            <div className={classes.chat_l2}> </div>

            <div className={classes.chat_r3}> </div>
            <div className={classes.chat_l3}> </div>
            <div className={classes.post}>
                
            </div>

        </div>
        
    )
}

export default ContactPage