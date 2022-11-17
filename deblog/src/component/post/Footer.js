import styled from "styled-components";

const Styledfooter = styled.footer`
display:flex;
font-size:20px;
justify-content:space-between;
align-items:center;
padding:12px;
`

const Footer = (props) => {
    const date = new Date()
    return (
        <Styledfooter>
            <p>{props.value}</p> <p>{`${date.getMonth()} ${date.getDate()} ${date.getDay()}`}</p>
        </Styledfooter>
    )
}

export default Footer