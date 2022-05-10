
const ProductRow = ({product}) => {
  return (
    <div style={{color: !product.inStock && 'red'}}>
    {product.name}
    {product.price}
    </div>
  )
}

export default ProductRow