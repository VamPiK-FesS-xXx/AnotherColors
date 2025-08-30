import './style/style.css'
import renderColors from './components/render-Colors/renderColor'
import { useEffect, useState } from 'react'
function App() {
	const [colors, setColors] = useState(renderColors())

	useEffect(() => {
		const handleKeyDown = event => {
			if (event.code === 'Space') {
				setColors(renderColors()) // Обновляем состояние при нажатии пробела
			}
		}

		document.addEventListener('keydown', handleKeyDown)

		return () => {
			document.removeEventListener('keydown', handleKeyDown)
		}
	}, [])
	return (
		<>
			<div className='container-col'>{colors}</div>
		</>
	)
}

export default App
