import React from 'react'
import { Box, Image, Text, SimpleGrid } from '@chakra-ui/react'

function BoxDiv() {
  return (
    <div>
      <SimpleGrid minChildWidth='410px'> 
        <Box className='boxStyle' isTruncated>
            <Image src="https://bit.ly/2k1H1t6" alt="Segun Adebayo" rounded="0.5rem" />
        </Box>
        <Box className='boxStyle' isTruncated>
            <Image src="https://bit.ly/2k1H1t6" alt="Segun Adebayo" rounded="0.5rem" />
        </Box>
        <Box className='boxStyle' isTruncated>
            <Image src="https://bit.ly/2k1H1t6" alt="Segun Adebayo" rounded="0.5rem" />
        </Box>
        <Box className='boxStyle' isTruncated>
            <Image src="https://bit.ly/2k1H1t6" alt="Segun Adebayo" rounded="0.5rem" />
        </Box>
      </SimpleGrid>
    </div>
  )
}

export default BoxDiv