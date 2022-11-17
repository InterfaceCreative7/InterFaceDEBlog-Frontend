import MenuBar from "../component/menubar/MenuBar.js"
import Book from "../component/guestbook/Book.js"
import BookForm from "../component/guestbook/BookForm.js"
import BookContents from "../component/guestbook/BookContents"
import classes from "./TechPage.module.css"

const TechPage = () => {
    return (
        <div className={classes.main}>
            <MenuBar />
            <Book>
                <BookForm />
                <BookContents />
            </Book>
        </div>
    )
}

export default TechPage