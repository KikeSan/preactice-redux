import React from 'react'
import List from './List'
import Form from './Form'
import '../styles/index.scss'

const App = () => (
	<div>
		<div className="sec-articles">
			<h2>Articles</h2>
			<List />
		</div>
		<div className="sec-form">
			<h2>Add a new articles</h2>
			<Form />
		</div>
	</div>
)

export default App
