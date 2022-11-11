import styled from "styled-components";
import Content from "./Content.js"
import Footer from "./Footer.js"
import Title from "./Title"


const Styledpost = styled.div`
width: 350px;
margin-right:50px;
margin-bottom:30px;
box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
.PostImage{
    width:100%;
}

`

const Post = (props) => {
    const { PostImgae, PostTitle, PostContent, PostFooter } = props.items
    return (
        <Styledpost>
            <img className="PostImage" src={PostImgae} alt="postImgage"></img>
            <Title value={PostTitle}></Title>
            <Content value={PostContent}></Content>
            <Footer value={PostFooter}></Footer>
        </Styledpost>
    )
}

export default Post