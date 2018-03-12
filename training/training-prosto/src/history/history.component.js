/**
 * history.component.js
 */
import Component from '../component';

class History extends Component {
	constructor(props) {
		super(props);

		this.container = document.createElement('div');
		this.container.id = 'search-history';
		this.container.addEventListener('click', this.handlerClick.bind(this));
	}

	handlerClick(e) {
		e.target.nodeName === 'SPAN' && e.target.className === 'value' && this.props.onHistoryClick(e.target.textContent);
		e.target.nodeName === 'SPAN' && e.target.className === 'remove' && this.props.onDelFromHistory(e.target.title);
	}

	render() {
		const { history } = this.props;
		return history && history.length>0 ? '<ul>' + history.map(val => `
			<li>
				<span class="value">${val}</span>
				<span class="remove" title="${val}">&#10008;</span>
			</li>`).join('') + '</ul>' : '';
	}
}

export default History;
