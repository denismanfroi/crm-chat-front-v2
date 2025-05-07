<template>
  <div class="page">
    <section class="_menu">
      <h1>Menu</h1>
    </section>

    <div class="_content">
      <h1>Bate Papo</h1>
    </div>
  </div>
</template>

<style scoped>
.page {
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-areas: 'menu content';
  height: 100%;
  width: 100%;
  color: white;

  & ._menu {
    background-color: rgba(19, 19, 19, 0.6);
    grid-area: menu;
    max-width: 340px;
    padding: 2rem;
    width: 100vw;
  }

  & ._content {
    grid-area: content;
    padding: 2rem;
  }
}
</style>
