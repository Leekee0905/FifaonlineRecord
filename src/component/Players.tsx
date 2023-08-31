import { Box } from "@mui/material"

const Players = (playerInfo: any) => {
  console.log(playerInfo.playerInfo)
  const position = playerInfo.playerInfo.spPosition
  const playerGrade = playerInfo.playerInfo.spGrade
  const playerId = playerInfo.playerInfo.spId

  const handleNullActionImage = () => {
    const img = document.getElementById('messi') as HTMLImageElement;
    img.src = `https://fo4.dn.nexoncdn.co.kr/live/externalAssets/common/players/p${playerId}.png`
    img.onerror = null;
  }

  return(
    position !== 28 ?
    <Box sx={{ position: 'absolute', top: '10%', left: '20%', transform: 'translate(-50%, -50%)' }}>
      <img
        width='50px'
        height='50px'
        id='messi'
        src={`https://fo4.dn.nexoncdn.co.kr/live/externalAssets/common/playersActionHigh/p${playerId}.png`}
        alt='메시'
        loading='lazy'
        onError={handleNullActionImage}
        style={{borderRadius: '50%', cursor: 'pointer', backgroundColor: 'rgb(51, 154, 240)'}}
      />
    </Box>
    :
    <></>
  )
}

export default Players