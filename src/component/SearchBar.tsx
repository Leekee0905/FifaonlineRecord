import { Box, Button, Input, useTheme } from "@mui/material";

const SearchBar = () => {
  const theme = useTheme()

  return(
    <Box sx={{ textAlign: 'center' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', position: 'relative', width: '50%', margin: 'auto' }}>
        <Input
          disableUnderline
          sx={{
            flex: 1,
            backgroundColor: 'white',
            borderColor: 'black',
            height: '60px',
            borderRadius: 5,
            paddingRight: '50px', // Add some right padding to leave space for the button
          }}
          placeholder="구단주 명"
        />
        <Button
          sx={{
            backgroundColor: 'white',
            position: 'absolute',
            right: '5px',
            top: '50%',
            transform: 'translateY(-50%)',
            color: 'black',
          }}
          variant="contained"
          disableElevation
        >
          ㄱㄱ
        </Button>
      </Box>
    </Box>
  )
}

export default SearchBar;