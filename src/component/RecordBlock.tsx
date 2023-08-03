import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from '@mui/material'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { useState } from 'react'

const RecordBlock = (data:any) => {
  const matchId = data.data
  const [matchDetail, setMatchDetail] = useState<any>([])
  const block = useQuery({
    queryKey: ['matchId',matchId],
    queryFn: ()=>axios.get('/api/matchDetail',{
      params:{
        matchId: matchId
      }
    }),
    onSuccess:(detail:any)=>{
      setMatchDetail(detail.data)
      console.log(detail.data)
    },
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  })
  return (
    <>
      <Box>
        <Accordion>
          <AccordionSummary>
            <Typography>hi</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              {data.data}
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </>
  )
}

export default RecordBlock