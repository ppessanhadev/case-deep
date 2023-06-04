<template>
  <table class="w-[80%] mx-auto">
    <thead class="[&>tr>th]:p-2 [&>tr>th]:text-left [&>tr>th]:border [&>tr>th]:border-slate-300">
      <tr class="border border-slate-300 bg-gray-200">
        <th>ID</th>
        <th>Computador</th>
        <th>Descrição</th>
        <th>Quantidade</th>
        <th>Marca</th>
        <th width="1">
          Ações
        </th>
      </tr>
    </thead>

    <tbody class="[&>tr>td]:p-2 [&>tr>td]:border [&>tr>td]:border-slate-300">
      <tr>
        <td>Alfreds Futterkiste</td>
        <td>Maria Anders</td>
        <td>Germany</td>
        <td>25</td>
        <td>15000</td>
        <td class="text-center">
          <button>
            <SVGVerticalThreeDots class="w-6 h-6 fill-slate-400" />
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>
