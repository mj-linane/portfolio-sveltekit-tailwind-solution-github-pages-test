<script>
  export let divClass;
  export let ulClass;
  export let hidden;
</script>

{#if hidden}
  <div id="nav-ul"class={divClass}>
    <ul class={ulClass}>
      <slot />
    </ul>
  </div>
{/if}