/**
 * App.js
 */
import Component from './Component';
import MyForm from './components/MyForm';
import MyCube from './components/MyCube';
import MyHistory from './components/MyHistory';

class App extends Component {
	constructor() {
		super();
		
		this.state = {
			myvalue: '',
			mycount: 5,
			mycolor: 'green',
			history: [],
		};
		this.container = document.getElementById('main');
		this.myForm = new MyForm({
			onSubmit: this.onSubmit.bind(this),
			onChangeMycount: this.onChangeMycount.bind(this),
			onChangeMycolor: this.onChangeMycolor.bind(this),
		});
		this.myCube = new MyCube({
			onDelFromHistory: this.onDelFromHistory.bind(this),
		});
		this.myHistory = new MyHistory({
			history: this.state.history,
			onHistoryClick: this.onHistoryClick.bind(this),
		});
	}

	onSubmit(myvalue) {
		this.updateState({ myvalue });
	}

	onChangeMycount(mycount) {
		this.updateState({ mycount });
	}

	onChangeMycolor(mycolor) {
		this.updateState({ mycolor });
	}

	onDelFromHistory(myvalue) {
		const { history } = this.state;
		
		const pos = history.indexOf(myvalue);
		if (pos >= 0) history.splice(pos, 1);

		this.updateState({ history });
	}

	onHistoryClick(myvalue) {
		this.updateState({ myvalue });
	}

	onAfterUpdate(nextState) {
		if (nextState.myvalue && nextState.myvalue) 
		{
			if (this.state.history.indexOf(nextState.myvalue) < 0) this.state.history.unshift(nextState.myvalue);
		}
	}

	render() {
		const { myvalue } = this.state;
		const { mycount } = this.state;
		const { mycolor } = this.state;
		const { history } = this.state;
		
		return [
			this.myForm.update({ myvalue, mycount, mycolor }),
			this.myCube.update({ myvalue, mycount, mycolor }),
			this.myHistory.update({ history }),
		];
	}
}

export default App;
