<template>
    <div class="">
        <div>
            <div class="px-4 mt-6">
                <h3 class="text-base font-semibold  rounded-lg tracking-wider">Status and Overview</h3>
                <p class="text-gray-700 text-base pt-1 "> Select a school from the dropdown and view current needs of each school </p>
            </div>
            <div>
                <div class="px-4 mt-10 grid grid-cols-1">
                    <div class="pt-2">
                        <h3 class="text-xl ">Ndurarua primary school</h3>
                    </div>
                    <div class="pt-1">
                        <select name="" id=""

                            class="  hover:border-sky-300 focus:border-sky-200 focus:outline-none hover:cursor-pointer border-2  py-1 block rounded-lg mt-1 w-64">
                            <option value="rrrr">Select another school</option>
                            <option value="rrrr">Ruthimitu</option>
                            <option value="rrrr">Ngando</option>
                            <option value="rrrr">Uthiru</option>
                            <option value="rrrr">Mutuini</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
        <div class="grid md:grid-rows-2 grid-flow-col gap-5 mt-5 mx-3 grid-rows-5">
            <div class="grid grid-cols-2 gap-3  border-2 rounded-xl shadow-lg"><!--card start here-->
                <div class="p-4 space-y-3 relative">
                    <h3 class="text-sm ">Teachers</h3>
                    <p><span class="text-3xl pr-2 font-semibold">23</span>/ 56</p>
                    <span class="absolute bottom-2 ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-8 h-8 text-sky-600 bg-gray-200 rounded-full p-1">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                        </svg>

                    </span>
                </div>
                <div class="w-1/2 my-4">
                    <div class="grid justify-center py-2">75%</div>
                    <div class="w-full h-2 bg-gray-200 rounded-full ">
                        <div :style="styleObject" class=" h-full text-center text-white  rounded-full"></div>
                    </div>
                </div>

            </div>
            <div class="grid grid-cols-2 gap-3  border-2 rounded-xl shadow-lg"><!--card start here-->
                <div class="p-4 space-y-2 relative">
                    <h3 class="text-sm ">Classrooms</h3>
                    <p><span class="text-3xl pr-2 font-semibold">23</span>/ 56</p>
                    <div class="">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-8 h-8 text-sky-600 bg-gray-200 rounded-full p-1">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
                        </svg>

                    </div>
                </div>
                <div class="w-1/2 my-4">
                    <div class="grid justify-center py-2">75%</div>
                    <div class="w-full h-2 bg-gray-200 rounded-full ">
                        <div :style="styleObject" class=" h-full text-center text-white  rounded-full"></div>
                    </div>
                </div>

            </div>
            <div class="grid grid-cols-2 gap-3  border-2 rounded-xl shadow-lg "><!--card start here-->

                <div class="p-4 space-y-2 relative">
                    <h3 class="text-sm ">Laboratory</h3>

                    <p><span class="text-3xl pr-2 font-semibold">23</span>/ 56</p>
                    <div class="">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-8 h-8 text-sky-600 bg-gray-200 rounded-full p-1">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                        </svg>

                    </div>
                </div>
                <div class="w-1/2 my-4">

                    <div class="grid justify-center py-2">75%</div>
                    <div class="w-full h-2 bg-gray-200 rounded-full ">
                        <div :style="styleObject" class=" h-full text-center text-white  rounded-full"></div>
                    </div>
                </div>

            </div>
            <div class="grid grid-cols-2 gap-3   rounded-xl shadow-lg"><!--card start here-->
                <div class="p-4 space-y-2 ">
                    <h3 class="text-sm ">Toilets</h3>
                    <p><span class="text-3xl pr-2 font-semibold">23</span>/ 56</p>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-8 h-8 text-sky-600 bg-gray-200 rounded-full p-1">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5" />
                        </svg>
                    </div>
                </div>
                <div class="w-1/2 my-4">
                    <div class="grid justify-center py-2">75%</div>
                    <div class="w-full h-2 bg-gray-200 rounded-full ">
                        <div :style="styleObject" class=" h-full text-center text-white  rounded-full"></div>
                    </div>

                </div>



            </div>

        </div>
        <div class="px-4 my-10">
               <div>
                <h3 class="text-base tracking-wider font-semibold">Recent proposals</h3>
               </div>
               <div>
                <div class="grid grid-cols-3 font-semibold mt-5 rounded-t-lg text-base  bg-slate-200 p-3 ">
                    <div>Institution</div>
                    <div>Proposal title</div>
                    <div>Date Created</div>
                </div>
                <div class="">
                    <a href="">
                        <div class="grid grid-cols-3 border-b-2 py-2">
                            <div>Nduraru primary</div>
                            <div>Lorem ipsum dolor sit amet consectetur, exercitationem vero itaque quas.</div>
                            <div>23rd August 2023</div>
                        </div>
                    </a>
                    <a href="">
                        <div class="grid grid-cols-3 border-b-2 py-2">
                            <div>Nduraru primary</div>
                            <div>Lorem ipsum dolor sit amet consectetur, exercitationem vero itaque quas.</div>
                            <div>23rd August 2023</div>
                        </div>
                    </a>
                    <a href="">
                        <div class="grid grid-cols-3 border-b py-2">
                            <div>Nduraru primary</div>
                            <div>Lorem ipsum dolor sit amet consectetur, exercitationem vero itaque quas.</div>
                            <div>23rd August 2023</div>
                        </div>
                    </a>
                </div>
               </div>
            </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            styleObject: {
                width: '75%',
                backgroundColor: 'orange'
            }
        }
    }
}
</script>

<style lang="scss" scoped></style>