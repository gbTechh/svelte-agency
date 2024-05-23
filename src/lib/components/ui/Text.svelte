<script>
  export let as = 'p';
  export let type = 'base';
  export let color = 'primary';
  export let size = 'md';
  export let cls = '';
  export let href = '/';
  export let bg = '';

  // Función para generar las cls CSS
  $: clases = [
      bg,
      cls,
      type === 'title' ? 'font-marcellus' : '',
      type === 'base' ? 'font-manjari' : '',
      color === 'primary' ? 'text-text' : '',
      color === 'white' ? 'text-twhite' : '',
      color === 'contrast' ? 'text-tcontrast' : '',
      color === 'contrasthard' ? 'text-tcontrasthard' : '',
      color === 'error' ? 'text-red-500' : '',
      color === 'black' ? 'tblack' : '',
      color === 'success' ? 'text-green-400' : '',
      color === 'warning' ? 'text-warning' : '',
      size === 'big' ? 'text-3xl | md:text-4xl | lg:text-5xl lg:leading-tight ' : '',
      size === '2xl' ? 'text-xl md:text-3xl' : '',
      size === 'xl' ? 'text-xl md:text-2xl' : '',
      size === 'lg' ? 'text-lg md:text-lg' : '',
      size === 'md' ? 'text-base md:text-[1.1rem]' : '',
      size === 'xmd' ? 'text-[0.80rem] md:text-[1rem]' : '',
      size === 'sm' ? 'text-sm md:text-sm' : '',
      size === '14' ? 'text-[12px] md:text-[14px]' : '',
      size === 'xs' ? 'text-xs md:text-xs' : '',
  ].filter(Boolean).join(' ');
</script>

{#if as === 'p'}
  <p class={clases}><slot /></p>
{:else if as === 'h1'}
  <h1 class={clases}><slot /></h1>
{:else if as === 'h2'}
  <h2 class={clases}><slot /></h2>
{:else if as === 'h3'}
  <h3 class={clases}><slot /></h3>
{:else if as === 'h4'}
  <h4 class={clases}><slot /></h4>
{:else if as === 'h5'}
  <h5 class={clases}><slot /></h5>
{:else if as === 'h6'}
  <h6 class={clases}><slot /></h6>
{:else if as === 'span'}
  <span class={clases}><slot /></span>
{:else if as === 'li'}
  <li class={clases}><slot /></li>
{:else if as === 'a' && href}
  <a href={href} class={clases}><slot /></a>
{:else}
  <p class={clases}><slot /></p>
{/if}  

