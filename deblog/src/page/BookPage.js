import MenuBar from "../component/menubar/MenuBar.js"
import Book from "../component/guestbook/Book.js"
import classes from "./BookPage.module.css"


const BookPage = () => {
    return (
        <div className={classes.main}>
            <MenuBar />
            <div className={classes.book}>
                <Book />
            </div>
        </div>
    )
}

export default BookPage