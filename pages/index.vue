<script setup lang="ts">
function login() {
    navigateTo("http://localhost:3030/login", { external: true});
}
</script>

<template>
    <div class="w-100 flex justify-center items-center" style="height: calc(100vh - 64px - 24px)">
        <main class="w-100 h-100">
            <div class="w-100 h-100 flex items-center justify-center ">
                <div class="card bg-gray-800 w-96 text-primary">
                    <div class="card-body">
                        <h1 class="card-title flex justify-center text-2xl text-center ">Login to access the platform</h1>
                        <div class="flex flex-col gap-[20px] items-center mt-5">
                            <button class="btn btn-primary" @click="login()">Login</button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>