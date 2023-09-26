<template>
  <div>
    <div
      class="card place-content-center w-70    bg-[#082f49]  ">
      <figure><img :src=image class="w-20 h-20 mt-10"/></figure>
      <div class="card-body">
        <h2 class="card-title"> {{ nombre }} </h2>
        <p>{{ descripcion }}</p>
        <div class="card-actions  justify-center" >
          <button
            class="btn btn-primary bg-[#3abff8]    hover:outline-red-500 hover:bg-red-500" @click="$router.push('/equipo/projects')" >Ver
            grupo</button>
        </div>
      </div>
    </div>

  </div>
</template>
<style>
.groupCard {
  background-color: black;
}
</style>

<script setup>

const props = defineProps({
  image: { type: String, requiered: true },
  nombre: { type: String, requiered: true },
  descripcion: { type: String, requiered: true }
})
</script>