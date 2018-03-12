/**
 * MyForm.js
 */
import Component from '../Component';

class MyForm extends Component {
	constructor(props) {
		super(props);
		
		this.container = document.createElement('form');
		this.container.id = 'form';
		this.container.addEventListener('submit', this.handleSubmit.bind(this));
		this.container.addEventListener('change', this.handleChange.bind(this));
	}

	handleSubmit(e) {
		e.preventDefault();
		this.props.onSubmit(e.target.elements.myvalue.value);
	}

	handleChange(e) {
		if (e.target.type === 'radio') 
		{
			if (e.target.name === 'mycount') this.props.onChangeMycount(e.target.value);
			if (e.target.name === 'mycolor') this.props.onChangeMycolor(e.target.value);
		}
	}

	render() {
		const { myvalue } = this.props;
		const { mycount } = this.props;
		const { mycolor } = this.props;

		return `
		<input type="text" name="myvalue" ${(myvalue ? `value="${myvalue}"` : `placeholder="e.g. string"`)}>
		<button>Submit</button>
		<div>
			<label><input type="radio" name="mycount" value="5"${(mycount == 5 ? ` checked` : ``)}> 5</label>
			<label><input type="radio" name="mycount" value="10"${(mycount == 10 ? ` checked` : ``)}> 10</label>
			<label><input type="radio" name="mycount" value="15"${(mycount == 15 ? ` checked` : ``)}> 15</label>
			<label><input type="radio" name="mycolor" value="green"${(mycolor === 'green' ? ` checked` : ``)}> green</label>
			<label><input type="radio" name="mycolor" value="blue"${(mycolor === 'blue' ? ` checked` : ``)}> blue</label>
			<label><input type="radio" name="mycolor" value="red"${(mycolor === 'red' ? ` checked` : ``)}> red</label>
		</div>`;
	}
}

export default MyForm;
