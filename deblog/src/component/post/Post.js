import styled from "styled-components";
import Footer from "./Footer.js"
import Title from "./Title.js"
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";



const Styledpost = styled.div`
width: 350px;
margin-right:25px;
margin-left:25px;
font-family: 'Do Hyeon', sans-serif;
margin-bottom:30px;

box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);

.PostImage{
    width: 100%;
    height: 218px;
}

:hover{
  width: 355px;
  display: inline-block;
  transition-duration: 1.0s;
  transition-property: transform;

  @include hideTapHighlightColor();
  @include hardwareAccel();
  @include improveAntiAlias();

  &:hover {
    transform: translateY(-3px);
    animation-name: hover;
    animation-duration: 0.5s;
    animation-delay: $defaultDuration;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    animation-direction: alternate;
  }

}
`

const Post = (props) => {
    const { PostTitle, PostFooter, _id } = props.items
    const [img, setImg] = useState("/image/tibet.jpg");
    useEffect(() => {
        if (_id === "638756e20f6e752d59f461fa") {
            setImg("/image/Tom.jpg")
        }
        else if (_id === "6386fc2d64acb17126ab21ab") {
            setImg("/image/ponyo.jpg")
        }
        else if (_id === "638755c30f6e752d59f461ea") {
            setImg("/image/chihiro.jpg")
        }
        else if (_id === "6387564a0f6e752d59f461f3") {
            setImg("/image/howl.jpg")
        }
        else if (_id === "63860e0964acb17126ab20f2") {
            setImg("/image/marnie.jpg")
        }
        else if (_id === "638706ca0f6e752d59f46107") {
            setImg("/image/kazeta.jpg")
        }
    }, [])

    return (
        <Link to={`/${_id}`}>
            <Styledpost>
                <img className="PostImage" src={process.env.PUBLIC_URL + img} alt="postImgage"></img>
                <Title value={PostTitle}></Title>
                <Footer value={PostFooter}></Footer>
            </Styledpost>
        </Link>
    )
}

export default Post