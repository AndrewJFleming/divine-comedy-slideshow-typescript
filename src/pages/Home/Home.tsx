import React, { FC, useState, useEffect, useMemo } from "react";
import { Container, Grid } from "@mui/material";
import { SelectChangeEvent } from "@mui/material/Select";
import { slides } from "../../data.js";
import { makeStyles } from "@mui/styles";
import { SlideData } from "../../interfaces.js";

//Components
import { SiteHeader } from "../../components/SiteHeader/SiteHeader";
import { BookSelector } from "../../components/BookSelector/BookSelector";
import { SlideRadios } from "../../components/SlideRadios/SlideRadios";
import { FeaturedSlide } from "../../components/FeaturedSlide/FeaturedSlide";

interface Props {}

export const Home: FC<Props> = () => {
  const [allBooks, setAllBooks] = useState<string[]>([]);
  const [selectedBook, setSelectedBook] = useState<string>("");
  const [filteredSlides, setFilteredSlides] = useState<SlideData[]>([]);
  const [radioValue, setRadioValue] = useState<string>("");
  const [selectedSlide, setSelectedSlide] = useState<SlideData | null>(null);

  //Get all books
  useEffect(() => {
    const unfilteredBooks: string[] = [];
    slides.map((slide) => unfilteredBooks.push(slide.book));
    const onlyUnique = (
      value: string,
      index: number,
      originalArray: string[]
    ) => {
      return originalArray.indexOf(value) === index;
    };
    const filteredBooks = unfilteredBooks.filter(onlyUnique);
    setAllBooks(filteredBooks);
    setSelectedBook(filteredBooks[0]);
  }, []);

  useEffect(() => {
    //Fetch array of slides matching book selection
    const matches = slides.filter((slide) => slide.book === selectedBook);
    setFilteredSlides(matches);

    //Default to first slide in array for radio and selectedSlide on book change
    setRadioValue(matches[0]?.id);
    setSelectedSlide(matches[0]);
  }, [selectedBook]);

  const handleRadio = (event: React.ChangeEvent<HTMLInputElement>) => {
    const eventTargeValue = (event.target as HTMLInputElement).value;
    setRadioValue(eventTargeValue);

    //Find complete slide obj with name matching event target value
    const match = slides.find(
      (slide: SlideData) => slide.id === eventTargeValue
    );
    setSelectedSlide(match ? match : null);
  };

  const handleBookSelect = (event: SelectChangeEvent) => {
    setSelectedBook(event.target.value);
  };

  const useStyles = makeStyles((theme: any) => {
    return {
      radiosGridItem: {
        paddingLeft: "0px!important",

        [theme.breakpoints.down("sm")]: {
          paddingLeft: "24px!important",
        },
      },
    };
  });

  const pageColor = useMemo(() => {
    console.log("change");
    if (selectedBook === "Inferno") {
      return "rgb(255, 214, 214)";
    } else if (selectedBook === "Purgatorio") {
      return "rgb(200, 255, 187)";
    } else if (selectedBook === "Paradiso") {
      return "rgb(228, 224, 255)";
    } else {
      return "white";
    }
  }, [selectedBook]);

  const classes = useStyles();

  return (
    <React.Fragment>
      <SiteHeader />
      <Container>
        <Grid
          container
          spacing={3}
          sx={{
            width: "100%",
            margin: "0px 0px 2rem 0px",
          }}
        >
          <Grid item xs={12} sm={12} md={4}>
            <Grid
              container
              spacing={3}
              sx={{
                width: "100%",
                margin: "0px",
              }}
            >
              <Grid
                item
                sm={6}
                md={12}
                sx={{
                  paddingLeft: "0px!important",
                }}
              >
                <BookSelector
                  allBooks={allBooks}
                  selectedBook={selectedBook}
                  handleBookSelect={handleBookSelect}
                />
              </Grid>
              <Grid item xs={6} md={12} className={classes.radiosGridItem}>
                <SlideRadios
                  filteredSlides={filteredSlides}
                  radioValue={radioValue}
                  selectedBook={selectedBook}
                  handleRadio={handleRadio}
                />
              </Grid>
            </Grid>
          </Grid>
          {selectedSlide && (
            <Grid
              item
              xs={12}
              sm={12}
              md={8}
              sx={{
                paddingTop: "48px!important",
              }}
            >
              <FeaturedSlide
                selectedSlide={selectedSlide}
                pageColor={pageColor}
              />
            </Grid>
          )}
        </Grid>
      </Container>
    </React.Fragment>
  );
};
