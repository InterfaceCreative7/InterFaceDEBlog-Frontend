import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledSubmitButton = styled.button`
@import url('https://fonts.googleapis.com/css2?family=Noto+Serif+KR:wght@300&display=swap');
border-radius:50px;
width:100px;
height:45px;
outline:none;
border:none;
background-color:#EEE8AA;
font-size:20px;
font-family: 'Noto Serif KR', serif;
background-color:transparent;
.ready{
    text-decoration: none;
}
:hover{
    background-color:#EEE8AA; 
}
`

const SubmitButton = (props) => {
    const text = props.text
    return (
        <StyledSubmitButton>
            <Link to="/Ready" className="ready">{text}</Link>
        </StyledSubmitButton>
    )
}

export default SubmitButton