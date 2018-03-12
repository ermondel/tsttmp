/**
 * ads.component.js
 */
import Component from '../component';

class Ads extends Component {
	constructor(props) {
		super(props);

		this.container = document.createElement('div');
		this.container.id = 'search-results';
	}

	render() {
		const { query } = this.props;
		const { depth } = this.props;
		const random = Math.floor(Math.random() * 10) + parseInt(depth);
		
		return query ? '<ul>' + `<li><a href="http://${query}.com/">${query} lorem ipsum.</a></li>`.repeat(random) + '</ul>' : '';
	}
}

export default Ads;
