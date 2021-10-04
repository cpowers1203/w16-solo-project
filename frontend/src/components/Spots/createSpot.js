import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createSpot } from '../../store/spots';
import { useHistory } from 'react-router-dom';

function CreateASpot() {
    const usersId = useSelector(state => state.session.user.id)
    const dispatch = useDispatch();
    const history = useHistory()
    const [userId] = useState(usersId)
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('')
    const [country, setCountry] = useState('');
    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)


    const updateAddress = e => setAddress(e.target.value);
    const updateCity = e => setCity(e.target.value)
    const updateState = e => setState(e.target.value)
    const updateCountry = e => setCountry(e.target.value)
    const updateName = e => setName(e.target.value)
    const updatePrice = e => setPrice(e.target.value)

    const handleSubmit = (e) => {
        e.preventDefault();

        const spotLoad = {
            userId,
            address,
            city,
            state,
            country,
            name,
            price
        }
     dispatch(createSpot(spotLoad))
        history.push('/spots')
        window.location.reload()
        
    }
    const handleCancelClick = async (e) => {
        e.preventDefault()
        history.push('/spots')
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="address of spot"
                required
                value={address}
                onChange={updateAddress} />
            <input
                type="text"
                placeholder="city"
                required
                value={city}
                onChange={updateCity} />
                  <input
                type="text"
                placeholder="state"
                required
                value={state}
                onChange={updateState} />
             <input
                type="text"
                placeholder="country"
                required
                value={country}
                onChange={updateCountry} />
             <input
                type="text"
                placeholder="Name of Spot"
                required
                value={name}
                onChange={updateName} />
            <input
                type="number"
                placeholder="price per night"
                required
                value={price}
                onChange={updatePrice} />
            <button type='button' onClick={(e) => handleCancelClick(e)}>Cancel</button>
            <button type="submit">submit</button>
        </form>
    )
}

export default CreateASpot;