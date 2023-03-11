import { selectItems, selectTotal } from "@/slices/cartSlice";
import { Box, Button, Text } from "@chakra-ui/react";
import { closePaymentModal, useFlutterwave } from "flutterwave-react-v3";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { BsCart4 } from "react-icons/bs";
import { useSelector } from "react-redux";
import CheckoutProduct from "./components/CheckoutProduct";

const Checkout = () => {
  const { data: session } = useSession();
  const [email, setEmail] = useState(null);
  const [name, setName] = useState(null);
  const items = useSelector(selectItems);
  const total = useSelector(selectTotal);

  useEffect(() => {
    if (session) {
      setEmail(session.user.email);
      setName(session.user.name);
    }
  });

  const config = {
    public_key: process.env.NEXT_PUBLIC_FLUTTERWAVE_KEY,
    tx_ref: Date.now(),
    amount: total,
    currency: "NGN",
    payment_options: "card, mobilemoney, usssd",
    redirect_url: "https://ecart-shopping.vercel.app/",
    customer: {
      email: email,
      name: name,
    },
    customizations: {
      title: "my Payment Title",
      description: "Payment for items in cart",
      logo: "https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg",
    },
  };

  const handleFlutterPayment = useFlutterwave(config);

  return (
    <Box bg='gray.100'>
      <Box maxW='6xl' mx='auto'>
        {/* left side */}
        <Box
          pt='12'
          pb=''
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
              <Text
                textAlign='center'
                fontWeight='semibold'
                fontSize='lg'
                py='2'
                px={{ base: 4, lg: "0" }}>
                Subtotal - ({items.length} item{items.length > 1 ? "s" : ""}): $
                {total}
              </Text>
              <Box my='6' display='flex' justifyContent='center'>
                <Button
                  onClick={() => {
                    handleFlutterPayment({
                      callback: (res) => {
                        console.log(res);
                        closePaymentModal();
                      },
                      onClose: () => {},
                    });
                  }}
                  ml={{ base: "4", md: "0" }}
                  bg={!session ? "gray.500" : "blue.700"}
                  color='white'
                  isDisabled={!session}
                  _hover={{ bg: "blue.900" }}>
                  {!session
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
