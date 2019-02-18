import WidgetBase from '@dojo/framework/widget-core/WidgetBase';
import { DNode } from '@dojo/framework/widget-core/interfaces';
import { v } from '@dojo/framework/widget-core/d';
import * as css from '../styles/loginMenu.m.css';

export interface LoginMenuProps {
	userName: string;
	userRole: string;

	onLogout?(): void;
}

export default class LoginMenu extends WidgetBase<LoginMenuProps> {

	protected render(): DNode | DNode[] {
		const {userName, userRole} = this.properties;
		const onLogout = this.properties.onLogout
			? this.properties.onLogout
			: () => {
				fetch('/oauth/logout').then(
					() => {
						window.location.href = '/login';
					}
				);
			};
		return v('div',
			{
				classes: 'd-inline-flex flex-row align-items-center'
			},
			[
				v('div',
					{
						classes: 'd-flex flex-grow-1'
					},
					[
						v('div',
							{
								classes: `text-white ${css.userName}`
							},
							[
								`User: ${userName}`
							]
						)
					]
				),
				v('div',
					{
						classes: 'd-flex flex-grow-1'
					},
					[
						v('div',
							{classes: `text-white ${css.userRole}`},
							[
								`Role: ${userRole}`
							]
						)
					]
				),
				v('div',
					{
						classes: 'd-flex flex-grow-1'
					},
					[
						v('btn', {
								classes: 'btn btn-sm btn-block btn-secondary',
								onclick: () => {
									onLogout();
								}
							},
							[
								'Logout'
							]
						)
					]
				)
			]);
	}
}
