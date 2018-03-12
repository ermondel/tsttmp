/**
 * MyHistory.js
 */
import Component from '../Component';

class MyHistory extends Component {
	constructor(props) {
		super(props);
		
		this.container = document.createElement('div');
		this.container.id = 'myhistory';
		this.container.addEventListener('click', this.handleClick.bind(this));
	}

	handleClick(e) {
		if (e.target.nodeName === 'LI') this.props.onHistoryClick(e.target.textContent);
	}

	render() {
		const { history } = this.props;
		return history && history.length>0 ? '<ul>' + history.map(val => `<li>${val}</li>`).join('') + '</ul>' : '';
	}
}

export default MyHistory;
