import styled from "styled-components";
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { PostActions } from "../../store/post-slice";
import { useEffect } from "react";
import { useRef } from "react";

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

::before{
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background-color: #0000;
  -webkit-transform: scaleY(.3);
  transform: scaleY(.3);
  transition: all .3s;
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
    const ref = useRef();
    const text = props.text;
    const body = props.body;
    const title = props.title;
    useEffect(() => {
        if (body === "" || title === "") {
            ref.current.disabled = true;
        }
        else {
            ref.current.disabled = false;
        }
    }, [body, title])
    const dispatch = useDispatch();

    const Submitbody = () => {
        dispatch(PostActions.submitPost({ body, title }))
    }
    return (
        <Link to="/Ready" className="ready">
            <StyledSubmitButton ref={ref} onClick={Submitbody}>
                {text}
            </StyledSubmitButton>
        </Link>
    )
}

export default SubmitButton