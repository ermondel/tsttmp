/**
 * Component.js
 */
class Component {
	constructor(props) {
		this.state = {};
		this.props = props || {};
		this.container = null;
	}

	updateState(nextState) {
		this.state = Object.assign({}, this.state, nextState);
		this.onAfterUpdate(nextState);
		return this.display();
	}

	update(nextProps) {
		this.props = Object.assign({}, this.props, nextProps);
		return this.display();
	}

	display() {
		const children = this.render();

		this.container.innerHTML = '';

		if (typeof children === 'string') {
      		this.container.innerHTML = children;
    	} else if (Array.isArray(children)) {
    		for (let child of children) if (child) this.container.appendChild(child);
    	} else {
      		this.container.appendChild(children);
    	}

		return this.container;
	}

	//
	render() {}

	onAfterUpdate() {}
}

export default Component;
