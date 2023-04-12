import { Heading, Spinner, Stack } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import Papa from 'papaparse'
import { type Link } from './types/types'
import { LinkBox } from "./components/LinkBox"


async function fetchLinks() {
  const {VITE_GOOGLE_SHEETS} = import.meta.env
  const res = await fetch(`${VITE_GOOGLE_SHEETS}`)
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
      h='100vh'
      bg='black'
      color='white'
      align='center'
      justify='center'
      gap={8}
    >
      <Stack>
        <Heading
          size='2xl'
        >
          Federico Luna
        </Heading>
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