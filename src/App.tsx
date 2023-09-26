import './App.css'
import Layout from "./components/Layout.tsx";
import Container from "react-bootstrap/Container";
import {Provider} from "react-redux";
import {store} from "./store/store.tsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import AppList from "./pages/AppList.tsx";

function App() {
  return (
    <>
        <Provider store={store}>
            <Container fluid>
                <Layout>
                    <BrowserRouter>
                        <Routes>
                            <Route path={"/"} element={AppList()}>
                            </Route>
                        </Routes>
                    </BrowserRouter>
                </Layout>
            </Container>
        </Provider>


    </>
  )
}

export default App
