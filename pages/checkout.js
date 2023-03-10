import { selectItems, selectTotal } from "@/slices/cartSlice";
import { Box, Button, Text } from "@chakra-ui/react";
import { useSession } from "next-auth/react";
import { BsCart4 } from "react-icons/bs";
import { useSelector } from "react-redux";
import CheckoutProduct from "./components/CheckoutProduct";

const Checkout = () => {
  const session = useSession();
  const items = useSelector(selectItems);
  const total = useSelector(selectTotal);

  return (
    <Box bg='gray.100'>
      <Box maxW='6xl' mx='auto'>
        {/* left side */}      
        <Box
          pt='12' pb=''
          display='flex'
          flexDir='column'
          alignItems='center'
          justifyContent='center'
          color='yellow.600'>
          <BsCart4 size={68} cursor='pointer' />
          <Text
            fontWeight='semibold'
            fontSize='lg'
            py='2'
            px={{ base: 4, lg: "0" }}>
            {items.length === 0
              ? "Your shopping cart is empty"
              : "Your Shopping Cart:"}
          </Text>
        </Box>

        <Box display='flex' flexDir={{ base: "column", md: "row" }}>
          <Box>
            {items.map((item, i) => (
              <CheckoutProduct key={i} {...item} />
            ))}
          </Box>
          {/* Right side */}
          {items.length > 0 && (
            <Box w={{ base: "full", md: "50%" }} pr='4'>
              <Text textAlign='center'
                fontWeight='semibold'
                fontSize='lg'
                py='2'
                px={{ base: 4, lg: "0" }}>
                Subtotal - ({items.length} item{items.length > 1 ? "s" : ""}): $
                {total}
              </Text>
              <Box my='6' display='flex' justifyContent='center'>
                <Button
                  ml={{ base: "4", md: "0" }}
                  bg={session.data === null ? "gray.500" : "blue.700"}
                  color='white'
                  isDisabled={session.data === null}
                  _hover={{ bg: "blue.900" }}>
                  {session.data === null
                    ? "Signin to checkout"
                    : "Proceed to checkout"}
                </Button>
              </Box>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Checkout;
