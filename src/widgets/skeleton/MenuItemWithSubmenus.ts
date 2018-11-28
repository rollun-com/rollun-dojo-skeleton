import {w} from "@dojo/framework/widget-core/d";
import TitlePane from "@dojo/widgets/title-pane";
import WidgetBase from "@dojo/framework/widget-core/WidgetBase";
import {VNode} from "@dojo/framework/widget-core/interfaces";
import theme from '../../themes/default-theme/theme';


export interface MenuItemWithSubmenusProps {
    label: string,
    content: VNode[],
}

export default class MenuItemWithSubmenus extends WidgetBase<MenuItemWithSubmenusProps> {
    protected state = {
        open: false
    };

    protected setState(state: {}) {
        this.state = {...this.state, ...state};
        this.invalidate()
    }

    render() {
        return w(TitlePane, {
            theme,
            title: this.properties.label,
            open: this.state.open,
            onRequestOpen: () => this.setState({open: true}),
            onRequestClose: () => this.setState({open: false})
        }, this.properties.content)
    }

}
