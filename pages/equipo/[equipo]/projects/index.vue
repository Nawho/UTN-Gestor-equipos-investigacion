<template>
    <div>
        <div class="flex justify-center mb-8">
            <img class="h-16" @click="$router.push('../'+equipo+'/homePage')" src="/imgs/gemis.png" alt="">
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
    <br>
    <div class="flex justify-center" v-for="n in projectos">
        <div class="card card-side w-3/4 border-4 border-indigo-500/75 mb-8">
            <div class="flex">
                <img class="rounded-l-xl" :src=n.img alt="Movie" />
            </div>
            <div class="card-body">
                <h2 class="card-title">{{n.nombre}}</h2>
                <p>{{n.descripcion}}</p>
                <div class="card-actions justify-end">
                    <button class="btn btn-primary" @click="$router.push('projects/'+n.nombre)">edit</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { error } from 'console';
const {equipo} = useRoute().params;
interface project{
    nombre:string,
    descripcion:string,
    fechaDeInicio:string,
    fechaFinal:string

    
}

const a = await $fetch('http://localhost:3030/grupo_investigacion').catch((err) => {
    console.error(err.data)
})

const projectos=ref([])

a.forEach(async x => {
    console.log(x.nombre);
    if(x.nombre == equipo ){ 
        console.log(x._id);
        x.proyectos.forEach(async y => {
            console.log(y);
            
            projectos.value.push( await $fetch('http://localhost:3030/proyecto/'+y) );
        });
        
     }
     console.log();
     
     
    
});;

</script>
<style></style>


