<script>
  import ProductGridCard from './ProductGridCard.svelte';
  let products = [
    {
      'name': 'Product 1',
      'description': 'This is a description of product 1',
      'price': '$1.00',
      'imageURL': 'https://via.placeholder.com/150',
      'imageAltText': 'Placeholder image'
    }
  ]
</script>

<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
  {#each products as product}
    <ProductGridCard product={product} />
  {/each}
</div>