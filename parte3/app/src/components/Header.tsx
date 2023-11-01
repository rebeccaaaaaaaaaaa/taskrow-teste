
import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import Logo from './Logo'


const Links = [
  {
    name: 'Página Inicial',
    path: '/',
  },
  {
    name: 'Grupos',
    path: '/grupos',
  },
  {
    name: 'Cadastro',
    path: '/cadastro',
  },
]

export function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4} borderBottom='0px 3px 6px #00000016'>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box>
              <Logo />
            </Box>
          </HStack>
          <Flex alignItems={'center'}>
          <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
              {Links.map((link, index) => (
                <a key={index}
                 href={link.path}
                >{link.name}</a>
              ))}
            </HStack>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link, index) => (
                <a key={index}>{link.name}</a>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>

    </>
  )
}