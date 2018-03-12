import FirstComponent from './components/FirstComponent';
import SecondComponent from './components/SecondComponent';
import ThirdComponent from './components/ThirdComponent';
import FourthComponent from './components/FourthComponent';

const routes = [
	{
		component: FirstComponent,
		href: '/',
	},
	{
		component: SecondComponent,
		href: '/login',
	},
	{
		component: ThirdComponent,
		href: '/list',
	},
	{
		component: FourthComponent,
		href: '/user',
	},
	/*
	{
		component: AsdComponent,
		href: '/foo',
		redirectTo: '/bar',
		onEnter: navigateTo => {
			navigateTo('/login');
		},
	},
	*/
];

export default routes;
