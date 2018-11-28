import { ADD_ARTICLE, REMOVE_ARTICLE, EDIT_ARTICLE, CANCEL_MODAL, UPDATE_ARTICLE } from '../constants/action-types'
const initialState = {
	articles: [{ title: 'Cyberwow', fecha: '25/11/2018 16:40:16', id: '1' }, { title: 'Productos más vendidos', fecha: '26/11/2018 06:10:03', id: '2' }],
	modal: false
}
const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_ARTICLE:
			return { ...state, articles: state.articles.concat(action.payload) }
		case REMOVE_ARTICLE:
			return {
				...state,
				articles: state.articles.filter((value, index, array) => {
					return value.id !== action.payload
				})
			}
		case EDIT_ARTICLE:
			return {
				...state,
				articleEdit: state.articles.find(busca => {
					return busca.id === action.payload
				}),
				modal: true
			}
		case CANCEL_MODAL:
			return {
				...state,
				modal: false
			}
		case UPDATE_ARTICLE:
			return {
				...state,
				articles: state.articles.map(art => {
					if (art.id === action.payload.id) {
						return {
							title: action.payload.title,
							fecha: art.fecha,
							id: art.id
						}
					} else {
						return art
					}
				}),
				modal: false
			}
		default:
			return state
	}
}

export default rootReducer
