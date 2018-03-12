/**
 * form.component.js
 */
import Component from '../component';

class Query extends Component {
	constructor(props) {
		super(props);

		this.container = document.createElement('form');
		this.container.id = 'form';

		this.container.addEventListener('submit', this.handlerSubmit.bind(this));
		this.container.addEventListener('change', this.handlerChange.bind(this));
	}

	handlerSubmit(e) {
		e.preventDefault();
		this.props.onSubmitQuery(e.target.elements.query.value.trim());
	}

	handlerChange(e) {
		if (e.target.type === 'checkbox') 
		{
			const slando     = e.target.form.elements.slando.checked;
			const itc        = e.target.form.elements.itc.checked;
			const freemarket = e.target.form.elements.freemarket.checked;
			const all        = e.target.form.elements.all.checked;

			if (e.target.name === 'all') {
				this.props.onСheckSite({
					slando: all ? true : false,
					itc: all ? true : false,
					freemarket: all ? true : false,
					all,
				});
			} else {
				this.props.onСheckSite({
					slando,
					itc,
					freemarket,
					all: slando && itc && freemarket ? true : false,
				});
			}
		}
		e.target.type === 'radio' && e.target.name === 'depth' && this.props.onChangeDepth(e.target.value);
	}

	render() {
		const { slando }     = this.props;
		const { itc }        = this.props;
		const { freemarket } = this.props;
		const { all }        = this.props;
		const { depth }      = this.props;
		const { query }      = this.props;
		
		return `
		<input type="text" name="query"${(query ? `value="${query}"` : `placeholder="e.g. table"`)}>
		<button>Submit</button>
		<div>
			<label><input type="checkbox" name="slando"${(slando ? ` checked` : '')}>Slando</label>
			<label><input type="checkbox" name="itc"${(itc ? ` checked` : '')}>ITC</label>
			<label><input type="checkbox" name="freemarket"${(freemarket ? ` checked` : '')}>Freemarket</label>
			<label><input type="checkbox" name="all"${(all ? ` checked` : '')}>All</label>

			<label><input type="radio" name="depth" value="20"${(depth == 20 ? ` checked` : '')}>20</label>
			<label><input type="radio" name="depth" value="40"${(depth == 40 ? ` checked` : '')}>40</label>
			<label><input type="radio" name="depth" value="80"${(depth == 80 ? ` checked` : '')}>80</label>
		</div>`;
	}
}

export default Query;
