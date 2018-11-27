import React, { Component } from 'react'
import { connect } from 'react-redux'
import uuidv1 from 'uuid'
import { addArticle } from '../actions/index'

const mapDispatchToProps = dispatch => {
	console.log('mapDispatchToProps--- ')
	return {
		addArticle: article => dispatch(addArticle(article))
	}
}

class ConnectedForm extends Component {
	constructor() {
		super()
		this.state = {
			title: ''
		}
		this.handleChange = this.handleChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}
	handleChange(e) {
		this.setState({
			[e.target.id]: e.target.value
		})
	}
	handleSubmit(e) {
		e.preventDefault()
		const { title } = this.state,
			id = uuidv1(),
			fecha = new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString()
		this.props.addArticle({ title, fecha, id })
		this.setState({ title: '' })
		console.log('handleSubmit -> ', this.props)
	}

	render() {
		//const { title } = this.state
		console.log('render Form')
		return (
			<form onSubmit={this.handleSubmit}>
				<div>
					<label htmlFor="title">Title</label>
					<input type="text" id="title" value={this.state.title} onChange={this.handleChange} />
				</div>
				<button type="submit">SAVE</button>
			</form>
		)
	}
}

const Form = connect(
	null,
	mapDispatchToProps
)(ConnectedForm)

export default Form
