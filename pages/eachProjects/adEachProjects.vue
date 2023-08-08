<template>
    <div>
        <h1>Nombre del projecto</h1>
        <div class="fechas">
            <p>Fecha inicio</p>
            <p>Fecha final</p>
        </div>
        <p>Descripcion del projecto: Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, libero voluptatem? Aliquam quaerat provident quam est nam laboriosam illum iure corporis numquam a, expedita aspernatur nobis vero autem illo reiciendis.</p>
        <div class="integrantes" @click="$router.push('/eachProjects/adEachProjects')">
            <p>Nombre del integrante</p>
            <p>Rol</p>
        </div>
</div>    
</template>

<script setup></script>