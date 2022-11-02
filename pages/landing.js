import React, { useEffect, useState } from 'react'
import AppDrawer from '../components/AppDrawer';
import { Grid } from '@mui/material';
import Converge from '../components/Converge';
import Services from '../components/Services';
import Browse from '../components/Browse';
import CreateAccount from '../components/CreateAccount';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
const landing = () => {

  const [scroll, setScroll] = useState(0);
  const [width, setWidth] = useState("")

  useEffect(() => {
    window.addEventListener("resize", updateWidthAndHeight);
    return () => window.removeEventListener("resize", updateWidthAndHeight);
  }, []);
  const updateWidthAndHeight = () => {
    console.log(window.innerWidth)
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    document.addEventListener("scroll", () => {
      if (window.pageYoffset > 50) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    });
  }, []);
  return (
    <>

      {width < "670" ? <AppDrawer /> : <Navbar scroll={scroll} />}
      <Grid container direction={"column"}
        alignItems="center" spacing={2}>
        <Grid item lg={12} xs={12}>
          <Converge />
        </Grid>
        <Grid item lg={12} xs={12}>
          <Services />
        </Grid>
        <Grid item lg={12} xs={12}>
          <CreateAccount /></Grid>
        <Grid item lg={12} xs={12}>
          <Browse />
        </Grid>
        <Grid item lg={12} xs={12}>
          <Footer />
        </Grid>
      </Grid>
    </>
  )
}

export default landing;