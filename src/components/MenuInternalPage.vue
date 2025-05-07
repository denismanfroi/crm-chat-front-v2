<script setup>
const props = defineProps({
  icon: {
    type: String,
    default: null,
  },
  title: {
    type: String,
    default: 'Título',
  },
})

const icons = {
  batePapo:
    'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzA2IiBoZWlnaHQ9IjMwNiIgdmlld0JveD0iMCAwIDMwNiAzMDYiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0xNTMgMjkzLjI1QzIzMC40NTggMjkzLjI1IDI5My4yNSAyMzAuNDU4IDI5My4yNSAxNTNDMjkzLjI1IDc1LjU0MjEgMjMwLjQ1OCAxMi43NSAxNTMgMTIuNzVDNzUuNTQyMSAxMi43NSAxMi43NSA3NS41NDIxIDEyLjc1IDE1M0MxMi43NSAxNzUuNDM1IDE4LjAxOCAxOTYuNjQxIDI3LjM4NDYgMjE1LjQ0NkMyOS44NzM2IDIyMC40NDQgMzAuNzAyMSAyMjYuMTU2IDI5LjI1OTEgMjMxLjU0OUwyMC45MDU3IDI2Mi43NjlDMTcuMjc5NCAyNzYuMzIyIDI5LjY3ODQgMjg4LjcyIDQzLjIzMTIgMjg1LjA5NEw3NC40NTEzIDI3Ni43NDFDNzkuODQ0NyAyNzUuMjk4IDg1LjU1NjcgMjc2LjEyNyA5MC41NTQxIDI3OC42MTZDMTA5LjM1OSAyODcuOTgyIDEzMC41NjUgMjkzLjI1IDE1MyAyOTMuMjVaIiBmaWxsPSIjRjZBMzE3Ii8+CjxwYXRoIGQ9Ik0xMzguOTc1IDE1My4wMDVDMTM4Ljk3NSAxNjAuNzUxIDE0NS4yNTQgMTY3LjAzIDE1MyAxNjcuMDNDMTYwLjc0NiAxNjcuMDMgMTY3LjAyNSAxNjAuNzUxIDE2Ny4wMjUgMTUzLjAwNUMxNjcuMDI1IDE0NS4yNTkgMTYwLjc0NiAxMzguOTggMTUzIDEzOC45OEMxNDUuMjU0IDEzOC45OCAxMzguOTc1IDE0NS4yNTkgMTM4Ljk3NSAxNTMuMDA1WiIgZmlsbD0iI0ZBRDA4QSIvPgo8cGF0aCBkPSJNODIuODc1IDE1My4wMDVDODIuODc1IDE2MC43NTEgODkuMTU0MiAxNjcuMDMgOTYuOSAxNjcuMDNDMTA0LjY0NiAxNjcuMDMgMTEwLjkyNSAxNjAuNzUxIDExMC45MjUgMTUzLjAwNUMxMTAuOTI1IDE0NS4yNTkgMTA0LjY0NiAxMzguOTggOTYuOSAxMzguOThDODkuMTU0MiAxMzguOTggODIuODc1IDE0NS4yNTkgODIuODc1IDE1My4wMDVaIiBmaWxsPSIjRkFEMDhBIi8+CjxwYXRoIGQ9Ik0xOTUuMDc1IDE1My4wMDVDMTk1LjA3NSAxNjAuNzUxIDIwMS4zNTQgMTY3LjAzIDIwOS4xIDE2Ny4wM0MyMTYuODQ2IDE2Ny4wMyAyMjMuMTI1IDE2MC43NTEgMjIzLjEyNSAxNTMuMDA1QzIyMy4xMjUgMTQ1LjI1OSAyMTYuODQ2IDEzOC45OCAyMDkuMSAxMzguOThDMjAxLjM1NCAxMzguOTggMTk1LjA3NSAxNDUuMjU5IDE5NS4wNzUgMTUzLjAwNVoiIGZpbGw9IiNGQUQwOEEiLz4KPC9zdmc+Cg==',
}
</script>

<template>
  <section class="_menu">
    <header>
      <img v-if="icon !== null" :src="icons[icon]" alt="" />
      <h1>{{ title }}</h1>
    </header>

    <slot name="content-menu"></slot>
  </section>
</template>

<style scoped>
._menu {
  background-color: rgba(19, 19, 19, 0.6);
  grid-area: menu;
  max-width: 340px;
  padding: 2rem;
  width: 100vw;

  & header {
    align-items: center;
    display: flex;
    gap: 10px;
    margin-bottom: 30px;

    & img {
      max-width: 26px;
      width: 100%;
    }

    & h1 {
      font-size: 1.4rem;
    }
  }
}
</style>
