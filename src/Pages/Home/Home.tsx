import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import Carousel from "../../Components/Carousel";
import CarouselItem from "../../Components/CarouselItem";
import TableListMovie from "../../Components/TableListMovie";
import { getMovieBanner } from "../../slices/movies";
import { RootState } from "../../store";
const Home = () => {
  return (
    <>
    <Carousel/>
    <CarouselItem/>
    <TableListMovie/>
    </>
  )
}

export default Home