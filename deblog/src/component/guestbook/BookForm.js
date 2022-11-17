import styled from "styled-components";
import BookContentInput from "./BookContentInput";
import BookNameInput from "./BookNameInput";
import BookButton from "./BookButton";
import api from "../server/Auth";
import { useDispatch } from "react-redux";
import { BookActions } from "../../store/Book-slice";

const StyledBookForm = styled.form`
display:flex;
flex-direction:column;
width:80vw;
align-items:center;

@media (max-width:500px){
    width:40vw;
    height:8vw;
    margin-right:1vw;
    padding:0.5vw;
    border-radius:10px;
    font-size:3vw;
}
`

const BookForm = () => {
    const dispatch = useDispatch()

    const submitForm = (event) => {
        event.preventDefault();
        const { target } = event;
        const { id } = target;
        const { content } = target;
        SubmitServer(id.value, content.value)
        receiveServer()
    }

    const SubmitServer = async (id, content) => {//서버에 데이터를 제출하는코드
        await api.post(`about/comments/upload`, {
            writername: id,
            body: content
        }).catch(err => {
            console.log(err)
        })
    }

    const receiveServer = async () => {//서버에서 데이터를 받는 코드
        await api.get("about/comments/findall/?title=dataType&value=comment", {

        }).then(res => {
            dispatch(BookActions.checkBook())
        }).catch(err => {
            console.log(err)
        })
    }

    const deletData = async () => {//삭제기능 코드
        await api.delete("about/comments/clear", {

        }).catch(err => {
            console.log(err)
        })
    }

    return (
        <StyledBookForm onSubmit={submitForm}>
            <BookNameInput />
            <div>
                <BookContentInput />
                <BookButton />
                <button onClick={deletData}>삭제</button>
            </div>
        </StyledBookForm>
    )


}

export default BookForm