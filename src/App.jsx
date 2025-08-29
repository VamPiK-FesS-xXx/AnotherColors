import chroma from 'chroma-js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

import './style/style.css'
library.add(fas)

function App() {
	const color = chroma.random().hex()

	return (
		<>
			<style>
				{`
				div { background-color: ${color} }
				`}
			</style>
			<div className='container-col'>
				<div className='col'>
					<h2 className='col-text'>{color}</h2>
					<button className='col-btn'>
						<FontAwesomeIcon icon='fa-solid fa-lock' />
					</button>
				</div>
				<div className='col'>
					<h2 className='col-text'>{color}</h2>
					<button className='col-btn'>
						<FontAwesomeIcon icon='fa-solid fa-lock' />
					</button>
				</div>
				<div className='col'>
					<h2 className='col-text'>{color}</h2>
					<button className='col-btn'>
						<FontAwesomeIcon icon='fa-solid fa-lock' />
					</button>
				</div>
				<div className='col'>
					<h2 className='col-text'>{color}</h2>
					<button className='col-btn'>
						<FontAwesomeIcon icon='fa-solid fa-lock' />
					</button>
				</div>
				<div className='col'>
					<h2 className='col-text'>{color}</h2>
					<button className='col-btn'>
						<FontAwesomeIcon icon='fa-solid fa-lock' />
					</button>
				</div>
			</div>
		</>
	)
}

export default App
