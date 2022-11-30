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
    const date = props.value.date.slice(0, 10);
    console.log(date)
    return (
        <Styledfooter>
            <p>{props.value.PostFooter}</p> <p>{date}</p>
        </Styledfooter>
    )
}

export default Footer