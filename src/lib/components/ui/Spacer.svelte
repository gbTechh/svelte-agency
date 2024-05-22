<script>
  export let cls = "";
  export let x = 0;
  export let y = 0;


  /**
   * @param {number} n
   */
  function calc(n){
    return `calc(${n}rem / 4)`
  }

</script>

<div 
  class={`block w-[1px] h-[1px] ${cls}`} 
  style={`
    margin-left:${x ? calc(x) : "0px"};
    margin-right:${x ? calc(x) : "0px"};
    margin-top:${y ? calc(y) : "0px"};
    margin-bottom:${y ? calc(y) : "0px"};
  `}>
  <slot />
</div>