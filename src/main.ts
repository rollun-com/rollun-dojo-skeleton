import renderer from '@dojo/framework/widget-core/vdom';
import {w} from '@dojo/framework/widget-core/d';
import Layout from './widgets/skeleton/Layout';

const r = renderer(
    () => w(Layout, {})
);
r.mount({domNode: document.getElementById('app-mount') as HTMLElement});
