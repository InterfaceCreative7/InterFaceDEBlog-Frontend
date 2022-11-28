import classes from "./BodyPage.module.css"
import MenuBar from "../component/menubar/MenuBar"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import api from "../component/server/Auth.js"

const BodyPage = () => {
    const params = useParams();
    const [body, setBody] = useState("")
    useEffect(() => {
        const id = params._id;
        console.log(id)
        const submitData = () => {
            api.get(`posts/findall/?title=_id&value=${id}`)
                .then(res => {
                    const { data } = res;
                    setBody(data)
                })
        }
        submitData()
    }, [])
    return (
        <div>
            <MenuBar />
        </div>
    )
}

export default BodyPage;