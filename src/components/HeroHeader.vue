
<template>
  <section class="bg-cover bg-center h-[80vh] flex items-center justify-center text-white relative" style="background-image: url('https://source.unsplash.com/1600x900/?travel,vacation,beach')">
    <div class="absolute inset-0 bg-black bg-opacity-50"></div>

    <div class="relative z-10 text-center px-4 max-w-2xl">
      <h1 class="text-4xl md:text-5xl font-bold mb-4">Explorez le monde avec nous</h1>
      <p class="text-lg md:text-xl mb-6">
        Découvrez des destinations inoubliables et vivez des aventures extraordinaires. Réservez votre prochain voyage dès aujourd'hui.
      </p>
      <RouterLink
        to="/packages"
        class="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-xl transition duration-300"
      >
        Voir les forfaits
      </RouterLink>
    </div>
  </section>
</template>
