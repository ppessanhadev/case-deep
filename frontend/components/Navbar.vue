<template>
  <nav class="fixed flex flex-col items-center w-16 hover:w-60 h-screen bg-gray-100 border-r border-gray-300 left-0 group">
    <NuxtLink class="w-full flex items-center group-hover:justify-start group-hover:pl-2 hover:bg-slate-200 py-2" to="/">
      <SVGBranch class="fill-slate-700 w-10 h-10 mx-auto group-hover:mx-0" />
      <h2 class="hidden group-hover:inline-block text-lg text-slate-700 font-bold">
        Afiliados
      </h2>
    </NuxtLink>

    <NuxtLink class="w-full flex items-center group-hover:justify-start group-hover:pl-2 hover:bg-slate-200 py-2" to="/air-conditioner">
      <SVGAirConditioner class="text-slate-700 w-10 h-10 mx-auto group-hover:mx-0" />
      <h2 class="hidden group-hover:inline-block text-lg text-slate-700 font-bold">
        Ares Condicionados
      </h2>
    </NuxtLink>

    <NuxtLink class="w-full flex items-center group-hover:justify-start group-hover:pl-2 hover:bg-slate-200 py-2" to="/computer">
      <SVGComputer class="fill-slate-700 w-10 h-10 mx-auto group-hover:mx-0" />
      <h2 class="hidden group-hover:inline-block text-lg text-slate-700 font-bold">
        Computadores
      </h2>
    </NuxtLink>
  </nav>
</template>
