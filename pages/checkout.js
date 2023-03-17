import { selectItems, selectTotal } from "@/slices/cartSlice";
import { Box, Button, Text } from "@chakra-ui/react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { BsCart4 } from "react-icons/bs";
import { usePaystackPayment } from "react-paystack";
import { useSelector } from "react-redux";
import CheckoutProduct from "./components/CheckoutProduct";

const Checkout = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const [email, setEmail] = useState(null);
  const [name, setName] = useState(null);
  const items = useSelector(selectItems);
  const total = useSelector(selectTotal);
  const amount = Math.round(total);

  useEffect(() => {
    if (session) {
      setEmail(session.user.email);
      setName(session.user.name);
    }
  });

  const config = {
    reference: new Date().getTime().toString(),
    email: email,
    amount: amount * 100,
    publicKey: "pk_test_01fc1183b5664f5c293f2f729aa4c876f0bfffd6",
  };

  const onSuccess = (reference) => {
    console.log("status", "reference");
    // NEXT_PUBLIC_VALIDATION_SECRET
    console.log("onSuccess, DONE");
    router.push("/");
  };

  const onClose = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    console.log("closed");
  };

  const PayStackHook = () => {
    const initializePayment = usePaystackPayment(config);
    return (
      <Button
        color='white'
        bgGradient='linear(to-r, #08a4da, blue.400)'
        boxShadow={`0 0 12px 1px #2a7aaf`}
        _hover={{ boxShadow: `0 0 20px 3px #2a7aaf` }}
        onClick={() => {
          initializePayment(onSuccess, onClose);
        }}>
        Paystack Hook NGN {amount}
      </Button>
    );
  };

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
                {amount}
              </Text>
              <Box my='6' display='flex' justifyContent='center'>
                {/* <Button
                  onClick={() => {
                    handleFlutterPayment({
                      callback: (response) => {
                        console.log(response);
                        console.log("PAYMENT DONE");
                        // console.log("checkout items", items.length);
                        // console.log("checkout items", items);
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
                  {!session ? "Signin to checkout" : "Proceed to checkout"}
                </Button> */}
                <PayStackHook />
              </Box>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Checkout;
