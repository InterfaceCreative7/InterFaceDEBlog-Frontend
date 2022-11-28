import styled from "styled-components";


const StyledBookContents = styled.li`
@import url('https://fonts.googleapis.com/css2?family=Nanum+Pen+Script&display=swap');
display:flex;
flex-direction:column;
justify-content: space-between;
align-items:start;
padding:15px;
overflow:auto;
border-radius:30px;
width:40vw;
height:20vw;
margin-right:1vw;
margin-top:5vw;



background-color: #fffaf0;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
list-style:none;
.start{
    width:100%;
    display:flex;
    justify-content:start;
    align-items: center;
    border-bottom:0.1px solid;   
}


box{ 
    width:300px;
    height:300px;
    margin:0 auto;
}

.end{
    width:100%;
    display:flex;
    justify-content:right;
}

p{
    font-family: 'Nanum Pen Script', cursive;
}
p.name{ 
    font-size:1.8vw;

}
p.contents{
    font-size:1.1vw;
}

.feedback{
    border-style: solid;
    border-color: coral;
}
.day{
font-size:1.2vw;
}

p.FeedBack{
    font-size:1.8vw;
    padding:5px;
    margin-right:1.5vw;
    border:1px solid #ff0000;
    border-radius:30px;
}
p.QnA{
    font-size:1.8vw;
    padding:5px;
    margin-right:1.5vw;
    border:1px solid #0000ff;
    border-radius:30px;
}
p.GuestBook{
    font-size:1.8vw;
    padding:5px;
    margin-right:1.5vw;
    border:1px solid #ffd700;
    border-radius:30px;
}
@media (max-width:400px){
    width:70vw;
    height:40vw;
    margin-right:10vw;
    padding:15px;
    border-radius:10px;
    font-size:3vw;
    p.name{ 
        font-size:3vw;
    }
    p.contents{
        font-size:4vw;
    }
    .day{
        font-size:2vw;
    }
    
}
`

const BookContents = (props) => {
    const { writername, body, docType, date } = props.items
    const day = date.slice(0, 10);
    return (
        <StyledBookContents className={docType}>
            <header className="start">
                <p className={docType}>{docType}</p>
                <p className="name">{writername}</p>
            </header>
            <p className="contents">{body}</p>
            <div className="end">
                <p className="day">{day}</p>
            </div>
        </StyledBookContents >
    )
}

export default BookContents