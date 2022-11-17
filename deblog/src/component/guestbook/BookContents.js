import styled from "styled-components";


const StyledBookContents = styled.li`
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@700&display=swap');
display:flex;
justify-content:space-evenly;
align-items:center;
border-radius:30px;
width:70vw;
margin-right:1vw;
height:15vw;
margin-top:5vw;

box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
list-style:none;
box{ 
    width:300px;
    height:300px;
    margin:0 auto;
}

p{
    font-family: 'Noto Sans KR', sans-serif;
}
p.name{ 
    font-size:1.8vw;

}
p.contents{
    font-size:1.3vw;
}
.feedback{
    border-style: solid;
    border-color: coral;
}
@media (max-width:400px){
    width:65vw;
    height:8vw;
    margin-right:10vw;
    padding:0.5vw;
    border-radius:10px;
    font-size:3vw;
}
`

const BookContents = (props) => {
    const { writername, body, docType } = props.items
    return (
        <StyledBookContents className={docType}>
            <p className="name">{docType}</p>
            <p className="name">{writername}</p>
            <p className="contents">{body}</p>
        </StyledBookContents >
    )
}

export default BookContents