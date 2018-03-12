/**
 * app.js
 */
import Component        from './component';
import QueryComponent   from './query/query.component';
import AdsComponent     from './ads/ads.component';
import HistoryComponent from './history/history.component';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			query: '',
			depth: 20,
			all: false,
			itc: false,
			slando: true,
			freemarket: false,
			history: [],
		};

		this.container = this.props.container;

		this.queryComponent = new QueryComponent({
			onСheckSite: this.onСheckSite.bind(this),
			onChangeDepth: this.onChangeDepth.bind(this),
			onSubmitQuery: this.onSubmitQuery.bind(this),
		});
		this.adsComponent = new AdsComponent({});
		this.historyComponent = new HistoryComponent({
			onHistoryClick: this.onHistoryClick.bind(this),
			onDelFromHistory: this.onDelFromHistory.bind(this),
		});
	}

	onSubmitQuery(query) {
		// code ... code
		this.updateState({ query });
	}

	onСheckSite(nextState) {
		this.updateState(nextState);
	}

	onChangeDepth(depth) {
		this.updateState({ depth });
	}

	onHistoryClick(query) {
		this.onSubmitQuery(query);
	}

	onAfterUpdate(nextState) {
		if (nextState.query && nextState.query.length > 0 ) 
		{
			this.state.history.indexOf(nextState.query) < 0 && this.state.history.unshift(nextState.query);
		}
	}

	onDelFromHistory(query) {
		const { history } = this.state;
		if (history.length > 0) {
			const pos = history.indexOf(query);
			pos >= 0 && history.splice(pos, 1) && this.updateState({ history });
		}
	}

	render() {
		const { slando, itc, freemarket, all, depth, query, history } = this.state;

		return [
			this.queryComponent.update({ slando, itc, freemarket, all, depth, query }),
			this.adsComponent.update({ depth, query }),
			this.historyComponent.update({ history }),
		];
	}
}

export default App;
