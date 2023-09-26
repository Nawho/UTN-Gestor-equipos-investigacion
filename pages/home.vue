<template>
    <v-main>
    <div class="flex flex-wrap justify-evenly gap-x-[15px] gap-y-[25px] mx-[300px] my-10"  >
        <li class="join" v-for="g in groups">
            <grupo :nombre="g.name" :image="g.img" :descripcion="g.description"  >  </grupo>
        </li>
    </div>
    </v-main>
</template>
<script setup lang="ts">
import { error } from 'console';

interface group{
    name:string,
    description:string,
    img:string
    
}
let groups:group[]=[]
for (let index = 0; index < 79; index++) {
       let x = {
        img: 'imgs/logo_ppal.png',
        name:'Gemis',
        description:'Grupo De Investigación'
       }

       groups.push( x as group )
}

const a = await $fetch('http://localhost:3003/user').catch((err) => {
    console.error(err.data)
})

console.log(a)
</script>