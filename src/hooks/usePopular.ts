import { useQuery } from '@tanstack/react-query'
import { request } from '../api/request'

const getPopular = async () => {
  const resp = await request('movie/popular')
  console.log(resp);

  return resp
}

export const usePopular = () => {
  // Return the entire object from useQuery
  return useQuery({ queryKey: ['popular'], queryFn: getPopular })
}
