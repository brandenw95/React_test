import {Link} from 'react-router-dom'

const About = () => {
    return (
        <div>
            <center>
            <h4>Version 1.0.0</h4>
            <Link to='http://radixmedia.ca'>Go to Website</Link>
            <p></p>
            <Link to='/'>Go Back</Link>
            </center>
        </div>
    )
}

export default About
