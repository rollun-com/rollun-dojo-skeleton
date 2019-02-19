import WidgetBase from '@dojo/framework/widget-core/WidgetBase';
import { v, w } from '@dojo/framework/widget-core/d';
import { VNode, WNode } from '@dojo/framework/widget-core/interfaces';
import MenuItemWithSubmenus from './MenuItemWithSubmenus';

export interface LeftMenuProps {
	menuConfig: LeftMenuItem[];
}

export interface LeftMenuItem {
	label: string;
	url?: string;
	subMenus?: {
		label: string,
		url: string
	}[];
}

export default class LeftMenu extends WidgetBase<LeftMenuProps> {
	protected render(): VNode {
		return v('div', {id: 'lsbMenu', classes: 'pt-2'}, this.getMenuNodesFromConfig(this.properties.menuConfig));
	}

	protected getMenuNodesFromConfig(config: LeftMenuItem[]): (VNode | WNode)[] {
		const resultingNodes: (VNode | WNode)[] = [];
		config.forEach((menuItem) => {
			const {label, url, subMenus} = menuItem;
			let menuItemNode;
			if (subMenus) {
				menuItemNode = this.createItemWithSubmenus(label, subMenus);
			} else {
				if (label && url) {
					menuItemNode = this.createLeafItemNode(label, url);
				} else {
					throw new Error('Invalid config for LeftMenu');
				}
			}
			resultingNodes.push(menuItemNode);
		});
		return resultingNodes;
	}

	protected createItemWithSubmenus(label: string, subMenus: { label: string, url: string }[]) {
		const leafNodes: VNode[] = [];
		subMenus.forEach((item) => {
			leafNodes.push(this.createLeafItemNode(item.label, item.url));
		});
		return w(MenuItemWithSubmenus, {
			label: label,
			content: leafNodes
		});
	}

	protected createLeafItemNode(label: string, url: string) {
		return v('a', {href: url, classes: `p-2 text-align-center btn btn-light w-100 rounded-0`}, [label]);
	}
}
