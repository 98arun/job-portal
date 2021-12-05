import axios from "axios"; //Network Calling Using axios
export const GetRequest = async (url: string) => {
  try {
    const apiResponse = await axios.get(url);
    // console.log({ apiResponse });
    const response = apiResponse.status === 200 ? apiResponse.data : {};
    return response;
  } catch (err) {
    return;
  }
};
