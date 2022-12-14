import styled from "styled-components";


const StyledBookContentInput = styled.textarea`
width:40vw;
height:10vw;
margin-right:0.1vw;
padding:0.8vw;
border-radius:10px;
font-size:1vw;
text-align: center;


@media (max-width:500px){
    width:60vw;
    height:30vw;
    margin-right:1vw;
    padding:0.5vw;
    border-radius:10px;
    font-size:3vw;

    
}
`



const BookContentInput = () => {

    return (
        <StyledBookContentInput maxLength={100} name="content" placeholder="하고싶은 말을 써주세요!" />
    )
}

export default BookContentInput;