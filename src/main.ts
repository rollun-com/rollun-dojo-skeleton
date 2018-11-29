import renderer from '@dojo/framework/widget-core/vdom';
import {w} from '@dojo/framework/widget-core/d';
import Layout from './widgets/skeleton/Layout';
//import dojoTheme from '@dojo/themes/dojo';
import defaultTheme from './themes/default-theme/theme';
import Registry from "@dojo/framework/widget-core/Registry";
import {registerThemeInjector} from '@dojo/framework/widget-core/mixins/Themed';

const registry = new Registry();
const themeContext = registerThemeInjector(defaultTheme, registry);

registry.defineInjector('theme-context', () => {
    return () => ({
        get: () => themeContext,
        set: (theme: string) => themeContext.set(theme)
    });
});

const r = renderer(
    () => w(Layout, {registry})
);

r.mount({domNode: document.getElementById('app-mount') as HTMLElement, registry});
