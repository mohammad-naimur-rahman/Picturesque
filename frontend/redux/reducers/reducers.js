import { combineReducers } from 'redux'
import * as types from 'redux/types'

const initialState = {
  socials: []
}

const socialReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.LOAD_SOCIALS:
      return {
        socials: payload
      }
    default:
      return state
  }
}

export default combineReducers({ social: socialReducer })
