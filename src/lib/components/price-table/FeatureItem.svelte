<script>
  export let text;
</script>

<div class="flex justify-center">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="w-5 h-5"
    viewBox="0 0 24 24"
    stroke-width="2"
    stroke="currentColor"
    fill="none"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M5 12l5 5l10 -10" />
  </svg>
  <span class="text-sm ml-1">{text}</span>
</div>
