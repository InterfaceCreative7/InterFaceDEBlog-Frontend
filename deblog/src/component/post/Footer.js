import styled from "styled-components";

const Styledfooter = styled.footer`
display:flex;
font-size:18px;
height:60px;
justify-content:space-between;
align-items:center;
padding:0 12px;
color: #333;
text-decoration: none;

`

const Footer = (props) => {
    const date = new Date()
    return (
        <Styledfooter>
            <p>{props.value}</p> <p>{`${date.getMonth() + 1}월 ${date.getDate()}일 `}</p>
        </Styledfooter>
    )
}

export default Footer