/* import { combineReducers } from 'redux'
import counter from './counter'

const reducers = combineReducers({
  counter,
})

export default reducers */
import { ADD_ARTICLE, REMOVE_ARTICLE } from '../constants/action-types'
const initialState = {
	articles: [{ title: 'Cyberwow', fecha: '25/11/2018 16:40:16', id: '1' }, { title: 'Productos más vendidos', fecha: '26/11/2018 06:10:03', id: '2' }]
}
const rootReducer = (state = initialState, action) => {
	console.log('RootReducer -> ', action.payload)

	switch (action.type) {
		case ADD_ARTICLE:
			return { ...state, articles: state.articles.concat(action.payload) }
		case REMOVE_ARTICLE:
			return {
				...state,
				articles: state.articles.filter((value, index, array) => {
					console.log('in filter: ', `{value.id} idToClean {action.payload.id}`)
					return value.id !== action.payload
				})
			}
		default:
			return state
	}
}

export default rootReducer
