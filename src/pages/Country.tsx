import { useMatch } from "@tanstack/react-location";
import { CountryGenerics } from "../global.types";

const Country = (): JSX.Element => {
  const {
    data: { country },
  } = useMatch<CountryGenerics>();
  return <div style={{ background: "red" }}>Country</div>;
};

export default Country;
