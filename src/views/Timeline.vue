<template>
    <Modal></Modal>
    <div class="bg-slate-50  ">
        <div class="grid grid-cols-timeline  p-4 h-full relative"><!---main container-->
            <div class="border-r-2"><!--left-->
                <div class="pt-5 pb-20"><!--logo-->
                    <h2 class=" fixed text-lg font-xs ">Dagoretti South <span class="font-light"> | Portal</span>
                    </h2>
                </div>
                <div class="fixed"><!---left nav-->
                    <nav>
                        <a href="">
                            <div class="flex p-4 ">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor" class="w-8 h-10">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                                    </svg>
                                </div>
                                <div class="px-2 text-lg py-2">Home</div>
                            </div>
                            <div class="flex p-4 ">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor" class="w-8 h-10">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                                    </svg>
                                </div>
                                <div class="px-2 text-lg py-2">Projects</div>
                            </div>
                            <div class="flex  p-4 ">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor" class="w-8 10-6">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5" />
                                    </svg>

                                </div>
                                <div class="px-2 text-lg ">Notification</div>
                            </div>
                        </a>
                    </nav>
                </div>
            </div>
            <div class=" border-r-2"><!--right feed-->
                <div class="grid grid-cols-3  sticky top-0 pt-20 bg-slate-50 "><!--pivot menu-->
                    <div class="flex hover:bg-slate-200  place-items-center justify-center ">
                        <a href="">
                            <div class="">
                                <div class=" pt-4">
                                    <div class="hover:font-semibold">Seen by Committe</div>
                                   
                                </div>
                                <div class="h-1 mt-1 bg-sky-500"></div>
                            </div>
                        </a>
                    </div>
                    <div class="flex hover:bg-slate-200  place-items-center justify-center ">
                        <a href="">
                            <div class="">
                                <div class=" pt-4">
                                    <div class="">Still in Queue</div>
                                   
                                </div>
                                <div class="h-1 mt-1 bg-sky-500"></div>
                            </div>
                        </a>
                    </div>
                   
                    <div class="flex hover:bg-slate-200  place-items-center justify-center ">
                        <a href="">
                            <div class="">
                                <div class=" pt-4">
                                    <div class="">Approved by MP</div>
                                   
                                </div>
                                <div class="h-1 mt-1 bg-sky-500 w-"></div>
                            </div>
                        </a>
                    </div>
                </div>
                <hr>
                <div class="p-10 mt-6"><!--timeline-->
                    <div class="flex space-x-2"><!--proposal card-->
                        <div><!---heading and proposer first name letter--><span
                                class="bg-sky-500 p-2 rounded-full w-42 text-center text-lg text-white">PO</span>
                        </div>
                        <div>
                            <div class="flex space-x-4"><!--username and date-->
                                <span class=" font-semibold">Peter Oposdiid</span>
                                <span>Ndurarwa Primary School</span>
                                <time class="text-gray-500">Feb 14</time>
                            </div>
                            <div class="pb-2 text-lg"><!--project summary-->
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam quo minus maiores est
                                aperiam tenetur nisi dicta voluptas vel repellendus!
                            </div>
                            <div class="flex w-full space-x-7 text-gray-400 pt-2 text-xs">
                                <!---views and comment section-->
                                <div class="flex p-2 rounded-md hover:bg-slate-200 "><!---view icon and count -->
                                    <div class="">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <div class="flex  py-1 ">
                                        <div class="px-1">2</div>
                                        <div class="">Views</div>
                                    </div>
                                </div>
                                <div class="flex p-2 rounded-md hover:bg-slate-200 ">
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                                        </svg>

                                    </div>
                                    <div class="flex  py-1">
                                        <div class="px-1">13</div>
                                        <div class="">Comments</div>
                                    </div>
                                </div>
                                <div class="flex p-2 rounded-md hover:bg-slate-100 hover:cursor-pointer">
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>

                                    </div>
                                    <div class="flex py-1">
                                        <div class="px-1">Approve</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div><!--end of proposal card-->
                    <div class="flex space-x-2 p-4 w-full "><!--proposal card-->
                        <div><!---heading and proposer first name letter--><span
                                class="bg-sky-500 p-2 rounded-full w-42 text-center text-lg text-white">PO</span>
                        </div>
                        <div>
                            <div class="flex space-x-4"><!--username and date-->
                                <span class=" font-semibold">Peter Oposdiid</span>
                                <span>Ndurarwa Primary School</span>
                                <time class="text-gray-500">Feb 14</time>
                            </div>
                            <div class="pb-2 text-lg"><!--project summary-->
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam quo minus maiores est
                                aperiam tenetur nisi dicta voluptas vel repellendus!
                            </div>
                            <div class="flex w-full space-x-7 text-gray-400 pt-2 text-xs">
                                <!---views and comment section-->
                                <div class="flex p-2 rounded-md hover:bg-slate-200 "><!---view icon and count -->
                                    <div class="">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <div class="flex  py-1 ">
                                        <div class="px-1">2</div>
                                        <div class="">Views</div>
                                    </div>
                                </div>
                                <div class="flex p-2 rounded-md hover:bg-slate-200 ">
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                                        </svg>

                                    </div>
                                    <div class="flex  py-1">
                                        <div class="px-1">13</div>
                                        <div class="">Comments</div>
                                    </div>
                                </div>
                                <div class="flex p-2 rounded-md hover:bg-slate-100 hover:cursor-pointer">
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>

                                    </div>
                                    <div class="flex py-1">
                                        <div class="px-1">Approve</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div><!--end of proposal card-->
                    <div class="flex space-x-2 p-4 w-full "><!--proposal card-->
                        <div><!---heading and proposer first name letter--><span
                                class="bg-sky-500 p-2 rounded-full w-42 text-center text-lg text-white">PO</span>
                        </div>
                        <div>
                            <div class="flex space-x-4"><!--username and date-->
                                <span class=" font-semibold">Peter Oposdiid</span>
                                <span>Ndurarwa Primary School</span>
                                <time class="text-gray-500">Feb 14</time>
                            </div>
                            <div class="pb-2 text-lg"><!--project summary-->
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam quo minus maiores est
                                aperiam tenetur nisi dicta voluptas vel repellendus!
                            </div>
                            <div class="flex w-full space-x-7 text-gray-400 pt-2 text-xs">
                                <!---views and comment section-->
                                <div class="flex p-2 rounded-md hover:bg-slate-200 "><!---view icon and count -->
                                    <div class="">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <div class="flex  py-1 ">
                                        <div class="px-1">2</div>
                                        <div class="">Views</div>
                                    </div>
                                </div>
                                <div class="flex p-2 rounded-md hover:bg-slate-200 ">
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                                        </svg>

                                    </div>
                                    <div class="flex  py-1">
                                        <div class="px-1">13</div>
                                        <div class="">Comments</div>
                                    </div>
                                </div>
                                <div class="flex p-2 rounded-md hover:bg-slate-100 hover:cursor-pointer">
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>

                                    </div>
                                    <div class="flex py-1">
                                        <div class="px-1">Approve</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div><!--end of proposal card-->
                    <div class="flex space-x-2 p-4 w-full "><!--proposal card-->
                        <div><!---heading and proposer first name letter--><span
                                class="bg-sky-500 p-2 rounded-full w-42 text-center text-lg text-white">PO</span>
                        </div>
                        <div>
                            <div class="flex space-x-4"><!--username and date-->
                                <span class=" font-semibold">Peter Oposdiid</span>
                                <span>Ndurarwa Primary School</span>
                                <time class="text-gray-500">Feb 14</time>
                            </div>
                            <div class="pb-2 text-lg"><!--project summary-->
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam quo minus maiores est
                                aperiam tenetur nisi dicta voluptas vel repellendus!
                            </div>
                            <div class="flex w-full space-x-7 text-gray-400 pt-2 text-xs">
                                <!---views and comment section-->
                                <div class="flex p-2 rounded-md hover:bg-slate-200 "><!---view icon and count -->
                                    <div class="">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <div class="flex  py-1 ">
                                        <div class="px-1">2</div>
                                        <div class="">Views</div>
                                    </div>
                                </div>
                                <div class="flex p-2 rounded-md hover:bg-slate-200 ">
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                                        </svg>

                                    </div>
                                    <div class="flex  py-1">
                                        <div class="px-1">13</div>
                                        <div class="">Comments</div>
                                    </div>
                                </div>
                                <div class="flex p-2 rounded-md hover:bg-slate-100 hover:cursor-pointer">
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>

                                    </div>
                                    <div class="flex py-1">
                                        <div class="px-1">Approve</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div><!--end of proposal card-->
                </div>
                
            </div>
            <div class=""><!---begin of last div-->


            </div>
        </div>
    </div>
</template>

<script>
import { RouterLink, RouterView } from "vue-router";
import Navi from "../components/Navi.vue";
import Modal from "../components/Modal.vue";

export default {
    components: { Navi, Modal }

}
</script>


<style lang="scss" scoped>

</style>