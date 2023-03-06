import { Box, Button, Text } from "@chakra-ui/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { AiFillStar } from "react-icons/ai";

const Product = ({
  id,
  title,
  price,
  description,
  category,
  image,
}) => {
  const MAX_RATING = 5;
  const MIN_RATING = 2;

  const [ratings, setRatings] = useState(null);

  useEffect(() => {
    setRatings(
      Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
    );
  }, []);

  const [hasPrime] = useState(Math.random() < 0.5);
  const [hasPrimeStatus, setHasPrimeStatus] = useState(null);
  useEffect(() => {
    if (hasPrime) {
      setHasPrimeStatus("Free delivery if you order now!");
    } else {
      setHasPrimeStatus("");
    }
  }, []);

  return (
    <Box
      bg='white'
      m='5'
      py='10'
      px='6'
      rounded='md'
      // maxW={{base: 'xs'}}
      pos='relative'
      shadow='md'
      mx='auto'>
      <Text
        fontSize='xs'
        fontStyle='italic'
        color='gray.400'
        pos='absolute'
        top='2'
        right='2'>
        {category}
      </Text>
      <Box
        w='200px'
        h='200px'
        display='flex'
        flexDir='column'
        alignItems='center'
        justifyContent='center'
        mx='auto'>
        <Image
          alt={title}
          src={image}
          width={130}
          height={130}
          objectFit='contain'
        />
      </Box>
      <Text fontWeight='semibold' my='3' noOfLines='1'>
        {title}
      </Text>
      <Box display='flex' color='yellow.500'>
        {[...Array(ratings)].map((_, i) => (
          <AiFillStar key={i} size={16} />
        ))}
      </Box>
      <Text fontSize='xs' my='2' noOfLines='2'>
        {description}
      </Text>
      <Text fontWeight='semibold'>${price}</Text>
      <Text fontSize='xs' color='gray.500'>
        {hasPrimeStatus}
      </Text>
      <Button
        w='full'
        mt='8'
        bgGradient='linear(to-b, yellow.200, yellow.400)'
        _hover={{ bgGradient: "linear(to-b, yellow.400, yellow.200)" }}>
        Add to Cart
      </Button>
    </Box>
  );
};

export default Product;
