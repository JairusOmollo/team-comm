<template>
    <div class="no-scrollbar">
        <div class=" h-full  ">

            <div class=" bg-gray-50  px-4 rounded-lg   "><!--main container-->
               
                <div class="grid grid-cols-4 h-screen">
                    <!--side-and-main-->
                    <aside class="border-r-2 bg-black text-white p-4"><!--sidebar-->
                        <div><!--logo-->
                        <h2 class="ml-2 text-lg font-xs ">Dagoretti South <span class="font-light"> <span class="text-sky-500 font-bold text-2xl">|</span> Portal</span>
                        </h2>
                    </div>
                        <div><!--sidebar maincontainer-->
                            <RouterLink to="/userdashboard/create-proposal">
                                <div @click="showModal" class="mt-20" ><!--button div-->
                                <button 
                                    class="flex  rounded-lg bg-white  justify-center text-black p-3 space-x-3 hover:bg-opacity-75">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor "
                                        class="w-6 h-6">
                                        <path
                                            d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                                    </svg>
                                    Add new proposal
                                </button>
                            </div>
                            </RouterLink>
                            
                            <div class="mt-12 "><!--other tasks-->
                                <RouterLink to="/userdashboard/my-proposals"
                                    class="text-base flex space-x-2  py-4 rounded-md font-bold focus:border-r-4 focus:border-r-20 focus:bg-gray-800 border-r-sky-400 cursor-pointer hover:bg-gray-700">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                                    </svg>
                                    <p>My Proposals</p>
                                </RouterLink>

                                <a
                                    class="text-base flex space-x-2  py-4 rounded-md font-bold focus:border-r-4 focus:border-r-20 focus:bg-gray-800 border-r-sky-400 cursor-pointer hover:bg-gray-700">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                                    </svg>

                                    <p class="text-base ">Progress reports</p>
                                </a>
                                <RouterLink class="text-base flex space-x-2  py-4 rounded-md font-bold focus:border-r-4 focus:border-r-20 focus:bg-gray-800 border-r-sky-400 cursor-pointer hover:bg-gray-700" to="/profile">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                    </svg>
                                    <p class="text-base ">Institution Profile</p>
                                </RouterLink>
                                    
                               
                              
                            </div>
                        </div>
                    </aside>
                 
                    <main class="col-span-3 overflow-scroll ">
                        <RouterView></RouterView>
                    </main><!--main dashboard-->
                </div>

            </div>
        </div>
    </div>
</template>

<script>
import { RouterLink, RouterView } from "vue-router";
import Createprop from "../components/CreateProp.vue";
import Nav from "../components/Navi.vue";

export default {
    components: { Createprop, Nav },

    data() {
        return {
            active: false,
            loadModal: false
        }
    },
    methods: {
        showModal() {
            const mySideAndMainDiv = this.$el.querySelector('#sideAndMain')
            

            this.active = true
            this.loadModal = true
        },
        tellme() {
            console.log('...hit button')
        }
    }
}
</script>

<style>


</style>