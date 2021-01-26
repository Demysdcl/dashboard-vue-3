<script>
export default {
  setup(_, { emit }) {
    const it = { emit }
    return it
  },
}
</script>

<template>
  <header class="header pt-5">
    <div class="header-group">
      <section class="flex items-center justify-between">
        <div class="w-28 lg:w-36">
          <img
            class="w-full"
            src="../../assets/images/logo_white.png"
            alt="logo"
          />
        </div>

        <div class="flex">
          <button
            @click="() => emit('create-account')"
            class="px-6 py-2 font-bold rounded-full text-white focus:outline-none"
          >
            Crie uma conta
          </button>

          <button
            @click="() => emit('login')"
            class="px-6 py-2 font-bold bg-white rounded-full text-brand-main focus:outline-none"
          >
            Entrar
          </button>
        </div>
      </section>

      <section class="flex flex-col mt-28">
        <h1 class="text-4xl font-black text-white">
          Tenha um feedback <br />
          E faça seus clientes mais <br class="hidden lg:inline-block" />
          felizes!
        </h1>
        <p class="text-lg font-medium text-white">
          Receba ideias, reclamoções e feedbacks com um
          <br class="hidden lg:inline-block" />
          simples widget na página
        </p>
        <div>
          <button
            class="px-6 py-2 font-bold mt-10 bg-white rounded-full text-brand-main focus:outline-none"
          >
            Crie uma conta grátis
          </button>
        </div>
      </section>
    </div>
  </header>
</template>

<style lang="postcss" scoped>
.header {
  @apply bg-brand-main w-full flex justify-center;
  height: 700px;
}

.header-group {
  @apply flex flex-col w-4/5 max-w-6xl;
}

@media (min-width: 640px) {
  .header-group {
    background-image: url(../../assets/images/blue_balloons.png);
    background-size: 628px;
    background-position: 90% 100%;
    background-repeat: no-repeat;
  }
}
</style>
