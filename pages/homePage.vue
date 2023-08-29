<template>
    <div>
        <div class="flex justify-center mb-8">
            <img class="h-16" src="/imgs/gemis.png" alt="">
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
    <div class="m-8">
        <h1 class="text-xl font-bold underline underline-offset-2">Sobre nosotros</h1>
        <p class="text-base/7">El grupo GEMIS se conformó en el año 2009 bajo la dirección de la Dra. Ing. Florencia
            Pollo-Cattaneo. Desde ese
            momento y sostenidamente, se integró un equipo de docentes y alumnos con interés en la investigación, la
            sistematización de cuerpos de conocimientos y promoción sobre el campo de la Ingeniería en Sistemas de
            Información y la Ingeniería en Software, sus aplicaciones y abordajes metodológicos en todo tipo de escenarios
            convencionales y no convencionales. Inicialmente el Dr. Ing. Pablo Pytel participó en la dirección de proyectos,
            rol que en los últimos años también tomó el Mg. Ing. Luciano Straccia. </p>
        <br>
        <p class="text-base/7">Quienes integramos el grupo GEMIS poseemos una firme vocación de trabajo en las áreas de
            informática, sistemas de
            información, metodología y buenas prácticas, ingeniería en software, sistemas inteligentes y su vinculación con
            la explotación de información y tecnología educativa, de manera tal que se canaliza y provee una base
            sustentable de aporte a los proyectos en desarrollo.</p>
        <br>
        <p class="text-base/7">Llevamos adelante diversas actividades buscando contribuir al rol de las instituciones de
            educación superior y su
            relación con las organizaciones del sector productivo y de servicios y la sociedad en general. Por ello
            desarrollamos proyectos de investigación y desarrollo, proyectos de transferencia tecnológica y de extensión.
            Además desarrollamos planes de formación y capacitación.</p>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped></style>