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
export const getLinksByErrId = errId =>
  dispatch =>
    axios.get(`/api/links/${errId}`)
    .then(res => dispatch(getLinks(res.data)))
    .catch(err => console.log(err))

// reducer
const initialLinksState = {
  currentLinks: []
}

export default function(state = initialLinksState, action) {
  switch (action.type) {
    case GET_LINKS:
      return action.links
    default:
      return state
  }
}
