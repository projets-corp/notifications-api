import { CssBaseline, ThemeProvider } from '@mui/material';
import { IntlProvider } from 'react-intl';
import { useSelector } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import messages from './intl/messages';
import router from './routes';
import getTheme from './theme';

function App() {
    const mode = useSelector((state) => state.theme.mode);
    const locale = useSelector((state) => state.intl.locale);
    const theme = getTheme(mode);
    return (
        <IntlProvider
            messages={messages[locale]}
            locale={locale}
            defaultLocale={locale}
        >
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <RouterProvider router={router} />
            </ThemeProvider>
        </IntlProvider>
    );
}

export default App;
