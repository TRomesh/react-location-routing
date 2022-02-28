import React from "react";
import AppBar from "@mui/material/AppBar";
import Grid from "@mui/material/Grid";
import Toolbar from "@mui/material/Toolbar";
import { Link } from "@tanstack/react-location";

const getActiveProps = () => {
  return {
    style: {
      fontWeight: "bold",
      color: "white",
      textDecoration: "none",
    },
  };
};

const Navigation = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {
  return (
    <Grid container spacing={4}>
      <Grid item xs={12}>
        <AppBar position="static">
          <Toolbar>
            <Grid container spacing={1}>
              <Grid item xs={1}>
                <Link
                  to="/"
                  getActiveProps={getActiveProps}
                  activeOptions={{ exact: true }}
                >
                  Home
                </Link>
              </Grid>
              <Grid item xs={1}>
                <Link to="countries" getActiveProps={getActiveProps}>
                  Countries
                </Link>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </Grid>
      <Grid item xs={12} />
      <Grid item xs={12}>
        {children}
      </Grid>
    </Grid>
  );
};

export default Navigation;
