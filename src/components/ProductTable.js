import ProductRow from "./ProductRow"

const ProductTable = ({products}) => {

  return (
    <div>
      {products.map(product => <ProductRow key={product.id} product={product} />)}
    </div>
  )
}

export default ProductTable