<script lang="ts">
  import Spacer from "../ui/Spacer.svelte";
  import Text from "../ui/Text.svelte";

  export let cls: string = '';
  export let type: string = '';
  export let title: string = '';
  export let text: string = '';
  export let listing: string[] = [];
  export let button: string = '';
  export let linkButton: string = '#';

  let sizeText = listing.slice(0, 5);
  let showMore = false;

  function showMoreText(){
    showMore = !showMore;
    if(showMore){
      sizeText = listing;
    }else{
      sizeText = listing.slice(0, 5);
    }
  }
</script>


 <div class={`${cls ?? ''} card  self-stretch w-full h-auto bg-card border-border border-[0px] overflow-hidden rounded-2xl`}>
  <div class="card-btns p-2">
    <a href="/" class="flex w-full items-center justify-center">
      <Text as="span" size="custom" cls="text-[11px] text-center sm:text-base block w-ful text-center" color="contrast">{type}</Text>              
    </a>
    <div class="circle-shadow-l"></div>
    <div class="circle-shadow-r"></div>
  </div>
  <div class="relative h-full flex flex-col w-full">
    <!-- <div class="absolute top-0 left-0 w-full h-full  card-bg"/> -->
    <div class="p-8 pt-20">
      <Text size="xl" color="white" cls="font-semibold">{title}</Text>
      <Spacer y={2}/>
      <Text  color="contrasthard" cls="font-normal">{text}</Text>
    </div>
    <div class="flex flex-col h-full self-stretch justify-between">
      <ul class=" ul-bg p-8 w-11/12 border-[1px] flex flex-col gap-4 border-border h-auto rounded-xl rounded-l-none ">
        {#each sizeText as item }
          <Text as="li" color="contrast" size="xmd" cls="font-medium flex gap-2 items-start ">
            <img src="/icons/check-card.svg" alt="check" width="18" height="18" class="check"/>
            {item}
          </Text>
        {/each}         
      </ul>
     

      <div class="p-1 w-full">
        <button on:click={showMoreText}>
          <Text as="span" cls="w-full text-left block p-4 pt-8 px-8 underline" size="xmd" color="contrasthard">{!showMore ? 'Ver más' : 'Ver menos'}</Text>
        </button>
        <a href={linkButton} class="bglink rounded-[calc(1rem_-_0.25rem)] block w-full border-border border-[1px] p-4 text-center font-manjari text-text">{button}</a>
      </div>
    </div>
  </div>
</div>

<style>
  .card-bg {
    background: linear-gradient(270.33deg, rgba(65, 65, 65, 0.13) 5.1%, rgba(46, 46, 46, 0.0159949) 44.81%, rgba(22, 22, 22, 0) 79.51%, rgba(22, 22, 22, 0) 95.45%);
  }
  .card {
    position: relative;
    box-shadow: 0px 0px 0px 1px rgb(40, 40, 40) inset;
  }
  .card:hover .card-btns{
    opacity: 1;
    background: black;
    /* box-shadow: 0px 0px 0px 1px rgb(40, 40, 40); */    
  }
  .card:hover .bglink{
    background: linear-gradient(91.55deg, rgba(241, 131, 21, 0.05) 3.9%, rgba(73, 56, 35, 0.253) 95.58%);
  }
 


  .card-btns{
    opacity: 1;
     box-shadow: 0px 0px 0px 1px rgb(40, 40, 40);
     
    transition: 0.2s all ease;
    top: 0;
    right: 0;
    @apply bg-body rounded-bl-2xl;
    width: 60%;
    height: 40px;
    position: absolute;
    float: right;
  }
  .circle-shadow-l{
    width: 20px;
    height: 20px;
    border-radius: 0 50% 0 0 ;
    position: absolute;
    left: -20px;
    top: 0px;
    background-color: transparent;
    border-right: 1px solid rgb(40, 40,40);

  }
  .circle-shadow-l::before{
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 0 50% 0 0;
    box-shadow: 3px -5px 0px 0px rgb(14,15,17);
  }
  .circle-shadow-r{
    width: 20px;
    height: 20px;
    border-radius: 0 50% 0 0 ;
    position: absolute;
    right: 0px;
    bottom: -20px;
    background-color: transparent;
  }
  .circle-shadow-r::after{
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 0 50% 0 0;
    box-shadow: 3px -5px 0px 0px rgb(14,15,17);
    right: 0;
    border-top: 1px solid rgba(40,40,40);

  }
  .bglink{
    background: linear-gradient(91.55deg, rgba(224, 124, 27, 0.05) 3.9%, rgba(29, 23, 16, 0.12) 95.58%);
  }
  .bglink:hover{
    background: linear-gradient(91.55deg, rgba(241, 131, 21, 0.05) 3.9%, rgba(73, 56, 35, 0.253) 95.58%);
  }
  .ul-bg{
    background: linear-gradient(90deg, rgba(0, 0, 0, 0.29) 7.12%, rgba(54, 54, 54, 0.14) 91.5%);
  }
 
  
</style>
