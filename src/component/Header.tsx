import { AppBar, Box, Container, Typography } from "@mui/material";
import { useRouter } from 'next/router';

const Header = () => {
  const router = useRouter();
  return(
    <Box sx={{marginTop: '20px'}}>
        <Typography variant="h2" sx={{margin: '20px', cursor: 'pointer', width: 'fit-content'}}
          onClick={()=>router.push('/')}
        >
          Logo
        </Typography>

    </Box>
  )
}

export default Header;