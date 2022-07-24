import { currentUser } from "../interface/auth";
import axiosClient from "./axiosClient";


interface LoginValues{
    taiKhoan:string;
    matKhau:string;
}
const authAPI = {
    login:(values:LoginValues)=>{
        return axiosClient.post<unknown, currentUser>("QuanLyNguoiDung/DangNhap",values)
    }
}

export default authAPI