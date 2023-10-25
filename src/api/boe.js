import axios from "axios";

async function getBoe(date) {
  const dateParam = date ? `?date=${date}` : "";
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_BACKEND_ADDRESS}/api/v1/summaryboe${dateParam}`
    );
    return response;
  } catch (error) {
    console.error(error);
  }
}

export default getBoe;
