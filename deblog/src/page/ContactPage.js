import MenuBar from "../component/menubar/MenuBar.js"
import Mapping from "../component/map/Mapping.js"
import classes from "./ContactPage.module.css"

const ContactPage = () => {
    return (
        <div>
            <MenuBar />
            <div className={classes.chat_r1}> 인터페이스 동아리방 위치는? </div>
            <div className={classes.chat_l1}>
                <Mapping />
                세종대학교 학생회관 5층 518호야!!
            </div>
            <div className={classes.chat_r2}> 인터페이스 이메일은? </div>
            <div className={classes.chat_l2}> 518interface@gmail.com </div>

            <div className={classes.chat_r3}> 인스타그램도 있어? </div>
            <div className={classes.chat_l3}> 그럼! <a href="https://instagram.com/interface518?igshid=YmMyMTA2M2Y=">@interface518</a> </div>
            <div className={classes.post}>

            </div>

        </div>

    )
}

export default ContactPage
