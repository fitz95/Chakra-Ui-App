import React from 'react'
import { Flex, Button, useColorMode } from '@chakra-ui/react'

export default function Toggle() {
    const { colorMode, toggleColorMode } = useColorMode()
  return (
    <div>
        <h1>Toggle</h1>
        <Flex align="center" justify="center" h="100vh" direction="column">
            <Button size="lg" onClick={() => toggleColorMode()}>Toggle Mode</Button>
        </Flex>

    </div>
  )
}

