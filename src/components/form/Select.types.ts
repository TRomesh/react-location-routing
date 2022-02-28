import { Country } from "../../global.types";

export interface selectProps {
  data: Country[];
  onChange: (event: React.SyntheticEvent<Element, Event>, value: any[]) => void;
  disabled?: boolean;
  value: any[];
}
