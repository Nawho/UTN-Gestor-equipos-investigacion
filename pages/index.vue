<script setup lang="ts">
import { MyAuthClient, auth0LoginWithPopup } from '../middleware/auth';
</script>
<template>
    <div class="w-100 flex justify-center items-center" style="height: calc(100vh - 64px - 24px)">
        <main class="w-100 h-100">
            <div class="w-100 h-100 flex items-center justify-center ">
                <div class="card bg-gray-800 w-96 text-primary">
                    <div class="card-body">
                        <h1 class="card-title flex justify-center text-2xl text-center ">Login to access the platform</h1>
                        <div class="flex flex-col gap-[20px] items-center mt-5">
                            <!--div class="btn bg-white text-[#7c7c7c] max-w-[250px] hover:bg-gray-400 hover:text-[#1c1c1c] border-none normal-case">
                                <img src="imgs/google_logo.webp" alt="" width="40" height="40" class="float-left"/>
                                <span class="">Google</span>
                            </div>
                            <div class="btn bg-white text-[#7c7c7c] max-w-[250px] hover:bg-gray-400 hover:text-[#1c1c1c] border-none normal-case">
                                <img src="imgs/outlook_logo.webp" alt="" width="32" height="32" class="float-left"/>
                                <span class="">Outlook</span>
                            </div-->

                            <button class="btn btn-primary" @click="MyAuthClient.loginWithPopup()">Login</button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>


<style>
</style>