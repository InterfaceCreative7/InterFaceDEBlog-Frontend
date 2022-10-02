import { Link } from "react-router-dom";
function MenuBar() {

    return (
        <div>
            <h4 className="btn">
                <Link to="/About">About</Link>
            </h4>
            <h4 className="btn" style={{
                left: '640px',
            }}>
                <Link to="/Tech">Tech</Link>
            </h4>
            <h4 className="btn" style={{
                left: '740px',
            }}>
                <Link to="/Contact">Contact</Link>
            </h4>
            <h4 className="btn" style={{
                left: '840px',
            }}>
                <Link to="/Culture">Culture</Link>
            </h4>
        </div>
    );
}

export default MenuBar;