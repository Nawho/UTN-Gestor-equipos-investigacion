<template>
    <v-main>
    <div class="flex flex-wrap justify-evenly gap-x-[15px] gap-y-[25px] mx-[300px] my-10"  >
        <li class="join" v-for="g in a">
            <grupo :nombre="g.nombre" :image="g.img" :descripcion="g.description"  >  </grupo>
        </li>
    </div>
    </v-main>
</template>
<script setup lang="ts">
import { error } from 'console';

interface group{
    nombre:string,
    description:string,
    img:string
    
}
let groups:group[]=[]
const a = await $fetch('http://localhost:3030/grupo_investigacion').catch((err) => {
    console.error(err.data)
})

console.log(a)
</script>