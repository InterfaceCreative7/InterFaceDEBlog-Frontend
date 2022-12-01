import styled from "styled-components";
import BookContentInput from "./BookContentInput.js";
import BookNameInput from "./BookNameInput.js";
import BookButton from "./BookButton.js";
import api from "../server/Auth.js";
import BookSelect from "./BookSelect.js";
import { useDispatch } from "react-redux";
import { BookActions } from "../../store/Book-slice.js";

const StyledBookForm = styled.form`
display:flex;
flex-direction:column;
width:100vw;
height:30vw;
justify-content:center;
align-items:center;
text-align: center; margin-top: 20px;
animation: motion 0.3s linear 0s infinite alternate; margin-top: 0;}
    
@keyframes motion 
0% {margin-top: 0px;}
100% {margin-top: 10px;}



.input{
    display:flex;
}
@media (max-width:500px){

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
        if (id.value === "") {
            alert("아이디를 입력해주세요!")
            return;
        }
        if (content.value === "") {
            alert("내용을 입력해주세요!")
            return;
        }
        SubmitServer(type.value, id.value, content.value)
        receiveServer()
        id.value = "";
        content.value = "";
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
            const { data } = res;
            console.log(data)
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