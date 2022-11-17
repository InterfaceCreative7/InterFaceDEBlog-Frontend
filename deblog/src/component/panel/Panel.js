import styled from "styled-components"

const StyledPanel = styled.div`
display:flex;
justify-content:center;
align-items:center;
width:100%;
height: 216px;
background: #6500E7;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
margin-bottom:55px;

.logo{
    width:400px;
    height:100%;
    margin-right:5%;
}


@media (max-width: 500px) {
    height:108px;
    .logo {
        width: 200px;
    }
}

`
const Panel = () => {
    return (
        <StyledPanel>
            <img className="logo" src="./image/panel.jpg" alt="techblog" />
        </StyledPanel>
    )
}

export default Panel