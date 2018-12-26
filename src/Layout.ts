import WidgetBase from '@dojo/framework/widget-core/WidgetBase';
import { v, w } from '@dojo/framework/widget-core/d';
import TopMenu, { TopMenuItem } from './widgets/TopMenu';
import LeftMenu, { LeftMenuItem } from './widgets/LeftMenu';
import * as css from './styles/layout.m.css';
import { DNode, VNode } from '@dojo/framework/widget-core/interfaces';

export interface LayoutProps {
	leftMenuConfig: LeftMenuItem[];
	topMenuConfig: TopMenuItem[];
	contentNode: DNode;
}

export default class Layout extends WidgetBase<LayoutProps> {
	protected render(): VNode {
		const {topMenuConfig, leftMenuConfig, contentNode} = this.properties;
		return v('div', {classes: css.heightAndWidth100}, [
				v('div',
					{
						id: 'navbar', classes: 'navbar navbar-dark bg-dark mb-0'
					}, [
						v('a', {classes: 'navbar-brand', href: '/'}, [
							v('img', {id: 'navLogo', class: css.navLogo, src: 'http://rollun.com/assets/img/logo.jpg'})
						]),
						w(TopMenu, {menuConfig: topMenuConfig}),
						v('div', {classes: 'navbar-form navbar-right'})
					]
				),
				v('div',
					{id: 'outerContentContainer', classes: `container-fluid ${css.outerContentContainer}`},
					[
						v('div', {id: 'contentNode-container', classes: css.contentContainer}, [
							v('div', {classes: 'row px-1'}, [
								v('div', {classes: `col-md-2 ${css.menuColumn}`, id: 'menuColumn'}, [
									w(LeftMenu, {menuConfig: leftMenuConfig})
								]),
								v('div', {classes: `col-md-10 ${css.contentColumn}`, id: 'contentColumn'}, [
									contentNode
								])
							])
						])
					]
				)
			]
		);
	}
}
