import { ADD_ARTICLE, REMOVE_ARTICLE, EDIT_ARTICLE, CANCEL_MODAL, UPDATE_ARTICLE } from '../constants/action-types'

export const addArticle = article => ({
	type: ADD_ARTICLE,
	payload: article
})

export const removeArticle = idArticle => ({
	type: REMOVE_ARTICLE,
	payload: idArticle
})

export const editArticle = idArticle => ({
	type: EDIT_ARTICLE,
	payload: idArticle
})

export const cancelModal = () => ({
	type: CANCEL_MODAL
})

export const updateArticle = (Title, Id) => ({
	type: UPDATE_ARTICLE,
	payload: {
		title: Title,
		id: Id
	}
})
