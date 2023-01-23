import { Link } from "react-router-dom"
import Error from "../error/Error"

const NotFoundPage = () => {
    
    return (
        <div className="not-found">
            <Error/>
            <p>Page does not exist</p>
            <Link to='/'><p className="link">Back to homepage</p></Link>
        </div>
    )
}

export default NotFoundPage;