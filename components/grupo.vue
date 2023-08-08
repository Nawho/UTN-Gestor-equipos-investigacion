<template> 
   <div>
       <div class="card w-96 bg-base-100 shadow-xl bg-primary outline outline-white-500 outline-12 ml-12 mb-12 mt-12 p-12">
  <figure><img :src=image alt="Shoes" /></figure>
  <div class="card-body">
    <h2 class="card-title"> {{ nombre }} </h2>
    <p>{{ descripcion }}</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary bg-[#6B7280] outline outline-12 outline-pink-500 hover:outline-red-500 hover:bg-red-500">Ver grupo</button>
    </div>
  </div>
</div>

    </div>
    </template>
    <style>
    .groupCard{
     background-color: black;   
    }
    </style>

    <script setup>
    const props=defineProps({
        image:{ type: String, requiered:true },
        nombre:{type:String,requiered:true},
        descripcion:{type:String,requiered:true}        
    })
    </script>