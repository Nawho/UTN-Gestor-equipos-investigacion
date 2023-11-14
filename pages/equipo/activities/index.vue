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
    <div class="flex justify-end my-4 mr-28 ">
        <button class="btn btn-secondary" @click="$router.push('activities/newActiv')">agregar actividad</button>
    </div>
    <div class="flex flex-wrap justify-center">
        <div class="p-8" v-for="n in 6">
            <div class="card w-96 border-4 border-indigo-500/75">
                <!--<img class="rounded-t-xl" src="../../imgs/actividades.png" alt="Shoes" />-->
                <div class="card-body">
                    <h2 class="card-title">Actividad epicaa</h2>
                    <div class="badge badge-outline">Presencial</div>
                    <p>queres ser tu propio jefe ???</p>
                    <div class="card-actions justify-end">
                        <button @click="$router.push('activities/editActiv')" class="btn btn-primary">edit</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>


<!--
<template>
    <div style="display: flex; flex-direction: column; width: 70%; margin: auto;">
      <h1 class="text-center font-sans text-2xl">Actividades de (nombre del projecto)</h1>
      <p class="publicartexto">Publique algo!</p>
      <textarea placeholder="Escriba aqui..." style="background-color: #21325a;height: 125px; padding: 6px; border-radius: 10px;" name="" id="" cols="30" rows="10"></textarea>
      <button class="button-64" role="button"><span class="text">Publicar</span></button>
      
      <p style="font-size: large; margin-bottom:1%">Publicaciones anteriores</p>
      <div class="mockup-browser border bg-base-300 mb-4" style="border-color: #6cc0e4;">
        <div class="mockup-browser-toolbar">
          <div class="input" style="padding-top: 1%;">@nombreusuario <span style="color:#61697c;">12/03/2022</span></div>
        </div>
        <div class="flex px-4 py-4 bg-base-200">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est aliquid atque molestias harum. Quas excepturi qui ab libero, quae fugiat dolorum blanditiis, doloribus saepe assumenda perferendis aut, fugit itaque atque? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus nulla quis repudiandae, quo distinctio itaque quia omnis autem harum eius dolorum molestias ullam aut vitae laborum neque alias dicta placeat!</div>
      </div>
  
      <div class="mockup-browser border bg-base-300 mb-4" style="border-color: #6cc0e4;">
        <div class="mockup-browser-toolbar">
          <div class="input" style="padding-top: 1%;">@nombreusuario <span style="color:#61697c;">12/03/2022</span></div>
        </div>
        <div class="flex px-4 py-4 bg-base-200"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error quisquam sapiente aliquid. Magni ex possimus repellat quod, quasi voluptatibus reprehenderit! Cumque veniam odit, sit incidunt sed blanditiis voluptates possimus velit?Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente laboriosam tempora eaque tempore, delectus deserunt dignissimos officia eum quia, nostrum reiciendis et provident possimus necessitatibus odit nulla voluptate praesentium omnis? lorem Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est aliquid atque molestias harum. Quas excepturi qui ab libero, quae fugiat dolorum blanditiis, doloribus saepe assumenda perferendis aut, fugit itaque atque? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus nulla quis repudiandae, quo distinctio itaque quia omnis autem harum eius dolorum molestias ullam aut vitae laborum neque alias dicta placeat!</div>
      </div>
  
      <div class="mockup-browser border bg-base-300 mb-4" style="border-color: #6cc0e4; margin-bottom: 2.5%;">
        <div class="mockup-browser-toolbar">
          <div class="input" style="padding-top: 1%;">@nombreusuario <span style="color:#61697c;">12/03/2022</span></div>
        </div>
        <div class="flex px-4 py-4 bg-base-200">Quas excepturi qui ab libero, quae fugiat dolorum blanditiis, doloribus saepe assumenda perferendis aut, fugit itaque atque? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus nulla quis repudiandae, quo distinctio itaque quia omnis autem harum eius dolorum molestias ullam aut vitae laborum neque alias dicta placeat!</div>
      </div>
  
    </div>
    <br><br><br><br>
  </template>
  
  <script setup></script>
  
  <style>
  .publicartexto{
    width: 20%;
    margin-top: 10%;
    background-image: linear-gradient(to right, #b288ff, #05e2ff);
    background-clip: text;
    color: transparent;
  }
  .button-64 {
    margin-bottom: 6%;
    margin-top: 1%;
    align-items: center;
    background-image: linear-gradient(144deg,#AF40FF, #5B42F3 50%,#00DDEB);
    border: 0;
    border-radius: 8px;
    box-shadow: rgba(151, 65, 252, 0.2) 0 15px 30px -5px;
    box-sizing: border-box;
    color: #FFFFFF;
    display: flex;
    font-family: Phantomsans, sans-serif;
    font-size: 20px;
    justify-content: center;
    line-height: 1em;
    max-width: 100%;
    min-width: 140px;
    padding: 1.7px;
    text-decoration: none;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    white-space: nowrap;
    cursor: pointer;
  }
  
  .button-64:active,
  .button-64:hover {
    outline: 0;
  }
  
  .button-64 span {
    background-color: rgb(5, 6, 45);
    padding: 8px 16px;
    border-radius: 6px;
    width: 100%;
    height: 100%;
    transition: 300ms;
  }
  
  .button-64:hover span {
    background: none;
  }
  
  @media (min-width: 768px) {
    .button-64 {
      font-size: 18px;
      min-width: 196px;
    }
  }
  </style>
-->