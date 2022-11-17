import styled from "styled-components";
import BookForm from "./BookForm";
import BookContents from "./BookContents";
import { useSelector } from "react-redux";
import { useState } from "react";
import api from "../server/Auth";
import { useEffect } from "react";


const StyledBook = styled.ul`
width:60%;
height:auto;
display:flex;
flex-direction:column;
align-items:center;
justify-contents:center;

@media (max-width:500px){
    width:100%;
    height:auto;
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
                setBook(data)
            }).catch(err => {
                console.log(err)
            })
        }
        receiveServer();
    }, [chechBook]);
    return (
        <StyledBook>
            <BookForm />
            {book && book.map(element => (
                <BookContents
                    items={element} />
            ))
            }
        </StyledBook>
    )
}

export default Book