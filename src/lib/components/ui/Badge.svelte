<script>
  export let cls = ''
</script>


<div class={cls} >
  <span class="bg-card rounded-full block min-w-fit px-6 text-tcontrast hover:text-text transition-colors">
    <slot />
  </span>
</div>



<style>
  div {
    @apply  bg-gradient-to-l from-card via-primary to-card grid place-items-center text-text text-xs rounded-full overflow-hidden text-center h-8 ;
  }
  span {
    display: flex;
    justify-content: center;
    align-items: center;
    height: calc(100% - 2px);
    width: calc(100% - 2px);
    margin: auto;
  }
</style>
