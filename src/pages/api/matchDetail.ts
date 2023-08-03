import axios from 'axios'
import type { NextApiRequest, NextApiResponse } from 'next'


export default async function getMatchDetails(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if(req.method === 'GET')
  try{
    const matchId = req.query.matchId
    const response = await axios.get(`https://api.nexon.co.kr/fifaonline4/v1.0/matches/${matchId}`,
    {
      headers:{
        Authorization: process.env.FIFAONLINE_API_HEADER_KEY
      }
    })
    res.status(200).json(response.data)

  }
  catch(error){
    console.log(error)
    res.status(500).json({ error: 'An error occurred while fetching data' });
  }
  else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}