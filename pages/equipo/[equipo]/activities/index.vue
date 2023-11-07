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
    <div class="flex flex-wrap justify-center">
        <div class="p-8" v-for="n in projectos">
            <div class="card w-96 border-4 border-indigo-500/75">
                <img class="rounded-t-xl" src="/imgs/actividades.png" alt="Shoes" />
                <div class="card-body">
                    <h2 class="card-title">{{n.nombre}}</h2>
                    <div class="badge badge-outline">{{ n.asistencia }}</div>
                    <p>{{ n.descripcionCorta }}</p>
                    <div class="card-actions justify-end">
                        <button class="btn btn-primary">edit</button>
                    </div>
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
    descripcionCorta:string,
    asistencia:string,
    fechaDeInicio:string,
    fechaFinal:string

    
}

const a = await $fetch('http://localhost:3030/grupo_investigacion').catch((err) => {
    console.error(err.data)
})
let projectsID:string[]=[]
const projectos = ref([])

a.forEach(x => {
    console.log(x.nombre);
    if(x.nombre == equipo ){ 
        console.log(x);
        x.actividades.forEach(y => {
            console.log(y.activityid);
            
            projectsID.push(y.activityid);
        });
        
     }
     console.log();
     
     
    
});;
projectsID.forEach( async (x)=>{

    let activity =await $fetch('http://localhost:3030/actividad/'+x) as project 
    console.log(activity);
    
    projectos.value.push( activity )
} )

</script>

<style></style>