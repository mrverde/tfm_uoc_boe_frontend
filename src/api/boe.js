import axios from "axios";

async function getBoe(date) {
  const dateParam = date ? `?date=${date}` : "";
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_BACKEND_ADDRESS}/api/v1/boe/summary${dateParam}`
    );
    return response;
  } catch (error) {
    console.error(error);
  }
}

async function generateBoeResume(xml) {
  try {
    const response = await axios.get(
      `${
        import.meta.env.VITE_BACKEND_ADDRESS
      }/api/v1/chatgpt/xmlboeresume?boe_xml_address=${xml}`
    );
    return response;
  } catch (error) {
    console.error(error);
  }
}

export { getBoe, generateBoeResume };
