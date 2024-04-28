import apiUrls from "@/constants/apiUrls";
import AxiosServer from "@/tools/axios/axiosServer";

interface IData {
  name: string;
  email: string;
  mobile: string;
  league: string;
  acceptme: number;
}

const addRequestProleague = async (data?: IData) => {
  const res = await AxiosServer.post(apiUrls.addRequest_proleague, data);

  return res.data;
};

export default addRequestProleague;
