import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { createListSysTem } from "../slices/listSysTemCinema";
import { RootState } from "../store"


const ListSysTem = () => {
    // const {data, isLoading, error} = useSelector(
    //     (state:RootState) =>state.createListSysTem
    // );
    const dispatch = useDispatch<any>();
    useEffect(() => {
      dispatch(createListSysTem());
    }, []);
  return (
    <div>ListSysTem</div>
  )
}

export default ListSysTem