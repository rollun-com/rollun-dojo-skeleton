import WidgetBase from '@dojo/framework/widget-core/WidgetBase';
import {v, w} from "@dojo/framework/widget-core/d";
import TopMenu from "./TopMenu";
import LeftMenu, {MenuItemConfig} from "./LeftMenu";
import ContentContainer from "./ContentContainer";
import * as css from '../../styles/skeleton/layout.m.css';

export default class Layout extends WidgetBase {
    protected render() {
        const menuConfig: MenuItemConfig[] = [
            {
                label: 'A page',
                url: '#',
            },
            {
                label: 'A page',
                url: '#',
            },
            {
                label: 'Item with subitems',
                subMenus: [
                    {
                        label: 'A page',
                        url: '#',
                    },
                    {
                        label: 'A page',
                        url: '#',
                    },
                ]
            },
        ];
        const topMenuConfig = [
            {
                label: 'A page',
                url: '#'
            },
            {
                label: 'Another page',
                url: '#'
            },
            {
                label: 'Another page',
                url: '#'
            },
            {
                label: 'And another one',
                url: '#'
            },
        ];
        return v('div', {classes: css.heightAndWidth100}, [
                v('div',
                    {
                        id: 'navbar', classes: 'navbar navbar-dark bg-dark mb-0'
                    }, [
                        v('a', {classes: 'navbar-brand', href: '/'}, [
                            v('img', {id: 'navLogo', class: css.navLogo, src: 'http://rollun.com/assets/img/logo.jpg'})
                        ]),
                        w(TopMenu, {menuConfig: topMenuConfig}),
                        v('div', {classes: 'navbar-form navbar-right'})
                    ]
                ),
                v('div',
                    {id: 'outerContentContainer', classes: `container-fluid ${css.outerContentContainer}`},
                    [
                        v('div', {id: 'content-container', classes: css.contentContainer}, [
                            v('div', {classes: 'row px-1'}, [
                                v('div', {classes: `col-md-2 ${css.menuColumn}`, id: 'menuColumn'}, [
                                    w(LeftMenu, {menuConfig: menuConfig})
                                ]),
                                v('div', {classes: `col-md-10 ${css.contentColumn}`, id: 'contentColumn'}, [
                                    w(ContentContainer, {})
                                ])
                            ])
                        ])
                    ]
                )
            ]
        );
    }
}
