<script>
  import "../app.css";
</script>

<div class="py-2 md:py-3">
  <nav class="rounded-full text-white ">
    <a href="/">Logo</a>
    <div class="md:flex justify-center gap-4 items-center w-full absolute md:relative hidden">
      <a href="/servicios">Servicios</a>
      <a href="/about">Proyectos</a>
      <a href="/noostros">Nosotros</a>
      <a href="/blog">Blog</a>
      <a href="/contacto">Contacto</a>
    </div>
    <button></button>
  </nav>
  
  <main >
    <slot />
  </main>
</div>



<style>
  nav {
    @apply border-[1px] border-border max-w-[1200px] mx-auto p-1 px-3 bg-navbar flex justify-between items-center;
  }
  button {
    @apply rounded-full bg-primary p-2 px-4 min-w-32 min-h-8
  }
  a {
    @apply text-sm text-text
  }
</style>