import React, { FC } from "react";
import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import { SlideData } from "../../interfaces";

interface Props {
  filteredSlides: SlideData[];
  radioValue: string;
  selectedBook: string;
  handleRadio: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const SlideRadios: FC<Props> = ({
  filteredSlides,
  radioValue,
  selectedBook,
  handleRadio,
}) => {
  return (
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">
        Select Slide from {selectedBook}
      </FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        name="controlled-radio-buttons-group"
        value={radioValue}
        onChange={handleRadio}
      >
        {filteredSlides.map((filteredSlide: SlideData) => (
          <FormControlLabel
            key={filteredSlide.id}
            value={filteredSlide.id}
            control={<Radio />}
            label={filteredSlide.name}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};
