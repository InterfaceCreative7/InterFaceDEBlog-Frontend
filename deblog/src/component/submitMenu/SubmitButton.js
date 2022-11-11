import styled from "styled-components";

const StyledSubmitButton = styled.button`
@import url('https://fonts.googleapis.com/css2?family=Noto+Serif+KR:wght@300&display=swap');
border-radius:50px;
width:100px;
height:45px;
outline:none;
border:none;
background-color:#EFA4A4;
font-size:20px;
font-family: 'Noto Serif KR', serif;
background-color:transparent;
:before{
    content: "";
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  height: 100%;
  z-index: -1;
  background-color: #000;
  -webkit-transform: scaleY(.3);
  transform: scaleY(.3);
  opacity: 0;
  transition: all .3s
  }
:hover{
    color:#000000;  
}
:hover::before{
    opacity: 1;
  background-color: #F8E5A2;
  -webkit-transform: scaleY(1);
  transform: scaleY(1);
  transition: -webkit-transform .6s cubic-bezier(.08, .35, .13, 1.02), opacity .4s;
  transition: transform .6s cubic-bezier(.08, .35, .13, 1.02), opacity
} 
}
`

const SubmitButton = (props) => {
    const text = props.text
    return (
        <StyledSubmitButton>
            {text}
        </StyledSubmitButton>
    )
}

export default SubmitButton