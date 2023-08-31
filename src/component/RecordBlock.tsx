import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from '@mui/material'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { useState } from 'react'
import Players from './Players'

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
  const [homePlayerInfo, setHomePlayerInfo] = useState<any>([])
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
      setHomePlayerInfo(detail.data.matchInfo[0].player)
      console.log(detail.data.matchInfo[0].player)
    },
    refetchOnWindowFocus: false,
  })

  console.log(homePlayerInfo)
  return (
    <>
      <Box>
      <Accordion>
      <AccordionSummary>
        <Typography>{matchDate}</Typography>
        <Typography>
          {homeNickname} {goals.home} : {goals.away} {awayNickname}
        </Typography>
      </AccordionSummary>
      <AccordionDetails style={{ padding: 0 }}>
        <div style={{ position: 'relative', width: '100%', paddingTop: '56.25%', overflow: 'hidden' }}>
          <img
            src="/field.jpg"
            alt="경기장"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
            loading='lazy'
          />

          <div style={{ position: 'absolute', top: '10%', left: '20%', transform: 'translate(-50%, -50%)' }}>
            <img
              width='50px'
              height='50px'
              id='messi'
              src={`https://fo4.dn.nexoncdn.co.kr/live/externalAssets/common/playersActionHigh/p${0}.png`}
              alt='메시'
              loading='lazy'
              style={{borderRadius: '50%', cursor: 'pointer', backgroundColor: 'rgb(51, 154, 240)'}}
            />
          </div>
          {
            homePlayerInfo.map((e:any,idx:number)=>{
              return(
                <>
                  <Players key={idx} playerInfo={e}/>
                </>
              )
            })
          }

        </div>
        <Typography>{id.id}</Typography>
      </AccordionDetails>
    </Accordion>
      </Box>
    </>
  )
}

export default RecordBlock