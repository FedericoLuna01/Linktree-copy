import { Heading, Spinner, Stack, Text } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import Papa from 'papaparse'
import { type Link } from './types/types'
import { LinkBox } from "./components/LinkBox"
import Avatar from "./components/Avatar"


async function fetchLinks() {
  const res = await fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vTy6n5lczW53Zw1FVNcT-lMzByw9cds_doNpVthaV4TB7qNKA0BQXuOVzSRjHkVFXkA-vPSz2hGOy4g/pub?output=csv')
  const data = await res.text()
  const parsed = await new Promise<Link[]>((resolve, reject) => {
    Papa.parse<Link>(data, { 
      header: true, 
      complete(result) { resolve(result.data); }, 
      error: reject 
    })
  }) 
  return parsed
}

const App = () => {
  const [links, setLinks] = useState<Link[]>()

  const getLinks = async () => {
    const links = await fetchLinks()
    setLinks(links)
  }

  useEffect(() => {
    void getLinks()
  }, [])
  
  return (
    <Stack
      minH='100vh'
      bg='black'
      color='white'
      align='center'
      justify='center'
      gap={3}
      py={10}
      px={{base: 5, sm: 0}}
    >
      <Stack
        gap={3}
        align='center'
      >
        <Avatar />
        <Heading
          size='2xl'
          >
          Federico Luna
        </Heading>
        <Text
          align='center'

        >
          Podes encontrarme en todas estas redes sociales.
        </Text>
      </Stack>
      <Stack
        bg='#4f4f4f44'
        border='1px solid white'
        gap={3}
        borderRadius={3}
        p={10}
      >
        {
          links ? (
            links.map((link, i) => (
              <LinkBox 
                key={i}
                link={link}
              />
          ))
          )
          :
          <Spinner size='xl' />
        }
      </Stack>
    </Stack> 
  )
}

export default App