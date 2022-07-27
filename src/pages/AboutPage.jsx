import React from 'react'
import {Link} from 'react-router-dom'
import Card from '../components/shared/Card'

const AboutPage = () => {
    return (
        <Card>
            <h2>About Us</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro, aliquid a ullam veritatis consequuntur laudantium nemo quo dicta aspernatur culpa, necessitatibus ut nesciunt quis quia pariatur odio? Reprehenderit, quos repellendus!</p>

            <Link to='/'> Go back Home </Link>
        </Card>
    )
}

export default AboutPage