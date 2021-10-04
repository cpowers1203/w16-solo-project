import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom'
import { getAllSpots } from '../../store/spots';

function SpotPage() {
    const dispatch = useDispatch();
    const spots =  useSelector(state => Object.values(state.spots))


    useEffect(() => {
        dispatch(getAllSpots())
    }, [dispatch])

    return (
        <div>
            <ul>
                {spots.map((spot) =>
                    <p key={spot.id}>
                        <NavLink to={`/spots/${spot.id}`}>
                        {spot.name}
                        </NavLink>
                    </p>
                        )}
            </ul>
        </div>
    )
}

export default SpotPage;