import axios from 'axios';
import { browserHistory } from 'react-router';

// constants //
const GET_LINKS = 'GET_LINKS'
const ADD_VOTE = 'ADD_VOTE'

// action creators //
const getLinks = links => ({
  type: GET_LINKS,
  links,
});

const addVote = vote => ({
  type: ADD_VOTE,
  vote
})

// thunk action creators
export const getLinksByErrId = encryptedId =>
  dispatch =>
    axios.get(`/api/search/${encryptedId}`)
    .then(res => dispatch(getLinks(res.data)))
    .catch(err => console.log(err))

export const updateVote = (info) =>
  dispatch =>
    axios.put(`/api/links/${info.vendor}`, info)
      .then(res => {
        console.log("res:", res)
        // dispatch(addVote(res.data))
      })
      .catch(err => console.log(err))

// reducer
const initialLinksState = {
  currentLinks: {}
}

export default function(state = initialLinksState, action) {
  const newState = Object.assign({}, state)

  switch (action.type) {
    case GET_LINKS:
      newState.currentLinks = action.links
      break;

    default:
      return state
  }

  return newState
}
