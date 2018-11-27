/* export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'

export const increment = () => {
  return {
    type: INCREMENT,
  }
}

export const decrement = () => {
  return {
    type: DECREMENT,
  }
} */
import { ADD_ARTICLE, REMOVE_ARTICLE } from '../constants/action-types'

export const addArticle = article => ({
	type: ADD_ARTICLE,
	payload: article
})

export const removeArticle = idArticle => ({
	type: REMOVE_ARTICLE,
	payload: idArticle
})
