import chroma from 'chroma-js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)

export default function renderColors() {
	const color = Array.from({ length: 5 }, () => chroma.random().hex())
	const ico = <FontAwesomeIcon icon='fa-solid fa-lock' />
	return (
		<>
			{color.map((color, index) => (
				<div key={index} className='col' style={{ backgroundColor: color }}>
					<h2 className='col-text'>{color}</h2>
					<button className='col-btn'>{ico}</button>
				</div>
			))}
		</>
	)
}
