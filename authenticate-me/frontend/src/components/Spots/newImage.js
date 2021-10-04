import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createSpot } from '../../store/spots';
import { useHistory, useParams } from 'react-router-dom';
import { addAnImage } from '../../store/images';

function NewImage() {
    const userId = useSelector(state => state.session.user.id)
    const spotsId = useParams()
    const dispatch = useDispatch();
    const history = useHistory
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
        history.push(`/spots/${spotId}`)
        window.location.reload()
    }
}