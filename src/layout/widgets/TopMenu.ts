import WidgetBase from '@dojo/framework/widget-core/WidgetBase';
import { v } from '@dojo/framework/widget-core/d';
import { VNode, DNode } from '@dojo/framework/widget-core/interfaces';
import * as css from '../../styles/topMenu.m.css';

export interface TopMenuItem {
	label: string;
	url: string;
}

export interface TopMenuProps {
	menuConfig: TopMenuItem[];
}

export default class TopMenu extends WidgetBase<TopMenuProps> {
	protected render(): DNode {
		return v('span', this.getMenuNodes(this.properties.menuConfig));
	}

	protected getMenuNodes(config: { label: string, url: string }[]): VNode[] {
		const resultNodes: VNode[] = [];
		config.forEach((menuItem) => {
			resultNodes.push(v('a', {href: menuItem.url, classes: css.topMenuItem}, [menuItem.label]));
		});
		return resultNodes;
	}
}
