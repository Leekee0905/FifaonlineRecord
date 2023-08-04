import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from '@mui/material'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { useState } from 'react'

type PropsId = {
  id: string
}

type MatchInfo = {
  accessId: string;
  defence: any;
  nickname: string;
  pass: any;
  player: any;
  shoot: any;
  shootDeatil: any;
}

type Goals = {
  home: number;
  away: number;
}

const RecordBlock = (id:PropsId) => {
  const matchId = id.id
  
  const [matchDetail, setMatchDetail] = useState<any>()
  const [matchDate, setMatchDate] = useState<string>("")
  const [homeNickname, setHomeNickname] = useState<string>('')
  const [awayNickname, setAwayNickname] = useState<string>('')
  const [playerSeason, setPlayerSeason] = useState<number>(0)
  const [goals, setGoals] = useState<Goals>({
    home: 0,
    away: 0
  })
  const [test,setTest] = useState<number>(0)
  const block = useQuery({
    queryKey: ['matchId',matchId],
    queryFn: ()=>axios.get('/api/matchDetail',{
      params:{
        matchId: matchId
      }
    }),
    onSuccess:(detail:any)=>{
      setMatchDetail(detail.data)
      setMatchDate(detail.data.matchDate)
      setHomeNickname(detail.data.matchInfo[0].nickname)
      setAwayNickname(detail.data.matchInfo[1].nickname)
      setGoals({
        home: detail.data.matchInfo[0].shoot.goalTotal,
        away: detail.data.matchInfo[1].shoot.goalTotal
      })
      setTest(detail.data.matchInfo[1].player[13].spId)
      setPlayerSeason(detail.data.matchInfo[1].player[13].spId.toString().slice(0,3))
      console.log(detail.data)
    },
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  })
  console.log(test)
  return (
    <>
      <Box>
        <Accordion>
          <AccordionSummary>
            <Typography>{matchDate}</Typography>
            <Typography>{homeNickname} {goals.home} : {goals.away} {awayNickname}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              {id.id}
            </Typography>
            <img
            src={`https://fo4.dn.nexoncdn.co.kr/live/externalAssets/common/playersActionHigh/p${test}.png`}
            alt='메시'
            loading='lazy'/>
            <img
            src={`https://ssl.nexon.com/s2/game/fo4/obt/externalAssets/season/bwc.png`}
            alt='시즌'/>
          </AccordionDetails>
        </Accordion>
      </Box>
    </>
  )
}

export default RecordBlock