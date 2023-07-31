// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if(req.method === 'POST'){
    try{
      const data = req.body
      const response = await axios.get(`https://api.nexon.co.kr/fifaonline4/v1.0/users?nickname=${data.name}`,{
      headers:{
        Authorization: process.env.FIFAONLINE_API_HEADER_KEY
      }
    })
    console.log(response.data)
    res.status(200).json(response.data)
    }
    catch(error){
      console.log(error)
    }
  }
  
}
