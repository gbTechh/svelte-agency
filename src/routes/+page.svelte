<script>
  import SliderCards from "$lib/components/slider/SliderCards.svelte";
import Badge from "$lib/components/ui/Badge.svelte";
  import Spacer from "$lib/components/ui/Spacer.svelte";
  import Text from "$lib/components/ui/Text.svelte";

  let array = [
    {id: 1, name: 'web1', image: '/images/card1.png'},
    {id: 2, name: 'web2', image: '/images/card2.png'},
    {id: 3, name: 'web3', image: '/images/card3.png'},
    {id: 4, name: 'web4', image: '/images/card4.png'},
    {id: 5, name: 'web5', image: '/images/card1.png'},
    {id: 6, name: 'web6', image: '/images/card2.png'},
    {id: 7, name: 'web7', image: '/images/card1.png'},

  ]
</script>

<header class="p-2 md:px-4 flex flex-col justify-center items-center">
  <Spacer y={10}/>
  <Badge cls="max-w-[200px] mx-auto">Lo que dicen de nosotros</Badge>
  <Spacer y={4}/>  
  <Text as="h1" size="big" cls=" max-w-[1000px] mx-auto w-full text-center" type="title">
    Dales una mejor experiencia a tus usuarios, lo atractivo entra por los ojos</Text>
  <Spacer y={4}/>
  <Text color="contrast" cls="w-full text-center max-w-[700px] mx-auto">
     Donec enim urna, venenatis vitae felis non, tempor sagittis ligula. Fusce lobortis elit leo, ac lacinia orci euismod et. Pellentesque at sem lacus.
  </Text>
  <Spacer y={6}/>
  <Text as="a" href="/" color="black" cls="bg-primary rounded-full p-2 px-4">Quiero mi web ahora</Text>
</header>
<Spacer y={16}/>
<section class="p-0 md:px-4  w-full h-[100px] bg-body relative rounded-none ">
  <div class="shadow h-[300px]"></div>
  <div class="relative z-10 block bg-body w-full min-h-[600px] ">
    <SliderCards items={array} />
  </div>
</section>


<style>
  .shadow {
    z-index: 1;
    display: block;
    content: '';
    border-radius: 999.99px;
    background-color: transparent;
    top: -0px;
    left: 20%;
    width: 60%;
    margin: 0 auto;
    position: absolute;
    box-shadow:0px 0px 200px 14px rgb(255, 104, 44, 0.49) ;
    /* box-shadow: -3px -36px 0px -22px rgba(250,130,43,1);
    -webkit-box-shadow: -3px -36px 0px -22px rgba(250,130,43,1);
    -moz-box-shadow: -3px -36px 0px -22px rgba(250,130,43,1); */
  }
</style>