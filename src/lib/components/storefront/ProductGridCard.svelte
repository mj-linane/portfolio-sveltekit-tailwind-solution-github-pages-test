<!-- Card for a product grid, styled with tailwind -->

<script>
  export let product;
</script>

<div>
  <img src={product.imageURL} alt={product.imageAltText}>
  <h2>{product.name}</h2>
  <p>{product.description}</p>
  <p>{product.price}</p>
</div>