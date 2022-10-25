import React, { Fragment, useEffect, useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import useProfile from "./hooks/useProfile";
import DefaultLayout from "./layouts/DefaultLayout";
import { publicRoutes, privateRoutes } from "./Routes";
import { AppContext } from './Providers/AppContext'

function App() {
  const { token, userLogin } = useContext(AppContext)

  useEffect(() => {
    document.title = 'CoolShop'
  }, [])

  useProfile()

  return (
    <BrowserRouter>
      <Routes>
        {publicRoutes.map((route, index) => {
          const Page = route.component;
          let Layout = DefaultLayout;
          if (route.layout === null) {
            Layout = Fragment;
          } else {
            Layout = route.layout;
          }
          return (
            <Route
              key={index}
              path={route.path}
              element={
                <Layout>
                  <ScrollToTop />
                  <Page />
                </Layout>
              }
            />
          );
        })}
        {(token !== '' && userLogin) ?
          privateRoutes.map((route, index) => {
            const Page = route.component;
            let Layout = DefaultLayout;
            if (route.layout === null) {
              Layout = Fragment;
            } else {
              Layout = route.layout;
            }
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <ScrollToTop />
                    <Page />
                  </Layout>
                }
              />
            )
          }) : ''}
      </Routes>
    </BrowserRouter>

  );
}

export default App;
