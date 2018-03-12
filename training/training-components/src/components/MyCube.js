/**
 * MyCube.js
 */
import Component from '../Component';

class MyCube extends Component {
	constructor(props) {
		super(props);
		
		this.container = document.createElement('div');
		this.container.id = 'cubes';
		this.container.addEventListener('click', this.handleClick.bind(this));
	}

	handleClick(e) {
		if (e.target.nodeName === 'BUTTON' && e.target.name === 'clear') this.props.onDelFromHistory(e.target.value);
	}

	render() {
		const { myvalue } = this.props;
		const { mycount } = this.props;
		const { mycolor } = this.props;

		return myvalue ? `
		<div id="${mycolor}cube">
			<div>${myvalue}</div> 
			${(`<span>&#9992;</span> `.repeat(mycount))}
			<div><button name="clear" value="${myvalue}">Clear</button></div>
		</div>` : '';
	}
}

export default MyCube;
