// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function getMatchInfo(
  req: NextApiRequest,
  res: NextApiResponse
) {
  
  try{
    const response = await axios.get(`https://static.api.nexon.co.kr/fifaonline4/latest/matchtype.json`)
    console.log(response.data)
    res.status(200).json(response.data)
  }
  catch(error){
    console.log(error)
  }
}
