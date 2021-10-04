import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addAnImage, createSpot } from '../../store/spots';
import { useHistory, useParams } from 'react-router-dom';


function CreateImage() {
    const spotsId = useParams()
    const dispatch = useDispatch()
    const history = useHistory()
    const [spotId] = useState(spotsId)
    const [url, setUrl] = useState('')

    const updateUrl = e => setUrl(e.target.value)

    const handleSubmit = (e) => {
        e.preventDefault()

        const imageLoad = {
            spotId,
            url
        }
        dispatch(addAnImage(imageLoad))
    }
     const handleCancelClick = async (e) => {
        e.preventDefault()
        history.push(`/spots/${spotsId}`)
     }
    
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="image URL"
                required
                value={url}
                onChange={updateUrl}
            />
            <button type='button' onClick={(e) => handleCancelClick(e)}>Cancel</button>
            <button type="submit">submit</button>
        </form>
    )
}

export default CreateImage