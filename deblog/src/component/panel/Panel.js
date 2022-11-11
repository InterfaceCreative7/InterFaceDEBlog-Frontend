import styled from "styled-components"

const StyledPanel = styled.div`
display:flex;
justify-content:center;
align-items:center;
width:100%;
height: 216px;
background: #CCCCCC;
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
    .imgList {display:flex; margin:50px auto; width:1440px; height:720px;}
    .imgList .box {position:relative; overflow:hidden;}
    .imgList .box:after {display:block; content:""; position:absolute; top:0; width:100%; height:100%; background:#e63312;}
    .imgList .box img {display:block; opacity:0; animation:imgFadeIn both .2s .6s;}
    .imgList .left .box {width:962px; height:376px;}
    .imgList .right .box {width:478px; height:752px;}
    .imgList .left .box.top:after,
    .imgList .right .box:after {left:-100%; animation:moveLeftToRight both 1.2s cubic-bezier(0.65, 0.05, 0.36, 1);}
    .imgList .left .box.bottom:after {left:100%;  animation:moveRightToLeft both 1.2s cubic-bezier(0.65, 0.05, 0.36, 1);}
    @keyframes moveLeftToRight {
        to {left:-100%}
        from {left:100%}
    }
    @keyframes moveRightToLeft {
        to {left:100%;}
        from {left:-100%;}
    }
    @keyframes imgFadeIn {
        0% {opacity:0;}
        100% {opacity:1;}
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