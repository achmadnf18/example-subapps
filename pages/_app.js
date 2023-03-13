import { SnackbarProvider } from "notistack"

const App = ({ Component, pageProps }) => {
    return <SnackbarProvider>
        <Component {...pageProps} />
    </SnackbarProvider>
  }
  export default App
  