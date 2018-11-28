import React, { Component } from 'react'
import { connect } from 'react-redux'
import { removeArticle, editArticle } from '../actions/index'
import Modal from './Modal'

const mapStateToProps = state => {
	return {
		articles: state.articles,
		modal: state.modal
	}
}
const mapDispatchToProps = dispatch => {
	return {
		removeArticle: articleId => dispatch(removeArticle(articleId)),
		editArticle: articleId => dispatch(editArticle(articleId))
	}
}

class ConnectedList extends Component {
	constructor() {
		super()
		this.handleRemove = this.handleRemove.bind(this)
		this.handleEdit = this.handleEdit.bind(this)
	}
	handleRemove(e) {
		e.preventDefault()
		const idToClean = e.currentTarget.attributes['id-article'].value
		this.props.removeArticle(idToClean)
	}
	handleEdit(e) {
		const idToEdit = e.currentTarget.attributes['id-article'].value
		this.props.editArticle(idToEdit)
	}
	render() {
		return (
			<div className="wrapperList">
				<ul className="ListArticles">
					{this.props.articles.map(el => (
						<li key={el.id}>
							<h3>{el.title}</h3>
							<p>{el.fecha}</p>
							<div className="actions">
								<button onClick={this.handleEdit} id-article={el.id}>
									edit
								</button>
								<button onClick={this.handleRemove} id-article={el.id}>
									x
								</button>
							</div>
						</li>
					))}
				</ul>
				{this.props.modal ? <Modal /> : <div />}
			</div>
		)
	}
}

const List = connect(
	mapStateToProps,
	mapDispatchToProps
)(ConnectedList)

export default List
