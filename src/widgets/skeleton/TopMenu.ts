import WidgetBase from '@dojo/framework/widget-core/WidgetBase';
import {v} from "@dojo/framework/widget-core/d";
import {VNode} from '@dojo/framework/widget-core/interfaces';
import * as css from '../../styles/skeleton/topMenu.m.css';

export interface TopMenuProps {
     menuConfig: {label: string, url: string}[]
}

export default class TopMenu extends WidgetBase<TopMenuProps> {
    protected render() {
        return v('span', this.getMenuNodes(this.properties.menuConfig));
    }

    protected getMenuNodes(config: {label: string, url: string}[]): VNode[] {
        const resultNodes: VNode[] = [];
        config.forEach((menuItem) => {
            resultNodes.push(v('a', {href: menuItem.url, classes: css.topMenuItem}, [menuItem.label]))
        });
        return resultNodes;
    }
}
