import MenuBar from "../component/menubar/MenuBar.js"
import classes from "./AboutPage.module.css"

const AboutPage = () => {
    return (
        <div className={classes.main}>
            <MenuBar />
            <img className={classes.image} alt="인터페이스 로고" src={process.env.PUBLIC_URL + "/image/homeButton.jpg"} />
            <div className={classes.text}>
                <p align="center">
                    "다양한 학술활동을 통해 사람과 컴퓨터를 잇는다"<br /> <br /><br />
                    는 뜻을 가진 동아리 인터페이스는 세종대학교 컴퓨터 학술 중앙 동아리입니다. <br /> <br /><br /> 본 동아리는 단순히 개/종강총회, MT 같은 대학 동아리의 친목적인 목적만을 중시하지 않습니다.<br /> <br /><br />
                    주기적으로 프로젝트 전시회, 스터디, 안모각코,  해커톤 등을 통하여 실질적으로 동아리원들의 프로그래밍 지식들을 활용하는 기회를 가지고 있으며 <br /> <br /><br />
                    이 테크 블로그에는 인터페이스 동아리의 그동안 활동하였던 프로젝트와 경험들이 기록되어 있습니다. <br /><br /><br />인터페이스의 학우들의 학술에 집중한 시간들이 단순히 과거의 작업물로만 머물지 않았으면 하는 마음으로 제작했습니다.<br /> <br />
                    <br /> 본 블로그에 계속하여 인터페이스에 머물다간, 머물고 있는 학우들의  경험들을 기록되었으면 좋겠습니다. <br /> </p>
            </div>

            <div>

            </div>
        </div>
    )
}



export default AboutPage