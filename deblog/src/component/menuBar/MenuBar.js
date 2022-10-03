import { Link } from "react-router-dom";
import classes from "./MenuBar.module.css"

function MenuBar() {
    return (
        <ul className={classes.bar}>
            <li className={classes.homebtn}>
                <Link to="/MainPage"><img src="./image/homeButton.jpg" /></Link>
            </li>
            <li className={classes.btn}>
                <Link to="/About">About</Link>
            </li>
            <li className={classes.btn}>
                <Link to="/Tech">Tech</Link>
            </li>
            <li className={classes.btn}>
                <Link to="/Contact">Contact</Link>
            </li>
            <li className={classes.btn}>
                <Link to="/Culture">Culture</Link>
            </li>
        </ul>
    );
}

export default MenuBar;