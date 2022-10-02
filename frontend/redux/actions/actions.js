import { LOAD_SOCIALS } from 'redux/types'

export const loadSocials = socials => {
  return {
    type: LOAD_SOCIALS,
    payload: socials
  }
}
