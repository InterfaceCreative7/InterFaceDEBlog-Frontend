import styled from "styled-components";


const StyledBookNameInput = styled.input`
width:20vw;
height:2vw;
text-align: center;
padding:0.5vw;
border-radius:10px;
font-size:1.2vw;


@media (max-width:500px){
    width:30vw;
    height:5vw;
    margin-right:1vw;
    text-align: center;
    padding:0.5vw;
    border-radius:10px;
    font-size:3vw;
    
}
`

const BookNameInput = () => {

    return (
        <StyledBookNameInput maxLength={10} name="id" placeholder="이름을 써주세요!" />
    )
}

export default BookNameInput;