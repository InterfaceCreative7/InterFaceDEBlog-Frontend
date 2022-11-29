
import MenuBar from "../component/menubar/MenuBar.js"
import Book from "../component/guestbook/Book.js"
import classes from "./TechPage.module.css"


const BookPage = () => {
    return (
        <div className={classes.main}>
            <MenuBar />
            <Book />
        </div>
    )
}

export default BookPage