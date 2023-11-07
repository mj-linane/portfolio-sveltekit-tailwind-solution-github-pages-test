<script>
  import car1 from '$lib/assets/car1.jpg';
  import car2 from '$lib/assets/car2.jpg';
  import car3 from '$lib/assets/car3.jpg';
</script>

<div id="outer-container" class="m-0 min-h-screen overflow-hidden relative">
  <div id="inside-container" class="w-full h-full relative">
    <img
      src={car1}
      alt="Car 1"
      class="w-[1000px] md:w-[800px] lg:w-[600px] xl:w-[400px] absolute top-[-50%] left-0"
    />
    <img
      src={car2}
      alt="Car 2"
      class="w-[1000px] md:w-[800px] lg:w-[600px] xl:w-[400px] absolute top-1/2 right-[-50%]"
    />
    <img
      src={car3}
      alt="Car 3"
      class="w-[1000px] md:w-[800px] lg:w-[600px] xl:w-[400px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
    />
  </div>
</div>
