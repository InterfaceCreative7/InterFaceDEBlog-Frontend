import styled from "styled-components";
import Content from "./Content.js"
import Footer from "./Footer.js"
import Title from "./Title.js"


const Styledpost = styled.div`
width: 350px;

margin-right:25px;
margin-left:25px;

margin-bottom:30px;

box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
.PostImage{
    width:100%;
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
    const { PostTitle, PostContent, PostFooter } = props.items
    return (
        <Styledpost>
            <img className="PostImage" src={process.env.PUBLIC_URL + "/image/tibet.jpg"} alt="postImgage"></img>
            <Title value={PostTitle}></Title>
            <Content value={PostContent}></Content>
            <Footer value={PostFooter}></Footer>
        </Styledpost>
    )
}

export default Post