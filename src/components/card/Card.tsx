import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import InputLabel from "@mui/material/InputLabel";
import { CardProps } from "./Card.types";
import { useNavigate } from "@tanstack/react-location";

const prettyNumbers = (x: number) =>
  x ? x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : 0;

const renderCurrencies = (borders: string[]): JSX.Element[] => {
  return borders?.map((border) => {
    return <InputLabel key={border}>{border}</InputLabel>;
  });
};

const Card = ({
  code,
  official,
  population,
  borders,
}: CardProps): JSX.Element => {
  const navigate = useNavigate();
  const getCountryDetails = (code: string) => {
    navigate({ to: `${code}`, replace: true });
  };
  return (
    <Paper
      onClick={() => {
        getCountryDetails(code);
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12}></Grid>
        <Grid item xs={1}></Grid>
        <Grid item xs={10}>
          <InputLabel>Country: {official}</InputLabel>
        </Grid>
        <Grid item xs={1}></Grid>
        <Grid item xs={1}></Grid>
        <Grid item xs={10}>
          <InputLabel>Population : {prettyNumbers(population)}</InputLabel>
        </Grid>
        <Grid item xs={1}></Grid>
        <Grid item xs={1}></Grid>
        <Grid item xs={10}>
          {borders?.length > 0 ? (
            <Grid container>
              <Grid item xs={2}>
                <InputLabel>Borders : </InputLabel>
              </Grid>
              <Grid item xs={2}>
                <InputLabel>{renderCurrencies(borders)}</InputLabel>
              </Grid>
              <Grid item xs={8}></Grid>
            </Grid>
          ) : null}
        </Grid>
        <Grid item xs={1}></Grid>
        <Grid item xs={12}></Grid>
      </Grid>
    </Paper>
  );
};

export default Card;
