import { csrfFetch } from './csrf';
import thunk from 'redux-thunk';

const LOAD = 'spot/LOAD'
const ADD_ONE = 'spot/ADD_ONE'
const DELETE_ONE = 'spot/DELETE_ONE'
const ADD_ONE_IMAGE = '/image/ADD_ONE'
//THUNK WILL LIVE HERE

const load = list => ({
    type: LOAD,
    list
})
const addOneSpot = spot => ({
    type: ADD_ONE,
    spot
})

const deleteOneSpot = spot => ({
    type: DELETE_ONE,
    spot
})

const addOneImage = image => ({
    type: ADD_ONE_IMAGE,
    image
})

export const createSpot = data => async dispatch => {
    console.log(data);
    const response = await csrfFetch('/api/spots', {
        method: 'POST',
        body: JSON.stringify(data),
    })
    if (response.ok) {
        const spot = await response.json()
        dispatch(addOneSpot(spot))
        return spot;
    }
}

export const updateSpot = data => async dispatch => {
    const response = await csrfFetch(`/api/spots/${data.id}`, {
        method: 'PUT',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    if (response.ok) {
        const spot = await response.json()
        dispatch(addOneSpot(spot))
        return spot;
    }
}

export const deleteSpot = data => async dispatch => {
    const response = await csrfFetch(`/api/spots/${data.id}`, {
        method: 'DELETE',
    })
    if (response.ok) {
        const spot  = await response.json
        dispatch(deleteOneSpot(spot))
    }
}

export const getOneSpot = id => async dispatch => {
    const response = await csrfFetch(`/api/spots/${id}`)

    if (response.ok) {
     const spot = await response.json();
     dispatch(addOneSpot(spot));
    }
}

export const getAllSpots = data => async dispatch => {
    const response = await csrfFetch('/api/spots')

    const list = await response.json()
    if (response.ok) {
        dispatch(load(list.spots))
    }
    return list
}

export const addAnImage = data => async dispatch => {
    const response = await csrfFetch('/api/spots/:id(\\d+)/images', {
        method: 'POST',
        body: JSON.stringify(data),
    })
    if (response.ok) {
        const image = await response.json()
        dispatch(addOneImage(image))
    }
}

const initialState = {};

export default function spotsReducer(state = initialState, action) {
    switch (action.type) {
        case LOAD: {
            const allSpots = {};
            action.list.forEach(spot => {
                allSpots[spot.id] = spot;
            });
            return {
                ...allSpots,
                ...state,
            };
        }
        case ADD_ONE: {
             return {
        ...state,
        [action.spot.id]: {
          ...state[action.spot.id],
          ...action.spot,
        }
      };
        }
         case DELETE_ONE: {
      const newState = { ...state };
      delete newState[action.spot];
      return newState;
        }
        case ADD_ONE_IMAGE: {
            const spotId = action.spot.id
            return {
                ...state,
                [action.spot[spotId].Images.id]: {
                    ...state[action.spot[spotId].Images.id],
                    ...action.spot[spotId].Images,
                }
           }
            
        }
        default:
      return state;
    }
}  