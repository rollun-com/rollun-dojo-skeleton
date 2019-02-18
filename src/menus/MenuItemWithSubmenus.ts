import { w } from '@dojo/framework/widget-core/d';
import TitlePane from '@dojo/widgets/title-pane';
import WidgetBase from '@dojo/framework/widget-core/WidgetBase';
import { VNode, DNode } from '@dojo/framework/widget-core/interfaces';

export interface MenuItemWithSubmenusProps {
	label: string;
	content: VNode[];
}

export default class MenuItemWithSubmenus extends WidgetBase<MenuItemWithSubmenusProps> {
	protected state = {
		open: false
	};

	protected setState(state: {}) {
		this.state = {...this.state, ...state};
		this.invalidate();
	}

	render(): DNode {
		return w(TitlePane, {
			extraClasses: {
				title: '',
				root: 'overflow-hidden',
				titleButton: 'btn btn-light btn-block dropdown-toggle m-1 position-relative'
			},
			title: this.properties.label,
			open: this.state.open,
			onRequestOpen: () => this.setState({open: true}),
			onRequestClose: () => this.setState({open: false})
		}, this.properties.content);
	}
}
