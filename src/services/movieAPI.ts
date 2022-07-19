import { SysTemCinema } from './../interface/getSystemCinema';
import { Movie } from "../interface/movie";
import axiosClient from "./axiosClient"


const movieAPI ={
    getMovieBanner: ()=>{
        return axiosClient.get<unknown, Movie[]>("QuanLyPhim/LayDanhSachBanner");
    },
    getMovieList:()=>{
        // return axiosClient.get("QuanLyPhim/LayDanhSachPhim");
        return axiosClient.get<unknown, Movie[]>("QuanLyPhim/LayDanhSachPhimPhanTrang");
    },
    getInfoSystem:()=>{
        return  axiosClient.get<unknown,SysTemCinema[] >("QuanLyRap/LayThongTinHeThongRap");
    }
    
}

export default movieAPI