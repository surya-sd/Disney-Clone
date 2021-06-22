import React from "react";
import styled from "styled-components";
import { ImageSlider } from "./ImageSlider";
import { NewDisney } from "./NewDisney";
import { Originals } from "./Originals";
import { Recommends } from "./Recommends";
import { Trending } from "./Trending";
import { Viewers } from "./Viewers";
import { useDispatch, useSelector } from "react-redux";
import { db } from "../firebase";
import { setMovies } from "./../Redux/movie/movieAction";
export const Home = () => {
  const dispatch = useDispatch();
  const userDetails = useSelector((state) => state.app);
  let recommends = [];
  let newDisney = [];
  let originals = [];
  let trending = [];

  React.useEffect(() => {
    db.collection("movies").onSnapshot((snapshot) => {
      snapshot.docs.map((doc) => {
        switch (doc.data().type) {
          case "recommend":
            recommends = [...recommends, { id: doc.id, ...doc.data() }];
            break;
          case "new":
            newDisney = [...newDisney, { id: doc.id, ...doc.data() }];
            break;
          case "original":
            originals = [...originals, { id: doc.id, ...doc.data() }];
            break;
          case "trending":
            trending = [...trending, { id: doc.id, ...doc.data() }];
            break;
        }
      });

      dispatch(
        setMovies({
          recommend: recommends,
          newDisney: newDisney,
          original: originals,
          trending: trending,
        }),
      );
    });
  }, [userDetails.name]);

  return (
    <Container>
      <ImageSlider />
      <Viewers />
      <Recommends />
      <NewDisney />
      <Originals />
      <Trending />
    </Container>
  );
};

//styled-components

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);
  &:after {
    background: url("./images/home-background.png") center center / cover no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;
