import { useState, SyntheticEvent } from "react";
import { useMatch } from "@tanstack/react-location";
import Select from "../components/form/Select";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Card from "../components/card/Card";
import { Country, CountryGenerics } from "../global.types";

type state = {
  selected: Country[];
};

const initState: state = {
  selected: [],
};

const Countries = (): JSX.Element => {
  const [values, setValues] = useState(initState);

  const onChange = (event: SyntheticEvent<Element, Event>, value: any[]) => {
    setValues((state) => ({ ...state, selected: value }));
  };

  const clear = () => {
    setValues(initState);
  };

  const { data } = useMatch<CountryGenerics>();

  return (
    <Grid container spacing={2}>
      <Grid item xs={2}></Grid>
      <Grid item xs={8}>
        <Select
          data={data?.countries!}
          onChange={onChange}
          value={values?.selected}
        ></Select>
      </Grid>
      <Grid item xs={2}></Grid>
      <Grid item xs={2}></Grid>
      <Grid item xs={8}>
        <Button onChange={clear}>Clear</Button>
      </Grid>
      <Grid item xs={2}></Grid>
      <Grid item xs={12}></Grid>
      <Grid item xs={2}></Grid>
      <Grid item xs={8}>
        <Grid container spacing={4}>
          {values?.selected.map(
            ({ cca2, name: { official }, population, borders }: Country) => {
              return (
                <Grid item key={cca2} xs={12}>
                  <Card
                    code={cca2}
                    official={official}
                    population={population}
                    borders={borders}
                  />
                </Grid>
              );
            }
          )}
        </Grid>
      </Grid>
      <Grid item xs={2}></Grid>
    </Grid>
  );
};

export default Countries;
