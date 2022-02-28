import { MakeGenerics } from "@tanstack/react-location";

export interface Country {
  name: {
    common: string;
    official: string;
  };
  borders: string[];
  population: number;
  cca2: string;
}

export type CountryGenerics = MakeGenerics<{
  LoaderData: {
    countries: Country[];
    country: Country;
  };
}>;
