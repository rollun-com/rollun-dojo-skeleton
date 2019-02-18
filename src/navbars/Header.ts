import WidgetBase from '@dojo/framework/widget-core/WidgetBase';
import { TopMenuItem } from '../menus/TopMenu';
import { DNode } from '@dojo/framework/widget-core/interfaces';
import { v, w } from '@dojo/framework/widget-core/d';
import TopMenu from '../menus/TopMenu';
import LoginMenu from '../menus/LoginMenu';

export interface HeaderProps {
	topMenuConfig: TopMenuItem[];
	loginMenuConfig: {
		userName: string;
		userRole: string;
		onLogout(): void;
	};
}

export default class Header extends WidgetBase<HeaderProps> {

	protected render(): DNode {
		const {topMenuConfig} = this.properties;
		const {userName, userRole, onLogout} = this.properties.loginMenuConfig;
		return v('nav',
			{
				id: 'navbar',
				classes: `navbar navbar-dark bg-dark mb-0 shadow position-relative`,
				styles: {
					'zIndex': '20'
				}
			}, [
				v('a', {classes: 'navbar-brand', href: '/'}, [
					v('img', {
						id: 'navLogo',
						styles: {
							maxHeight: '1.75rem'
						},
						src: 'http://rollun.com/assets/img/logo.jpg'
					})
				]),
				w(TopMenu, {menuConfig: topMenuConfig}),
				v('div',
					{classes: 'navbar-form navbar-right'},
					[
					w(LoginMenu, {userName, userRole, onLogout})
				])
			]
		);
	}
}
