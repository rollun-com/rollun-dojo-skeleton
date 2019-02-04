import WidgetBase from '@dojo/framework/widget-core/WidgetBase';
import { v, w } from '@dojo/framework/widget-core/d';
import TopMenu, { TopMenuItem } from '../menus/TopMenu';
import LeftMenu, { LeftMenuItem } from '../menus/LeftMenu';
import * as css from '../styles/layout.m.css';
import { DNode, VNode } from '@dojo/framework/widget-core/interfaces';
import LoginMenu from './LoginMenu';

export interface LayoutProps {
	leftMenuConfig: LeftMenuItem[];
	topMenuConfig: TopMenuItem[];
	loginMenuConfig: {
		userName: string;
		userRole: string;
		onLogout(): void;
	};
	contentNode: DNode;
}

export default class Layout extends WidgetBase<LayoutProps> {
	protected render(): VNode {
		const {topMenuConfig, leftMenuConfig, contentNode} = this.properties;
		const {userName, userRole, onLogout} = this.properties.loginMenuConfig;
		return v('div',
			{classes: css.root},
			[
				v('nav',
					{
						id: 'navbar', classes: `navbar navbar-dark bg-dark mb-0 shadow ${css.navBar}`
					}, [
						v('a', {classes: 'navbar-brand', href: '/'}, [
							v('img', {id: 'navLogo', class: css.navLogo, src: 'http://rollun.com/assets/img/logo.jpg'})
						]),
						w(TopMenu, {menuConfig: topMenuConfig}),
						v('div', {classes: 'navbar-form navbar-right'}, [
							w(LoginMenu, {userName, userRole, onLogout})
						])
					]
				),
				v('div',
					{
						id: 'outerContentContainer',
						classes: `${css.outerContentContainer} container-fluid shadow-sm pt-2 px-0`
					},
					[
						v('div', {id: 'contentNode-container', classes: css.contentContainer}, [
							v('div', {classes: 'row px-1 m-0'}, [
								v('div', {classes: `col-md-2 ${css.menuColumn}`, id: 'menuColumn'}, [
									w(LeftMenu, {menuConfig: leftMenuConfig})
								]),
								v('div', {classes: `col-md-10 pr-5 ${css.contentColumn}`, id: 'contentColumn'}, [
									contentNode
								])
							])
						])
					]
				),
				v('nav', {classes: `navbar navbar-light flex-reverse-row bg-light ${css.footer}`}, [
					v('div', {classes: 'd-flex'}, [
						`Rollun LC © 2014-${(new Date()).getFullYear()}`
					])
				])
			]
		);
	}
}
