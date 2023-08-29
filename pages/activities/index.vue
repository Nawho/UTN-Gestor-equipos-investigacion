<template>
    <div>
        <h2 class="text-center font-sans text-2xl">Actividades del grupo Gemis</h2>
        <br>
        <div class="flex justify-around">
            <div>
                <button class="btn btn-primary" @click="$router.push('../homePage')">home page</button>
            </div>
            <div>
                <button class="btn btn-primary" @click="$router.push('../projects')">projects</button>
            </div>
            <div>
                <button class="btn btn-primary" @click="$router.push('../activities')">activities</button>
            </div>
            <div>
                <button class="btn btn-primary" @click="$router.push('../members')">members</button>
            </div>
        </div>
    </div>
    <div class="flex flex-wrap justify-center">
        <div class="p-8" v-for="n in 6">
            <div class="card w-96 border-4 border-indigo-500/75">
                <img class="rounded-t-xl" src="../../imgs/actividades.png" alt="Shoes" />
                <div class="card-body">
                    <h2 class="card-title">Actividad epicaa</h2>
                    <div class="badge badge-outline">Presencial</div>
                    <p>queres ser tu propio jefe ???</p>
                    <div class="card-actions justify-end">
                        <button class="btn btn-primary">edit</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style></style>