import './style/style.css'
import renderColors from './render-Colors/renderColor'
function App() {
	document.addEventListener('keydown', event => {
		if (event.code.toLocaleLowerCase() === 'space') {
			renderColors()
		}
	})

	return (
		<>
			<div className='container-col'>{renderColors()}</div>
		</>
	)
}

export default App
