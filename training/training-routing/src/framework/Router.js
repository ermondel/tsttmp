/**
 * Router.js
 */
import routes from '../routes';

class Router {
	constructor() {
		this.state = {
			routes,
			currentRoute: null,
			currentComponent: null,
		};

		window.addEventListener('hashchange', this.handlerHashchange.bind(this));
	}

	updateState(nextState) {
    	this.state = Object.assign({}, this.state, nextState);
    	this.render();
  	}

	get path() {
		return window.location.hash.slice(1);
	}

	handlerHashchange(e) {
		const { routes, currentRoute } = this.state;
		const nextRoute = routes.find(({ href }) => href === this.path);
		if (nextRoute && nextRoute !== currentRoute) 
		{
			if (nextRoute.redirectTo) {
				// this.navigateTo(nextRoute.redirectTo);
				window.location.hash = nextRoute.redirectTo;
				return;
			}

			this.updateState({
				currentRoute: nextRoute,
				currentComponent: new nextRoute.component(),
			});
		}
	}

	navigateTo(url) {
		window.location.hash = url;
	}

	render() {
		const { currentComponent } = this.state;
		currentComponent.update();
	}
}

export default Router;
