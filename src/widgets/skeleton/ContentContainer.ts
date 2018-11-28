import WidgetBase from '@dojo/framework/widget-core/WidgetBase';
import {v} from '@dojo/framework/widget-core/d';

export default class ContentContainer extends WidgetBase {
    protected render() {
        return v('div', ['Hello, World!', 'I am content!'])
    }
}
