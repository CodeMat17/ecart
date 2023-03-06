import {
  Box,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import { BiSearchAlt } from "react-icons/bi";
import { BsCart4 } from "react-icons/bs";
import { HiMenuAlt2 } from "react-icons/hi";

const NavHeader = () => {
  return (
    <Box
      as='nav'
      pos='sticky'
      top='0'
      zIndex='60'
      p='4'
      bg='gray.900'
      color='white'>
      <Box maxW='6xl' mx='auto' display='flex'>
        <Box
          w='full'
          display='flex'
          flexDir='row'
          gap='4'
          alignItems='center'
          justifyContent={{ base: "", md: "space-between" }}>
          <BsCart4 size={48} />
          <Box>
            <InputGroup display={{ base: "none", sm: "flex" }}>
              <Input maxW='sm' type='search' />
              <InputRightElement
                as='button'
                children={<BiSearchAlt size={23} />}
                bg='blue'
                color='white'
                roundedRight='sm'
                w='50px'
              />
            </InputGroup>
          </Box>
        </Box>

        <Box
          px='4'
          alignItems='center'
          justifyContent='end'
          fontSize={{ base: "xs", sm: "sm" }}
          whiteSpace='nowrap'
          display='flex'
          gap='4'>
          <Box>
            <Text>Hellow, Matthew</Text>
            <Text>Account and lists</Text>
          </Box>
          <Box>
            <Text>Returns</Text>
            <Text> & Orders</Text>
          </Box>
          <Box pos='relative'>
            <BsCart4 size={25} />
            <Box
              pos='absolute'
              top='-3'
              right='-3'
              display='flex'
              alignItems='center'
              justifyContent='center'
              textAlign='center'
              fontWeight='bold'
              bg='yellow.500'
              rounded='full'
              px='1.5'
              py='.8'>
              2
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        maxW='6xl'
        mx='auto'
        mt='4'
        display='flex'
        gap='4'
        alignItems='center'
        justifyContent='center'>
        <HiMenuAlt2 size={25} />
        <Text>All</Text>
        <Text>Shoes</Text>
        <Text>Computers</Text>
        <Text>Belts</Text>
        <Text>Electronics</Text>
        <Text display={{ base: "none", sm: "flex" }}>Cars</Text>
      </Box>
    </Box>
  );
};

export default NavHeader;
