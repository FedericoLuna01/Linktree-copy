import { Image, Stack } from "@chakra-ui/react";

const Avatar = () => ( 
    <Stack>
      <Image 
        filter={'grayscale(100%)'}
        src='/avatar.png'
        borderRadius='100%'
        w='200px'
        h='200px'
        objectFit={'cover'}
      />
    </Stack>
   )
 
export default Avatar;