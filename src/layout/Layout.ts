import WidgetBase from '@dojo/framework/widget-core/WidgetBase';
import { v, w } from '@dojo/framework/widget-core/d';
import LeftMenu, { LeftMenuItem } from '../menus/LeftMenu';
import * as css from '../styles/layout.m.css';
import { DNode, VNode } from '@dojo/framework/widget-core/interfaces';
import Header, { HeaderProps } from '../navbars/Header';
import Footer, { FooterProps } from '../navbars/Footer';

export interface LayoutProps extends HeaderProps, FooterProps {
	leftMenuConfig: LeftMenuItem[];
	contentNode: DNode;
}

export default class Layout extends WidgetBase<LayoutProps> {
	protected render(): VNode {
		const {topMenuConfig, leftMenuConfig, contentNode, loginMenuConfig} = this.properties;
		return v('div',
			{classes: `${css.root} vh-100`},
			[
				w(Header, {topMenuConfig, loginMenuConfig}),
				v('div',
					{
						id: 'outerContentContainer',
						classes: `${css.outerContentContainer} position-relative min-vh-100 bg-white container-fluid shadow-sm pt-2 px-0`
					},
					[
						v('div', {id: 'innerContentContainer', classes: 'd-flex h-100 w-100'}, [
							v('div', {classes: `row px-1 m-0 w-100 h-100`}, [
								v('div', {classes: `col-md-2`, id: 'menuColumn'}, [
									w(LeftMenu, {menuConfig: leftMenuConfig})
								]),
								v('div', {classes: `col-md-10 pr-5`, id: 'contentColumn'}, [
									contentNode
								])
							])
						])
					]
				),
				w(Footer, {})
			]
		);
	}
}
