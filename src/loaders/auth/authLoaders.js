import axiosInstance from "../../instance";

export const loginLoader = async () => await axiosInstance("/auth/ping")    
