import React, { useEffect } from 'react';



const Mapping = () => {

    useEffect(() => {

        var container = document.getElementById('map');
        var options = {
            center: new window.kakao.maps.LatLng(37.54957967842569, 127.07511575149536),
            level: 3
        };
        var map = new window.kakao.maps.Map(container, options);
    }, [])

    return (
        <div >
            <div id="map" style={{ width: "300px", height: "300px" }}></div>
        </div>
    )
}

export default Mapping;