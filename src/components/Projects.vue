<template>
    <div v-show="showModal">
        <Modal @clickedModal="putModal"></Modal>
    </div>
    <div class=""><!--right timelime-->
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
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="currentColor" class="w-6 h-6">
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
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                                </svg>

                            </div>
                            <div class="flex  py-1" v-on:click="putModal">
                                <div class="px-1">13</div>
                                <div class="">Comments</div>
                            </div>
                        </div>
                        <div class="flex p-2 rounded-md hover:bg-slate-100 hover:cursor-pointer">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="currentColor" class="w-6 h-6">
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
                        <span class=" font-semibold">Peter Eunice</span>
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
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="currentColor" class="w-6 h-6">
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
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="currentColor" class="w-6 h-6">
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
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="currentColor" class="w-6 h-6">
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
                        <span class=" font-semibold">John Doe</span>
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
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="currentColor" class="w-6 h-6">
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
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="currentColor" class="w-6 h-6">
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
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="currentColor" class="w-6 h-6">
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
                        <span class=" font-semibold">Kevin Joel</span>
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
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="currentColor" class="w-6 h-6">
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
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="currentColor" class="w-6 h-6">
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
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="currentColor" class="w-6 h-6">
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
</template>

<script>
import Modal from '../components/Modal.vue'
export default {
    components: { Modal },
    data() {
        return {
            showModal: false
        }
    },
    methods: {
        putModal(){
            this.showModal = !this.showModal
        }
    }
}
</script>

<style lang="scss" scoped></style>