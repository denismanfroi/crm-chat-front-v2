<template>
  <div class="container-guest">
    <router-view />
  </div>
</template>

<style>
.container-guest {
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

[class^='flow'] {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto 1fr;
  grid-template-areas:
    'logo logo . .'
    '. card-container card-container card-container';
  max-width: 700px;
  width: 100%;

  @media (max-width: 747px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      'logo'
      'card-container';
  }

  & .logo {
    display: grid;
    grid-area: logo;
    grid-template-columns: 179px auto;
    width: 100%;
    z-index: 1;

    & img {
      max-width: 179px;
    }

    @media (max-width: 747px) {
      grid-template-columns: 120px auto;

      & img {
        max-width: 120px;
      }
    }
  }

  & .card-container {
    background: linear-gradient(to bottom, #f6a317 0%, #d98600 100%);
    border-radius: 0 50px 50px 50px;
    grid-area: card-container;
    padding: 3rem;
    width: 100%;

    @media (max-width: 747px) {
      border-radius: 0 25px 25px 25px;
      padding: 2rem;
    }

    & form {
      display: flex;
      flex-direction: column;
    }

    & :where(input, select) {
      background-color: rgba(255, 255, 255, 0.548);
      border: none;
      margin-bottom: 1rem;
      padding: 0.75rem;
      border-radius: 5px;
      font-size: 1rem;
      outline: none;

      &:focus {
        background-color: white;
      }
    }

    & button {
      padding: 1rem 2rem;
      background-color: var(--black);
      color: white;
      font-size: 1.1rem;
      border: none;
      border-radius: 6px;
      cursor: pointer;
      -webkit-transition: background 0.2s ease-in-out;
      -moz-transition: background 0.2s ease-in-out;
      -ms-transition: background 0.2s ease-in-out;
      -o-transition: background 0.2s ease-in-out;
      transition: background 0.2s ease-in-out;

      &:hover {
        background-color: var(--orange_hover);
      }
    }

    & .social-login {
      border-top: 1px solid var(--orange_hover);
      display: grid;
      margin-top: 30px;
      padding-top: 30px;
      place-items: center;

      & button {
        background-color: rgba(255, 255, 255, 0.685);
        display: grid;
        place-items: center;

        &:hover {
          background-color: rgb(255, 255, 255);
        }
      }
    }

    & .error {
      background-color: rgba(0, 0, 0, 0.685);
      border-radius: 4px;
      margin-top: 1rem;
      color: rgb(255, 255, 255);
      font-size: 1rem;
      font-weight: bold;
      padding: 1rem;
      text-align: center;
    }

    & .success {
      background-color: rgba(0, 0, 0, 0.685);
      border-radius: 4px;
      margin-top: 1rem;
      color: rgb(50, 173, 1);
      font-size: 1rem;
      font-weight: bold;
      padding: 1rem;
      text-align: center;
    }
  }
}
</style>
