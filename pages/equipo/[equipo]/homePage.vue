<template>
    <div>
        <div class="flex justify-center mb-8">
            <img class="h-16" :src="d.img" alt="">
        </div>
        <div class="flex justify-around">
            <div>
                <button class="btn btn-primary" @click="$router.push('../'+equipo+'/homePage')">home page</button>
            </div>
            <div>
                <button class="btn btn-primary" @click="$router.push('../'+equipo+'/projects')">projects</button>
            </div>
            <div>
                <button class="btn btn-primary" @click="$router.push('../'+equipo+'/activities')">activities</button>
            </div>
            <div>
                <button class="btn btn-primary" @click="$router.push('../'+equipo+'/members')">members</button>
            </div>
        </div>
    </div>
    <div class="m-8">
        <h1 class="text-xl font-bold underline underline-offset-2">Sobre {{ dat.nombre }}</h1>
        <p class="text-base/7" v-for=" x in dat.home">
            {{ x }}
            <br>
        </p>
    </div>
</template>

<script setup lang="ts">
const {equipo} = useRoute().params;
console.log(equipo);

const d = await $fetch('http://localhost:3030/grupo_investigacion/');
let dat:any;
d.forEach(element => {
    if(element.nombre==equipo){
        dat=element;
    }
});

</script>

<style scoped></style>