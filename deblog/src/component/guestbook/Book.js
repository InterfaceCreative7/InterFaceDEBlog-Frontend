import styled from "styled-components";
import BookForm from "./BookForm.js";
import BookContents from "./BookContents.js";
import { useSelector } from "react-redux";
import { useState } from "react";
import api from "../server/Auth.js";
import { useEffect } from "react";


const StyledBook = styled.div`
width:80%;
height:auto;
display:flex;
flex-direction:column;
align-items:center;
justify-contents:center;

@media (max-width:500px){
    width:80vw;
    margin:auto;
    float:right;
    padding:0.5vw;
    border-radius:10px;
    font-size:3vw;
}
`

const Book = () => {
    const chechBook = useSelector(state => state.book.check)
    const [book, setBook] = useState([])
    useEffect(() => {
        const receiveServer = async () => {//서버에서 받는 데이터를 받는 코드
            await api.get("about/comments/findall/?title=dataType&value=comment", {

            }).then(res => {
                const { data } = res;
                console.log(data)
                setBook(data.reverse())
            }).catch(err => {
                console.log(err)
            })
        }
        receiveServer();
    }, [chechBook]);

    return (
        <StyledBook>
            <BookForm />
            <ul>
                {book && book.map(element => (
                    <BookContents items={element} />
                ))}
            </ul>
        </StyledBook>
    )
}

export default Book