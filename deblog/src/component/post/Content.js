import styled from "styled-components";

const Styledcontent = styled.div`
display:flex;
justify-content:center;
padding:5px;
color: #333;
text-decoration: none;
`

const Content = (props) => {
    return (
        <Styledcontent>{props.value}</Styledcontent>
    )
}

export default Content

/*





*/