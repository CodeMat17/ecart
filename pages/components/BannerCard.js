import { Box } from "@chakra-ui/react";
import Image from "next/image";

const BannerCard = ({ banner }) => {
  return (
      <Box
        mb='8'
        mx={{ md: 1 }}
        display='flex'
        justifyContent='center'
        rounded={{ md: "md" }}
        overflow='hidden'>
        <Image alt='banner' src={banner} width={1500} height={566} />
      </Box>
  
  );
};

export default BannerCard;
