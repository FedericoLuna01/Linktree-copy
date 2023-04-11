import { type Link } from '../types/types'
import {Image, Link as ReachLink, Stack, Text} from '@chakra-ui/react'

type LinkBoxProps = {
  link: Link
}

export const LinkBox = ({link}: LinkBoxProps) => (
    <ReachLink
      href={link.url}
      target="_blank"
      border='1px solid white'
      bg='black'
      px={10}
      py={3}
      _hover={{ transform: 'scale(1.04)', transition: 'all 0.2s ease-in-out' }}
    >
      <Stack
        direction='row'
        align='center'
      >
        <Image 
          src={link.icon} 
          alt={`${link.label} icon`}
          w='30px' 
          h='30px' 
        />
        <Text>
          {link.label}
        </Text>
      </Stack>
    </ReachLink> 
  )
