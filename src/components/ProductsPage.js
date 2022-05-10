import { useState } from 'react';
import jsonData from '../data.json';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';


function ProductsPage () {
  const [products, setProducts] = useState(jsonData);
  const [productsCopy, setProductsCopy] = useState(products);

  const searchHandler = (event) => {
    setProductsCopy(products.filter(product => {
      return product.name.toLowerCase().startsWith(event.target.value.toLowerCase());
    }))
  }

  return(
      <div>
        <h1>IronStore</h1>
        <SearchBar searchHandler={searchHandler} />
      <ProductTable products={productsCopy} />
      </div>    
  )
}

export default ProductsPage;