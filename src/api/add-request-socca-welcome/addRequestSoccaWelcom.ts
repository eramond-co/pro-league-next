import apiUrls from "@/constants/apiUrls";
import AxiosServer from "@/tools/axios/axiosServer";

interface IData {
  name: string;
  email: string;
  mobile: string;
  acceptme: number;
}

const addRequestSoccaWelcom = async (data?: IData) => {
  const res = await AxiosServer.post(apiUrls.addRequest_welcome_event, data);

  return res.data;
};

export default addRequestSoccaWelcom;
