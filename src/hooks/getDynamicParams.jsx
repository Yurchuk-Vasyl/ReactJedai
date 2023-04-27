import { useParams } from 'react-router-dom';

export const GetDynamicParams = (params) => {
  return useParams()[params];
};
