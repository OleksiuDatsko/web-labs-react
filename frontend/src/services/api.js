import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:5000/hotels/',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getAllHotels = async () => {
    try {
      const response = await axiosInstance.get('');
      return response.data;
    } catch (error) {
      console.error('HTTP ERROR:', error);
    }
  };
  
  export const getHotel = async (id, setState, setIsLoading) => {
    try {
      const response = await axiosInstance.get(`${id}/`);
      setState(response.data);
      setIsLoading(false);
      return response.data;
    } catch (error) {
      console.error('HTTP ERROR:', error);
    }
  };
  
  export const postHotel = async (body) => {
    try {
      const response = await axiosInstance.post('', body);
      return response.data;
    } catch (error) {
      console.error('HTTP ERROR:', error);
    }
  };
  
  export const delHotel = async (id) => {
    try {
      const response = await axiosInstance.delete(`${id}/`);
      return response.data;
    } catch (error) {
      console.error('HTTP ERROR:', error);
    }
  };
  
  export const editHotel = async (id, body) => {
    try {
      await axiosInstance.put(`${id}/`, body);
      return getAllHotels();
    } catch (error) {
      console.error('HTTP ERROR:', error);
    }
  };
  