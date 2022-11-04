import styled from "styled-components";

const Styledtitle = styled.header`
display:flex;
justify-content:center;
font-weight:bold;
font-size:20px;
padding:5px
`

const Title = (props) => {
    return (
        <Styledtitle>{props.value}</Styledtitle>
    )
}

export default Title