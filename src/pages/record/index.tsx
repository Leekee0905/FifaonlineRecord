import RecordBlock from '@/component/RecordBlock';
import { Box, Button, ButtonGroup, Typography } from '@mui/material';
import { useMutation, useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const Record = () => {
  const router = useRouter();
  const [matchType, setMatchType] = useState<number>(50)
  const [recordData, setRecordData] = useState<any>([])
  const { isLoading } = useQuery(
    {
      queryKey: ['matchInfo', matchType, router.query.accessId],
      queryFn: ()=>axios.get('/api/matchInfo',{
        params:{
          matchType: matchType,
          accessId: router.query.accessId
        }
      }),
      onSuccess:({data})=>{
        setRecordData(data)
      },
    }
  )

  
  useEffect(() => {
    if(!router.isReady) return;
    console.log(router.query,'🙆‍♀️ 콘솔에 쿼리 찍힘!')
  }, [router.isReady])
  

  const handleMatchBtn = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    let text = e.currentTarget.innerText
    switch(text){
      case '공식경기':
        setMatchType(50)
        break;
      case '친선경기':
        setMatchType(40)
        break;
      case '감독모드':
        setMatchType(52)
        break;
    }
  }

  if(isLoading){
    return(
      <Box>
        <Typography>
          Now on Loading...
        </Typography>
      </Box>
    )
  }
  return(
    <>
      <ButtonGroup variant='contained' aria-label='outlined primary button group'>
        <Button className='typeBtn' onClick={handleMatchBtn}>공식경기</Button>
        <Button className='typeBtn' onClick={handleMatchBtn}>친선경기</Button>
        <Button className='typeBtn' onClick={handleMatchBtn}>감독모드</Button>
      </ButtonGroup>
      {
        recordData.map((e: string,idx:number)=>{
          return(
            <RecordBlock key={idx} id={e}/>
          )
        })
      }
      
    </>
  )
}

export default Record