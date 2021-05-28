import { Link } from "react-router-dom"


const NotFound = () => {
    return (  
        <div>
            <h3>Your link is wrong...</h3>
            <Link to="/">turn back to home</Link>
        </div>

    );
}
 
export default NotFound;