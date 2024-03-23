import { ReduxProvider } from "../redux/ReduxProvider";
import styles from "../styles/style.css";


const App = ({ Component, pageProps }) => {
   return (
      <>
        <ReduxProvider>
         <Component {...pageProps} />
         </ReduxProvider>
      </>
   )


}

export default App