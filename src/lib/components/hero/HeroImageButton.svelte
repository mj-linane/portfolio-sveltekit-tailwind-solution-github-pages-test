<script>
  let bgImage = 'https://mdbcdn.b-cdn.net/img/new/slides/146.webp';
  export let title = "This is my title!";
  export let subtitle = 'for your business';
  export let buttonText = 'Get started';
</script>

<section class="mb-40">
  <div
    class="relative overflow-hidden bg-no-repeat bg-cover"
    style="background-image: url({bgImage}); height: 500px;"
  >
    <div
      class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
      style="background-color: rgba(0, 0, 0, 0.75);"
    >
      <div class="flex justify-center items-center h-full">
        <div class="text-center text-white px-6 md:px-12">
          <h1 class="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12">
            {title} <br /><span>{subtitle}</span>
          </h1>
          <button
            type="button"
            class="inline-block px-7 py-3 border-2 border-white text-white font-medium text-sm leading-snug uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
          >
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  </div>
</section>
