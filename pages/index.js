import { Box, Text } from "@chakra-ui/react";
import { Inter } from "next/font/google";
import Head from "next/head";
import Banner from "./components/Banner";
import ProductFeed from "./components/ProductFeed";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ products }) {
  return (
    <>
      <Head>
        <title>Amazon Clone</title>
        <meta
          name='description'
          content='This is a clone version of Amazon eCommerce website for my portfolio'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        {/* className={inter.className} */}

        <Banner />
        <Box
          w='full'
          bgGradient='linear(to-b, gray.200, white)'        
          py='6'>
          <ProductFeed products={products} />
        </Box>
      </main>
    </>
  );
}

export async function getServerSideProps(context) {
  const products = await fetch("https://fakestoreapi.com/products").then(
    (res) => res.json()
  );

  return {
    props: {
      products,
    },
  };
}
