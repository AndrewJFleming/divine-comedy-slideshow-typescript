import { FC } from "react";
import { MenuItem, FormControl, OutlinedInput, FormLabel } from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";

interface Props {
  allBooks: string[];
  selectedBook: string;
  handleBookSelect: (event: SelectChangeEvent) => void;
}

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      //   width: 250,
    },
  },
};

export const BookSelector: FC<Props> = ({
  allBooks,
  selectedBook,
  handleBookSelect,
}) => {
  return (
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">Select Book</FormLabel>
      <Select
        id="book-selector"
        displayEmpty
        value={selectedBook}
        onChange={handleBookSelect}
        input={<OutlinedInput />}
        MenuProps={MenuProps}
        inputProps={{ "aria-label": "Without label" }}
      >
        {allBooks.map((book: string) => (
          <MenuItem key={book} value={book}>
            {book}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
