import WidgetBase from '@dojo/framework/widget-core/WidgetBase';
import { DNode } from '@dojo/framework/widget-core/interfaces';
import { v } from '@dojo/framework/widget-core/d';

export interface FooterProps {

}

export default class Footer extends WidgetBase<FooterProps> {

	protected render(): DNode | DNode[] {
		return v('nav', {
			classes: `navbar navbar-light fixed-bottom w-100 flex-row-reverse bg-light`,
			styles: {
				'zIndex': '10'
			}
		}, [
			v('div', {classes: 'd-flex'}, [
				`Rollun LC © 2014-${(new Date()).getFullYear()}`
			])
		]);
	}
}
