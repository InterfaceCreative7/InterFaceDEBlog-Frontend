import MenuBar from "../component/menubar/MenuBar.js"
import classes from "./AboutPage.module.css"

const AboutPage = () => {
    return (
        <div className={classes.main}>
            <MenuBar />
            <img className={classes.image} alt="인터페이스 로고" src="./image/homeButton.jpg" />
            <div className={classes.text}>
                <p>세종대학교 중앙학술동아리 인터페이스의 기술 블로그입니다.</p>
                <p>인퍼페이스내에서 관리되며 부원들이 사용한 동아리 프로젝트와 스터디, 백준 등 다양한 코드들이 게시되어있습니다.</p>
                <p>여러분의 멋진 코드를 공유해주세요!</p>
            </div>

            <div>

            </div>
        </div>
    )
}

export default AboutPage