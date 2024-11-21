
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000', 
  withCredentials: true, 
  
});

const refreshtoken = async () => {
  try {
    
    const response = await api.post("/refreshtoken");
    console.log("Token refreshed successfully");
    return response.data.accessToken; 
  } catch (error) {
    console.error("Error refreshing token:", error);
    throw error; 
  }
};


api.interceptors.response.use(
  (response) => response, 
  async (error) => {
    const originalRequest = error.config;

    // const refretokens = Cookies.get("refreshToken")
    // const adminrefresh = Cookies.get("adminrefreshToken")
    // if(!refretokens || !adminrefresh){
    //   alert("login plese")
    //   window.location.href = "/login";
    //   console.log("refretokens",refretokens)
    // }
    

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true; 

      try {
        await refreshtoken(); 
        return api(originalRequest);
      } catch (refreshError) {
        console.error("Token refresh failed, redirecting to login:", refreshError);
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
    }
  );



export default api;
