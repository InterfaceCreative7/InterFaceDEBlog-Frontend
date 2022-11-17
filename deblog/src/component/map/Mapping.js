import React, { useEffect } from 'react';
import styled from 'styled-components';

const StyldeMap = styled.div`

    width: 300px;
    height: 300px;
    @media (max-width:500px){
        width:20px;
        height:20px;
    }
`

const Mapping = () => {

    useEffect(() => {
        var container = document.getElementById('map');
        var options = {
            center: new window.kakao.maps.LatLng(37.54957967842569, 127.07511575149536),
            level: 4
        };
        var iwContent = "<p  style=font-size:15px>인터페이스 동아리방</p>"
        var iwPosition = new window.kakao.maps.LatLng(37.54957967842569, 127.07511575149536);
        var infowindow = new window.kakao.maps.InfoWindow({
            position: iwPosition,
            content: iwContent
        });
        var map = new window.kakao.maps.Map(container, options);
        infowindow.open(map);
    })

    return (
        <StyldeMap id="map" ></StyldeMap>
    )
}

export default Mapping;