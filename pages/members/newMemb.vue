<template>
    <div>
        <div class="">
            <button class="btn btn-info ml-4" @click="$router.push('/members')">back</button>
        </div>
        <div class="h-4/5 flex items-center justify-center">
            <div class="card card-compact border-4 border-indigo-500/75 my-10">
                <h2 class="text-3xl text-white text-center mt-6">agregar miembro</h2>
                <div class="card-body items-center text-center">
                    <div class="flex justify-center mt-6 w-80">
                        <input type="text" class="input input-bordered bg-slate-950 input-sm w-full rounded text-white"
                            name="username" placeholder="nombre y apellido" required>
                    </div>
                    <h1 class="mt-6"> foto de perfil</h1>
                    <div class="flex justify-center w-80">
                        <input type="file" id="file" accept="image/*">
                    </div>
                    <div class="flex justify-center w-80 mt-6">
                        <input type="text" class="input input-bordered bg-slate-950 input-sm w-full rounded text-white"
                            name="role" placeholder="rol" required>
                    </div>
                    <div class="flex justify-center w-80 mt-6">
                        <input type="email" class="input input-bordered bg-slate-950 input-sm w-full rounded text-white"
                            name="email" placeholder="email" required>
                    </div>
                    <div class="card-actions">
                        <button class="btn btn-accent btn-outline" @click="upload()">agregar</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
function upload() {
    console.log("holaaa")
}
</script>

<style></style>