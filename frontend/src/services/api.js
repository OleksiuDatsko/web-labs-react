import axios from 'axios';

const BASE_URL = "http://localhost:5000";
const RESOURCE_URL = `${BASE_URL}/hotels/`;

const baseRequest = async ({ urlPath = "", method = "GET", queryParams = {}, body = null }) => {
  console.log({ urlPath, method, queryParams, body });
  try {
    const reqParams = {
      method,
      url: `${RESOURCE_URL}${urlPath}`,
      headers: {
        "Content-Type": "application/json",
      },
    };

    if (queryParams) {
      reqParams.params = queryParams;
    }

    if (body) {
      reqParams.data = JSON.stringify(body);
    }

    const response = await axios(reqParams);
    return response.data;
  } catch (error) {
    console.error("HTTP ERROR: ", error);
  }
};

export const getAllHotels = async (queryParams) => {
  const hotels = await baseRequest({ method: "GET", queryParams });
  return hotels;
};

export const getHotel = async (id) => {
  const hotel = await baseRequest({ method: "GET", urlPath: `${id}/` });
  return hotel
}
