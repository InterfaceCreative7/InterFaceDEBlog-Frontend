import styled from "styled-components";
import SubmitButton from "./SubmitButton.js";

const StyledSubmitMenu = styled.div`
position:fixed;
display:flex;
justify-content:space-evenly;
align-items:center;
bottom:0;
width:48%;
height:80px;
background-color:#F5F5DC;
padding:20px;
`

const SubmitMenu = (props) => {
    return (
        <StyledSubmitMenu>
            <SubmitButton body={props.body} title={props.title} text="제출" />
        </StyledSubmitMenu>
    )

}

export default SubmitMenu