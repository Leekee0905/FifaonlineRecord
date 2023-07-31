import { Box, Button, FormControl, Input } from "@mui/material";
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios'
import { useRouter } from 'next/router';

type Name = {
  name: string;
}

const SearchBar = () => {
  const { control, handleSubmit } = useForm<Name>({
    defaultValues: {
      name: ''
    }
  });

  const router = useRouter();
  const handleBtn = async (data: Name) => {
    try {
      const response = await axios.post('/api/nickname', data);
      router.push({
        pathname: `/record`,
        query: {
          name: response.data.nickname,
          accessId: response.data.accessId
        }
      });
    } catch (error) {
      console.error('Error occurred during search:', error);
    }
  }
  return(
    <Box sx={{ textAlign: 'center'}}>
      <Box sx={{ display: 'flex', alignItems: 'center', position: 'relative', width: '50%', margin: 'auto' }}>
        <form onSubmit={handleSubmit(handleBtn)} style={{width: '100%'}}>
          <FormControl
            sx={{
              flex: 1,
              backgroundColor: 'white',
              borderColor: 'black',
              height: '60px',
              borderRadius: 5,
              width: '100%'
            }}
          >
            <Controller
              name="name"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <>
                  <Input
                    {...field}
                    disableUnderline
                    sx={{
                      flex: 1,
                      borderRadius: 5,
                      paddingLeft: '15px',
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
                    type='submit'
                  >
                    ㄱㄱ
                  </Button>
                </>
              )}
            />
          </FormControl>
        </form>
      </Box>
    </Box>
  )
}

export default SearchBar;