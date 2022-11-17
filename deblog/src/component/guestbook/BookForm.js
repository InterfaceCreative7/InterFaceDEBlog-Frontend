import styled from "styled-components";
import BookContentInput from "./BookContentInput";
import BookNameInput from "./BookNameInput";
import BookButton from "./BookButton";
import api from "../server/Auth";
import BookSelect from "./BookSelect";
import { useDispatch } from "react-redux";
import { BookActions } from "../../store/Book-slice";

const StyledBookForm = styled.form`
display:flex;
flex-direction:column;
width:100vw;
height:30vw;
justify-content:center;
align-items:center;

.input{
    display:flex;
}
@media (max-width:500px){
    width:100vw;
    height:30vw;
    margin:auto;
    padding:0.5vw;
    font-size:30%;
}
`

const BookForm = () => {
    const dispatch = useDispatch()

    const submitForm = (event) => {
        event.preventDefault();
        const { target } = event;
        const { type } = target;
        const { id } = target;
        const { content } = target;
        SubmitServer(type.value, id.value, content.value)
        receiveServer()
    }

    const SubmitServer = async (type, id, content) => {//서버에 데이터를 제출하는코드
        await api.post(`about/comments/upload`, {
            writername: id,
            docType: type,
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

    return (
        <StyledBookForm onSubmit={submitForm}>
            <BookSelect />
            <BookNameInput />
            <BookContentInput />
            <div className="input">
                <BookButton />
            </div>
        </StyledBookForm>
    )


}

export default BookForm