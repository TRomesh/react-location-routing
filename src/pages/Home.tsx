import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { useNavigate } from "@tanstack/react-location";

const Home = (): JSX.Element => {
  const navigate = useNavigate();

  const routeTo = () => {
    navigate({ to: "/countries", replace: true });
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={4}></Grid>
      <Grid item xs={4}>
        This Project Demonstrate the basic usage of React Location
      </Grid>
      <Grid item xs={4}></Grid>
      <Grid item xs={2}></Grid>
      <Grid item xs={8}>
        <Button onClick={routeTo}>Select Country</Button>
      </Grid>
      <Grid item xs={2}></Grid>
      <Grid item xs={12}></Grid>
    </Grid>
  );
};

export default Home;
