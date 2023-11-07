<script>
  export let href
  export let active
</script>

<li>
  <a
    {href}
    class="px-4 py-2 hover:text-gray-400 {active ? 'text-yellow-400' : ''}"
  >
    <slot />
  </a>
</li>