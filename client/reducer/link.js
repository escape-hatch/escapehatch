import axios from 'axios';
import { browserHistory } from 'react-router';

// constants //
const GET_LINKS = 'GET_LINKS'

// action creators //
const getLinks = links => ({
  type: GET_LINKS,
  links,
})

// thunk action creators //
// export const getLinksByErrId = errId =>
//   dispatch =>
//     axios.get(`/api/links/${errId}`)
//     .then(res => dispatch(getLinks(res.data)))
//     .catch(err => console.log(err))

// Adfjskdlfjsdlkfjs1

export const getLinksByErrId = encryptedId =>
  dispatch =>
    axios.get(`/api/search/${encryptedId}`)
    .then(res => dispatch(getLinks(res.data)))
    .catch(err => console.log(err))


// reducer
const initialLinksState = {
  currentLinks: []
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
