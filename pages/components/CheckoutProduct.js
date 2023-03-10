import { addToCart, removeFromCart } from "@/slices/cartSlice";
import { Box, Button, Text } from "@chakra-ui/react";
import Image from "next/image";
import { AiFillStar } from "react-icons/ai";
import { useDispatch } from "react-redux";

const CheckoutProduct = ({
  id,
  title,
  price,
  description,
  category,
  image,
  ratings,
  hasPrimeStatus,
}) => {
  const dispatch = useDispatch();

  const addItemToCart = () => {
    const product = {
      id,
      title,
      price,
      description,
      category,
      image,
      ratings,
      hasPrimeStatus,
    };
    dispatch(addToCart(product));
  };

  const removeItemFromCart = () => {
    dispatch(removeFromCart({ id }));
  };

  return (
    <Box
      border='1px'
      borderColor='gray.300'
      rounded='md'
      display='flex'
      flexDir={{ base: "column", md: "row" }}
      alignItems='center'
      px='4'
      py='6'
      my='4'
      mx='4'
      bg='white'
      shadow='md'>
      <Box w='auto'>
        <Image alt={title} src={image} width={90} height={70} />
      </Box>
      <Box w='full' px={{ base: "0", md: "4" }}>
        <Text mt='2' lineHeight='5' fontWeight='semibold'>
          {title}
        </Text>
        <Box mb='2' display='flex' color='yellow.500'>
          {[...Array(ratings)].map((_, i) => (
            <AiFillStar key={i} size={16} />
          ))}
        </Box>
        <Text fontSize='xs' pb='4' noOfLines='2'>
          {description}
        </Text>
        <Text fontWeight='semibold'>${price}</Text>
        <Text fontSize='xs' color='gray.500'>
          {hasPrimeStatus}
        </Text>
      </Box>
      <Box
        mt={{ base: 6, md: 0 }}
        w={{ base: "full", md: "150px" }}
        display='flex'
        flexDir='column'
        alignItems='center'
        gap='2'>
        <Button onClick={addItemToCart} w='full' colorScheme='yellow'>
          Add to Cart
        </Button>
        <Button onClick={removeItemFromCart} w='full' colorScheme='yellow'>
          Remove from Cart
        </Button>
      </Box>
    </Box>
  );
};

export default CheckoutProduct;
