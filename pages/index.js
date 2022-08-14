/* eslint-disable react/jsx-no-undef */
import { Helmet } from "react-helmet";
import Footer from "../components/footer/footer";
import Header from "../components/header/header";
import Layout from "../components/layouts/layouts";

function HomePage() {
  return (
    <>
      <Helmet>
      <meta charset="utf-8" name="viewport" content="width=device-width, initial-scale=1" />
        <title>NextJs Courses</title>
        <link rel="icon" type="image/x-icon" href="favicon.ico" />
      </Helmet>

      <Header />
      <Layout />
      <Footer/>
    </>
  );
}

export default HomePage;
