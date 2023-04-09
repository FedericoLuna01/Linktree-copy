import { Heading, Stack } from "@chakra-ui/react"
import { useEffect } from "react"
import Papa from 'papaparse'

async function fetchLinks() {
  const res = await fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vTy6n5lczW53Zw1FVNcT-lMzByw9cds_doNpVthaV4TB7qNKA0BQXuOVzSRjHkVFXkA-vPSz2hGOy4g/pub?output=csv')
  const data = await res.text()
  const parsed = Papa.parse(data, { header: true })
  console.log(parsed);
  return data
}

const App = () => {

  const getLinks = async (): Promise<void> => {
    const links = await fetchLinks()
    console.log(links);
  }

  useEffect(() => {
    void getLinks()
  }, [])
  
  return (
    <Stack>
      <Heading>
        Hola
      </Heading>
    </Stack>

  )
}

export default App