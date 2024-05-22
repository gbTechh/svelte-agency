<script lang="ts">
// @ts-nocheck

  import { onMount } from 'svelte';
  import Text from '../ui/Text.svelte';
  export let items = []

  let div;  
  let parentWidth: number; 
  let parentHeight: number;
   
  let counter = 0;
  let speed = '0.89';
  $: translate = 0;
  $: array = [...items, ...items];

  onMount(() => {
    if(div && div !== null){
      parentWidth = div?.parentNode?.offsetWidth;
      parentHeight = div?.parentNode?.offsetHeight;
    }
     const interval = setInterval(() => {     
      
      counter++;
      translate += parentWidth / 6; 
      speed = '0.5'

      if(counter === items.length){
        counter = 0;
        speed = '0'
        translate = 0;
      }    
    }, 3000);

    window.addEventListener('resize', updateParentDimensions);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', updateParentDimensions);
    }
  });

  function updateParentDimensions() {
    if (div && div !== null) {
      parentWidth = div.parentNode.offsetWidth;
      parentHeight = div.parentNode.offsetHeight;
    }
  }

</script>

<div class="w-full overflow-hidden -top-[4vw] absolute">
  <div 
    bind:this={div} 
    class="w-full flex " 
    style={` transform: translateX(-${translate}px); transition: ${speed}s all ease-in-out`}
   >
    {#each array as item ,i}
      <div
        class="flex items-center justify-center aspect-square"
        style={` min-width: ${Math.abs(counter - i) === 2 && i > counter ?  `${parentWidth / 3}px`: `${parentWidth / 6}px;`};
                animation:  ${Math.abs(counter - i) === 2 && i > counter &&  "minw2 0.6s ease-in "};
                transition: 0.5s minWidth ease-in
                `}
      >
        <div style="background-image: url('{item.image}')" class={`bg-cover bg-center overflow-hidden  h-full bg-card rounded-xl border-[1px] border-border ${Math.abs(counter - i) === 2 ?  'animation-bigcard' : 'animation-smallcard card'}`}>
          {#if Math.abs(counter - i) === 2 && i > counter }
            <div class="rounded-full h-[2px] bg-primary w-[98%] mx-auto card-border" ></div>            
          {/if}
          <div class={`flex flex-col justify-between background-opacity ${Math.abs(counter - i) === 2 && i > counter ? 'scale' : ''}`} >
            <div class="flex justify-end items-center gap-2 p-3 border-t-[2px] border-t-primary">
              <Text as="p" size="xs" color="contrast"  cls={`border-[1px] border-primary flex items-center justify-center block bg-tblack/40 border-tblack border-[1px] rounded-full  px-3 ${Math.abs(counter - i) === 2 && i > counter ? ' p-2 px-4' : ' p-1'}`}>Ecommerce</Text>
              <a href="/" class="text-transparent ">
                <img src="/icons/arrowlink-orange.svg" alt={item.name} class="aspect-square w-9 h-9"/>
              </a>
            </div>   
            {#if Math.abs(counter - i) === 2 && i > counter}
              <div class="p-4 flex items-center justify-center">
                <Text as='a' color="contrast" href="/" cls="border-border hover:text-text border-[1px] rounded-full text-tblack bg-card p-2 px-4 text-sm transition-all">Ver todos los proyectos</Text>
              </div>
            {/if}

          </div>
        </div>
      </div>
    {/each}
  </div>  
</div>

<style>
  @keyframes fadein{
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes -global-minw {
    from {
      min-width: 100px;
    }
    to {
      min-width: 400px;
    }
  }

  .scale {
    transform: scale(1.01);
  }

  .background-opacity {
    opacity: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(0deg, rgba(41,41,41,0.6) 0%, rgba(255,255,255,0) 48%, rgba(19, 19, 19, 0.9) 100%);
    transition: 0.2s all ease;

  }
  .background-opacity:hover{
    opacity: 1;
  }
  .card-border{
    animation: fadein 3s ease linear;
  }

  .animation-bigcard {
    width: 95%;
    height: 100%;
    transition:0.2s all ease-in-out;
  }
  .animation-smallcard {
    width: 96%;
    height: 60%;
    transition:0.4s all ease-in-out;
  }
  .card:hover{
    transform: scale(1.05);
    transition: 0.6s transform ease;
  }
  
</style>

