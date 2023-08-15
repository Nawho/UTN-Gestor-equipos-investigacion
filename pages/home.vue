<template>
    <v-main> 
    <li class="join" v-for="g in groups">
    <grupo :nombre="g.name" :image="g.img" :descripcion="g.description" >  </grupo>
    </li>
    </v-main>
</template>
<script setup lang="ts">
interface group{
    name:string,
    description:string,
    img:string
    
}
let groups:group[]=[]
for (let index = 0; index < 12; index++) {
       let x = {
        img: 'imgs/google_logo.webp',
        name:'Gemis',
        description:'Como la ferrere, pero mejor'
       }

       groups.push( x as group )
}
</script>