import { createHeadManager } from '@inertiajs/core';
import { config } from '@vue/test-utils';
import ResizeObserver from 'resize-observer-polyfill';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

global.ResizeObserver = ResizeObserver;

const vuetify = createVuetify({
    components,
    directives,
});

const mockedHeadManager = createHeadManager(
    false,
    () => '',
    () => '',
);

config.global.plugins = [vuetify];
config.global.mocks = {
    $page: {
        props: {
            auth: {
                user: { name: 'John Doe' },
            },
        },
    },
    $headManager: mockedHeadManager,
};
