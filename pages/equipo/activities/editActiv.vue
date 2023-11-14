<template>
    <div class="">
        <button class="btn btn-info ml-4" @click="$router.push('/activities')">back</button>
    </div>
    <div class="h-4/5 flex items-center justify-center">    
        <div class="card card-compact border-4 border-indigo-75 my-10">
            <h2 class="text-3xl text-white text-center mt-6">subir actividad</h2>
            <div class="card-body items-center text-center">
                <div class="flex justify-center mt-6 w-96">
                    <input type="text" class="input input-bordered bg-slate-950 input-sm w-full rounded text-white" name="username" placeholder="nombre de la actividad" required>
                </div>
                
            <h1 class="mt-6">fecha de publicación</h1>
            <div class="flex justify-center w-96">
                <input type="date" class="input input-bordered bg-slate-950 input-sm w-full rounded text-white"
                    name="fechaFin" required>
            </div>

            <select class="select select-info w-full max-w-xs mt-4">
                <option disabled selected> Localidad </option>
                <option>Presencial</option>
                <option>Virtual</option>
            </select>
            <div class="flex justify-center mt-6">
                <textarea class="textarea textarea-bordered bg-slate-950 w-96 h-40  " placeholder="descripcion"></textarea>
            </div>
                <div class="card-actions mt-4">
                    <button class="btn btn-accent btn-outline" >subir</button><!-- @click="upload()" -->
                </div>
            </div>
        </div>
    </div>
</template>