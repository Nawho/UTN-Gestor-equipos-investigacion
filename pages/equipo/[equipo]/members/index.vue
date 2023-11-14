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
    <div class="mb-6 flex flex-wrap justify-center" >
        <div class="card w-56 h-96 border-4 border-indigo-500/75 m-4" v-for="n in usrs">
            <div class="avatar flex justify-center mt-8">
                <div class="w-32 rounded-full ring ring-indigo-500/75 ring-offset-base-100 ring-offset-2">
                    <img src="/imgs/mrchedda.png" />
                </div>  
            </div>
            <div class="card-body items-center text-center">
                <h2 class="card-title">{{n.nombre}} {{ n.apellido }}</h2>
                <p>{{n.mail}}</p>
                <div class="card-actions">
                    <button class="btn btn-primary" @click="$router.push('/user/'+n._id)" > More </button>
                    
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const {equipo} = useRoute().params;
const a = await $fetch('http://localhost:3030/grupo_investigacion/').catch((err) => {
    console.error(err.data)
})

let e;
a.forEach(element => {
    if(element.nombre == equipo){
        e=element;
    }    
});
console.log(e);
const usrs=ref([])

await e.integrantes.forEach(async element => {
    const x  = await $fetch('http://localhost:3030/user/'+element).catch((err) => {
    console.error(err.data)
})
  usrs.value.push(x);    
}) ;
console.log(usrs);
</script>

<style ></style>