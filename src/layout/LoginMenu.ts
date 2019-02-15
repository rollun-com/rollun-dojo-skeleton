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
		return v('div', {classes: css.root}, [
			v('div',
				{
					styles: {
						display: 'flex',
						flex: '1'
					}
				},
				[
					v('div',
						{
							classes: `${css.userName}`
						},
						[
							`User: ${userName}`
						]
					)
				]
			),
			v('div',
				{
					styles: {
						display: 'flex',
						flex: '1'
					}
				},
				[
					v('div',
						{classes: css.userRole},
						[
							`Role: ${userRole}`
						]
					)
				]
			),
			v('div',
				{
					styles: {
						display: 'flex',
						flex: '1'
					}
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
