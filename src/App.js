import React, { Fragment, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import DefaultLayout from "./layouts/DefaultLayout";
import { publicRoutes } from "./Routes";

function App() {

  useEffect(() => {
    document.title = 'CoolShop'
  }, [])

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
                  <ScrollToTop/>
                  <Page />
                </Layout>
              }
            />
          );
        })}
      </Routes>
    </BrowserRouter>

  );
}

export default App;
