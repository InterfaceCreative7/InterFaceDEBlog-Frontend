import { Link } from "react-router-dom";
import classes from "./MenuBar.module.css" //css는 모듈로 개발

function MenuBar() {//component 중 메뉴바
    return (//ul tag를 사용하여 표현 
        <ul className={classes.bar}>
            <div>
                <Link to="/"><img className={classes.homebtn} src={process.env.PUBLIC_URL + "/image/homeButton.jpg"} alt="HomeButton" /></Link>
            </div>
            <div className={classes.PageBtn}>
                <li>
                    <Link to="/About" className={classes.btn}>About</Link>
                </li>
                <li >
                    <Link to="/Submit" className={classes.btn}>Contact</Link>
                </li>
                <li>
                    <Link to="/Tech" className={classes.btn}>Tech</Link>
                </li>
                <li>
                    <Link to="/Book" className={classes.btn}>Book</Link>
                </li>
            </div>
        </ul>
    );
}

export default MenuBar;