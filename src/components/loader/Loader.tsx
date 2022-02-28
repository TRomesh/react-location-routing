import Grid from "@mui/material/Grid";
import CircularProgress from "@mui/material/CircularProgress";

const Loader = (): JSX.Element => {
  return (
    <Grid container spacing={4}>
      <Grid item xs={4}></Grid>
      <Grid item xs={4}>
        <CircularProgress></CircularProgress>
      </Grid>
      <Grid item xs={4}></Grid>
      <Grid item xs={4}></Grid>
      <Grid item xs={4}>
        <h3>Taking a long time...</h3>
      </Grid>
      <Grid item xs={4}></Grid>
    </Grid>
  );
};

export default Loader;
