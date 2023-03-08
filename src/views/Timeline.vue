<template>
  
    <div class="">
        <div class="grid grid-cols-timeline  h-full relative"><!---main container-->
            <div class="border-r-2 bg-black min-h-screen text-gray-400 "><!--left-->
                <div class="pt-5 pb-20"><!--logo-->
                    <h2 class=" fixed text-lg font-xs text-white px-5 ">Dagoretti South <span class="font-light"> | Portal</span>
                    </h2>
                </div>
                <div class="fixed "><!---left nav-->
                    <nav>
                        <div class="flex p-4">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="currentColor" class="w-8 h-10">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                                </svg>
                            </div>
                            <RouterLink to="/timeline/pulse">
                                <div class="px-2 text-lg py-2">Home</div>
                            </RouterLink>
                            
                        </div>
                        <div class="flex p-4 ">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="currentColor" class="w-8 h-10">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                                </svg>
                            </div>
                            <RouterLink to="/timeline/projects">
                                <div class="px-2 text-lg py-2">Projects</div>
                            </RouterLink>
                        </div>
                        <div class="flex  p-4 ">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="currentColor" class="w-8 10-6">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5" />
                                </svg>

                            </div>
                            <div class="px-2 text-lg ">Messages</div>
                        </div>
                    </nav>
                </div>
            </div>
            <div class=" col-span-2"><!--right feed-->
                <RouterView></RouterView>
            </div>
            <div class=""><!---begin of last div-->


            </div>
        </div>
    </div>
</template>

<script>
import { RouterLink, RouterView } from "vue-router";
import Navi from "../components/Navi.vue";
import Projects from "../components/Projects.vue";

export default {
    components: { Navi,  Projects },
    data() {
        return {
              
        }
    },
    methods: {
       
    }



}
</script>


<style lang="scss" scoped></style>