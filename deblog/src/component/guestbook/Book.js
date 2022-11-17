import styled from "styled-components";
import BookForm from "./BookForm";
import BookContents from "./BookContents";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import api from "../server/Auth";
import { useEffect } from "react";
import { BookActions } from "../../store/Book-slice";


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
    const dispatch = useDispatch();
    const chechBook = useSelector(state => state.book.check)
    const [book, setBook] = useState([])
    useEffect(() => {
        const receiveServer = async () => {//서버에서 받는 데이터를 받는 코드
            await api.get("about/comments/findall/?title=dataType&value=comment", {

            }).then(res => {
                const { data } = res;
                console.log(data)
                setBook(data)
            }).catch(err => {
                console.log(err)
            })
        }
        receiveServer();
    }, [chechBook]);
    const deletData = async () => {//삭제기능 코드

        dispatch(BookActions.checkBook())
        await api.delete("about/comments/clear", {

        }).catch(err => {
            console.log(err)
        })
    }

    return (
        <StyledBook>
            <button onClick={deletData}>삭제</button>
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