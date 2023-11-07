<script>
  export let planName;
  export let storage;
  export let price;
  export let buttonClass = "";
</script>

<div class="bg-slate-700 rounded-xl text-white">
  <!-- Upper Container -->
  <div class="p-8 mx-3 mt-3 rounded-t-xl bg-slate-800">
    <div class="text-center uppercase">{planName}</div>
    <h2 class="mt-10 font-serif text-5xl text-center">{storage}</h2>
    <h3 class="mt-2 text-center">{price}/Month</h3>
    <div class="flex justify-center">
      <a
        href="#"
        class="inline-block px-10 py-3 my-6 text-center border border-violet-600 rounded-lg duration-200 {buttonClass}"
        >Purchase</a
      >
    </div>
  </div>

  <!-- Border -->
  <div class="border-t border-slate-700"></div>

  <!-- Lower Container -->
  <div class="p-8 mx-3 mb-3 rounded-b-xl bg-slate-800">
    <!-- List Container -->
    <div class="flex flex-col space-y-2">
      <slot />
    </div>
  </div>
</div>
