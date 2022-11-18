import classes from "./ReadyPage.module.css"

const ReadyPage = () => {

    return (
        <div className={classes.main}>
            <input type="file" accept='image/*'></input>
        </div>
    )
}

export default ReadyPage;