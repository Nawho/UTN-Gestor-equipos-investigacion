<template>
    <div>
        <h2 class="text-center font-sans text-2xl">Proyectos del grupo Gemis</h2>
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
    <br>
    <div class="flex justify-center" v-for="n in 5">
        <div class="card card-side w-3/4 border-4 border-indigo-500/75 mb-8">
            <div class="flex">
                <img class="rounded-l-xl" src="../../imgs/test.png" alt="Movie" />
            </div>
            <div class="card-body">
                <h2 class="card-title">proyecto1</h2>
                <p>poryectoooooooooo</p>
                <div class="card-actions justify-end">
                    <button class="btn btn-primary">edit</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style></style>