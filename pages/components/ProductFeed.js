import { SimpleGrid, Text } from "@chakra-ui/react";
import Product from "./Product";

const ProductFeed = ({ products }) => {
  // console.log(products);
  return (
      <SimpleGrid
        maxW='6xl'
        mx='auto'
        columns={[1, 1, 2, 3, 4]}
        px='4'
        spacingX='30px'>
        {products?.map(
          (product) => (
            <Product
              key={product.id} 
              id={product.id}
              title={product.title}
              price={product.price}
              description={product.description}
              category={product.category}
              image={product.image}
            />
          )
        )}
      </SimpleGrid>
    
  );
};

export default ProductFeed;
