import RecordBlock from '@/component/RecordBlock';
import { useRouter } from 'next/router'
import { useEffect } from 'react'
const Record = () => {

  const router = useRouter();
  console.log(router.query.name)
  useEffect(() => {
    if(!router.isReady) return;
    console.log(router.query,'🙆‍♀️ 콘솔에 쿼리 찍힘!')
  }, [router.isReady])
  return(
    <>
      hi
      <RecordBlock/>
    </>
  )
}

export default Record