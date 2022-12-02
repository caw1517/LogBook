//CSS Import
import '../styles/globals.css';
import '../styles/Index.scss'

import type { AppProps } from 'next/app'
import { store } from '../store'
import { Provider } from "react-redux";

//Font Awesome
import { config } from "@fortawesome/fontawesome-svg-core";
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

//  return <Component {...pageProps} />
export default function App({ Component, pageProps }: AppProps) {
  return (
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
  )
}
