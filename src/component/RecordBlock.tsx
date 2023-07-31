import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from '@mui/material'
import axios from 'axios'

const RecordBlock = () => {

  return (
    <>
      <Box>
        <Accordion>
          <AccordionSummary>
            <Typography>hi</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              bye
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </>
  )
}

export default RecordBlock