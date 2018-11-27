import React, { Component } from 'react'
import { connect } from 'react-redux'
import { removeArticle } from '../actions/index'

const mapStateToProps = state => {
	console.log('mapStateToProps', state)
	return {
		articles: state.articles
	}
}
const mapDispatchToProps = dispatch => {
	return {
		removeArticle: articleId => dispatch(removeArticle(articleId))
	}
}

/* const ConnectedList = ({ articles }) => (
	<ul className="ListArticles">
		{articles.map(el => (
			<li key={el.id}>
				{el.title}
				<button onClick={this.handleRemove}>x</button>
			</li>
		))}
	</ul>
) */
class ConnectedList extends Component {
	constructor() {
		super()
		this.handleRemove = this.handleRemove.bind(this)
		this.handleEdit = this.handleEdit.bind(this)
	}
	handleRemove(e) {
		//e.preventDefault()
		const idToClean = e.currentTarget.attributes['id-article'].value
		console.log('handleRemove: ', e.currentTarget.attributes['id-article'].value)

		this.props.removeArticle(idToClean)
	}
	handleEdit(e) {
		console.log('handleRemove: ', e.currentTarget.attributes['id-article'].value)
	}
	render() {
		return (
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
		)
	}
}

const List = connect(
	mapStateToProps,
	mapDispatchToProps
)(ConnectedList)

export default List
