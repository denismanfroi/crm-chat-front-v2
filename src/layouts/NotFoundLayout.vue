<template>
  <div class="notfound-guest">
    <router-view />
  </div>
</template>

<style scoped>
.notfound-guest {
  background-image:
    linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.5)),
    url('https://cdn.prod.website-files.com/646b6f3bf6907682fc10812f/66954be6b7427a772916d5f5_663d1f9fd45bf4919cc2004c_site%20crm%201920x1080%20preto%20final.webp');
  background-size: cover;
  background-position: center;
  display: grid;
  height: 100dvh;
  padding: 0 1.4rem;
  place-items: center;
}
</style>
