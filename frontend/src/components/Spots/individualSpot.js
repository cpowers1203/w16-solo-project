import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { deleteSpot, getOneSpot } from "../../store/spots";
import { NavLink, useHistory } from "react-router-dom";



function IndividualSpotPage() {
    const { spotId } = useParams()
    const userId = useSelector(state => state.session.user.id)
    const dispatch = useDispatch()
    const spot = useSelector(state => state.spots[spotId])
    const history = useHistory();
    const images = spot?.Images

    useEffect(() => {
        dispatch(getOneSpot(spotId))
    }, [dispatch, spotId])
    const doThis = () => {
        dispatch(deleteSpot(spot))
        history.push('/spots')
        window.location.reload()
    }
  
    return (
        <div>
            {userId===spot?.userId &&(<NavLink to={`/spots/${spot.id}/edit`}>edit</NavLink>)}
            <h1>{spot?.name}</h1>
            <ul>
                {images?.map((image) =>
                    <li key={image.id}>
                        <img src={image.url} alt='' />
                    </li>
                )}
            </ul>
            {userId === spot?.userId && (<NavLink to={`/spots/${spot.id}/images`}>Add Image</NavLink>)}
            <h2>{spot?.address}</h2>
            <h2>{spot?.city}</h2>
            <h2>{spot?.state}</h2>
            <h2>{spot?.country}</h2>
            <h2>${spot?.price}</h2>
            {userId === spot?.userId && (<button onClick={doThis}>delete spot</button>)}
        </div>
    )
}

export default IndividualSpotPage