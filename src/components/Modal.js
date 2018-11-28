import React, { Component } from 'react'
import { connect } from 'react-redux'
import { editArticle, cancelModal, updateArticle } from '../actions/index'

const mapStateToProps = state => {
	return {
		articles: state.articles,
		articleEdit: state.articleEdit
	}
}

const mapDispatchToProps = dispatch => {
	return {
		editArticle: articleId => dispatch(editArticle(articleId)),
		cancelModal: () => dispatch(cancelModal()),
		updateArticle: (Title, Id) => dispatch(updateArticle(Title, Id))
	}
}

class ConnectedModal extends Component {
	constructor() {
		super()
		this.state = {
			title: '',
			id: ''
		}
		this.handleChange = this.handleChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleCancel = this.handleCancel.bind(this)
	}
	handleCancel(e) {
		this.props.cancelModal()
	}
	handleChange(e) {
		this.setState({
			title: e.target.value
		})
	}
	componentWillMount() {
		this.setState({
			title: this.props.articleEdit.title,
			id: this.props.articleEdit.id
		})
	}
	handleSubmit(e) {
		e.preventDefault()
		this.props.updateArticle(this.state.title, this.state.id)
		console.log('handleSubmit -> ', this.props)
	}
	render() {
		return (
			<div className="modal__bg">
				<div className="modal__wrapper">
					<form onSubmit={this.handleSubmit}>
						<label htmlFor="title">Title</label>
						<input type="text" id="title" value={this.state.title} onChange={this.handleChange} />
						<button type="button" onClick={this.handleCancel}>
							CANCEL
						</button>
						<button type="submit">SAVE</button>
					</form>
				</div>
			</div>
		)
	}
}

const Modal = connect(
	mapStateToProps,
	mapDispatchToProps
)(ConnectedModal)

export default Modal
