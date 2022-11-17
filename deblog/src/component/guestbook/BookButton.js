import styled from "styled-components";

const StyledBookButton = styled.button`
width:6vw;
height:5vw;
outline:none;
border:none;
background-color:transparent;
img{
    width:100%;
    height:100%;
    border-radius:50px;
    background-color:#083AA9;
}
img:hover{
    width:92%;
    height:92%;
    background-color:#002E94;
}

@media (max-width:500px){
    width:40vw;
    height:8vw;
    margin-right:1vw;
    padding:0.5vw;
    border-radius:10px;
    font-size:3vw;
}
`

const BookButton = () => {

    return (
        <StyledBookButton>
            <img src="./image/homeButton.jpg" />
        </StyledBookButton>
    )
}

export default BookButton;