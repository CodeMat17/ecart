import { AspectRatio } from "@chakra-ui/react";
import Image from "next/image";

const BannerCard = ({ banner }) => {
  return (
    <AspectRatio
      ratio={4 / 3}
      maxH='60vh'
      mx={{ md: 1 }}
      rounded={{ md: "md" }}
      overflow='hidden'>
      <Image
        alt='banner'
        src={banner}
        layout='fill'
        // width={1500} height={566}
      />
    </AspectRatio>
    // <Box
    //   pos='relative'
    //   mb='8'
    //   maxW='full'
    //   maxH='70vh'
    //   mx={{ md: 1 }}
    //   display='flex'
    //   justifyContent='center'
    //   rounded={{ md: "md" }}
    //   overflow='hidden'>
    //   <Image
    //     alt='banner'
    //     src={banner}
    //     layout='fill'
    //     // width={1500} height={566}
    //   />
    // </Box>
  );
};

export default BannerCard;
