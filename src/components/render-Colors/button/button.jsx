export default function Button({ children, onClick }) {
	return (
		<button className='col-btn' onClick={onClick}>
			{children}
		</button>
	)
}
