import { SimpleGrid, Text } from "@chakra-ui/react";
import Product from "./Product";

const ProductFeed = ({ products }) => {
  return (
      <SimpleGrid
        maxW='6xl'
        mx='auto'
        columns={[1, 1, 2, 3, 4]}
        px='4'
        spacingX='30px'>
        {products.map(
          ({ id, title, price, description, category, image, rating }) => (
            <Product
              key={id}
              id={id}
              title={title}
              price={price}
              description={description}
              category={category}
              image={image}
              rating={rating}
            />
          )
        )}
      </SimpleGrid>
    
  );
};

export default ProductFeed;
