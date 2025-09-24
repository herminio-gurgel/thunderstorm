import '@mdi/font/css/materialdesignicons.css';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

const vuetify = createVuetify({
    components,
    directives,
    theme: {
        defaultTheme: 'system',
        themes: {
            light: {
                colors: {
                    background: '#FDFDFC',
                    surface: '#FFFFFF',
                    primary: '#000000',
                },
            },
            dark: {
                colors: {
                    background: '#0A0A0A',
                    surface: '#161615',
                    primary: '#FFFFFF',
                },
            },
        },
    },
});

export default vuetify;
