import { useState } from 'react'
import axios from 'axios'

const AboutMe = props => {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [imageUrl, setImageUrl] = useState('')

    const fetchAboutMe = () => {
        axios
            .get(`${process.env.REACT_APP_SERVER_HOSTNAME}/about-me`)
            .then(response => {
                const data = response.data
                setName(data.name)
                setDescription(data.description)
                setImageUrl(data.imageUrl)
            })
            .catch(err => {
                console.error(err)
            })
    }

    fetchAboutMe()

    return (
        <div>
            <h1>{name}</h1>
            <p>{description}</p>
            <img src={imageUrl} alt="Backend Image" width="300" height="200" />
        </div>
    )
}

export default AboutMe