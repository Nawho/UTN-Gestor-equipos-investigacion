<template>
    <div>
        <div class="flex justify-center mb-8">
            <img class="h-16" @click="$router.push('../homePage')" src="/imgs/gemis.png" alt="">
        </div>
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
    <div class="mb-6 flex flex-wrap justify-center" >
        <div class="card w-56 h-96 border-4 border-indigo-500/75 m-4" v-for="n in 8">
            <div class="avatar flex justify-center mt-8">
                <div class="w-32 rounded-full ring ring-indigo-500/75 ring-offset-base-100 ring-offset-2">
                    <img src="../../imgs/mrchedda.png" />
                </div>  
            </div>
            <div class="card-body items-center text-center">
                <h2 class="card-title">Mr. Chedda</h2>
                <p>una breve descripcion de Mr. Chedda</p>
                <div class="card-actions">
                    <button class="btn btn-primary">More</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style ></style>