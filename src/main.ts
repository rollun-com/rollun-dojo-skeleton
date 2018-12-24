import renderer from '@dojo/framework/widget-core/vdom';
import {v, w} from '@dojo/framework/widget-core/d';
import Layout from './skeleton/Layout';
import {LeftMenuItem} from './skeleton/LeftMenu';
import {TopMenuItem} from './skeleton/TopMenu';

const leftMenuConfig: LeftMenuItem[] = [
    {
        label: 'Page 0',
        url: '#',
    },
    {
        label: 'Page 1',
        subMenus: [
            {
                label: 'Subpage',
                url: '#'
            },
            {
                label: 'Subpage 2',
                url: '#'
            },
        ]
    },
    {
        label: 'Page 2',
        url: '#',
    }
];

const topMenuConfig: TopMenuItem[] = [
    {
        label: 'Page 12124',
        url: '#'
    },
    {
        label: 'Page 124',
        url: '#'
    },
];

const contentNode = v('div', {clases: 'border border-primary p-2 m-2'}, ['Hello, Dojo World!']);

const r = renderer(
    () => w(Layout, {leftMenuConfig, topMenuConfig, contentNode})
);

r.mount({domNode: document.getElementById('app-mount') as HTMLElement,});
