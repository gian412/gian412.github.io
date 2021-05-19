import { AppProps } from 'next/app';
// import {AppProps} from 'next/dist/next-server/lib/router/router';
import '../styles/global.css';

const App = ({ Component, pageProps }: AppProps) => <Component { ...pageProps } />;

export default App;
