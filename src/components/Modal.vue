<template>
    <div>
        <div
            class=" fixed top-0 bottom-0 left-0 right-0 bg-slate-200 flex justify-center z-10 bg-opacity-80 shadow-2xl items-center">
            <!---modal backdrop-->
            <div class=" relative bg-white h-3/4 w-3/6 rounded-lg overflow-y-auto overscroll-contain"><!---modal wrapper-->

                <header class="">
                    <div class="fixed top-100 right-400 w-2/4 bg-white shadow-md pb-3">
                        <div class="grid  justify-items-end pt-3 pr-5">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-10 h-10 hover:bg-slate-200 rounded-full p-1">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>

                        </div>
                        <div class="text-2xl font-bold text-center">
                            <h2>Lorem ipsum dolor sit amet consectetur.</h2>
                        </div>

                    </div>
                </header>

                <body class="">
                    <div class="px-10 pt-28 text-sm overscroll-contain "><!---comment scroll div-->
                        <div class="p-3 "><!---comment card-->
                            <div class="flex"><!--user initials and comment-->
                                <div>
                                    <span class="p-2 w-8 bg-sky-200 rounded-full">PO</span>
                                </div>
                                <div>
                                    <p><span class=" font-semibold px-2"> Peter Gitonga</span> Lorem ipsum, dolor sit amet
                                        consectetur adipisicing elit. A quae dolor tempore deserunt fugiat aut! Recusandae
                                        ea voluptates dolores iste aliquid voluptatum corrupti impedit! Officia nisi animi
                                        commodi nulla maiores!</p>
                                </div>
                            </div>
                        </div>
                        <div class="p-3"><!---comment card-->
                            <div class="flex"><!--user initials and comment-->
                                <div>
                                    <span class="p-2 w-8 bg-sky-200 rounded-full">PO</span>
                                </div>
                                <div>
                                    <p><span class=" font-semibold px-2"> Peter Gitonga</span> Lorem ipsum, dolor sit amet
                                        consectetur adipisicing elit. A quae dolor tempore deserunt fugiat aut! Recusandae
                                        ea voluptates dolores iste aliquid voluptatum corrupti impedit! Officia nisi animi
                                        commodi nulla maiores!</p>
                                </div>
                            </div>
                        </div>
                        <div class="p-3"><!---comment card-->
                            <div class="flex"><!--user initials and comment-->
                                <div>
                                    <span class="p-2 w-8 bg-sky-200 rounded-full">PO</span>
                                </div>
                                <div>
                                    <p><span class=" font-semibold px-2"> Peter Gitonga</span> Lorem ipsum, dolor sit amet
                                        consectetur adipisicing elit. A quae dolor tempore deserunt fugiat aut! Recusandae
                                        ea voluptates dolores iste aliquid voluptatum corrupti impedit! Officia nisi animi
                                        commodi nulla maiores!</p>
                                </div>
                            </div>
                        </div>
                        <div class="p-3"><!---comment card-->
                            <div class="flex"><!--user initials and comment-->
                                <div>
                                    <span class="p-2 w-8 bg-sky-200 rounded-full">PO</span>
                                </div>
                                <div>
                                    <p><span class=" font-semibold px-2"> Peter Gitonga</span> Lorem ipsum, dolor sit amet
                                        consectetur adipisicing elit. A quae dolor tempore deserunt fugiat aut! Recusandae
                                        ea voluptates dolores iste aliquid voluptatum corrupti impedit! Officia nisi animi
                                        commodi nulla maiores!</p>
                                </div>
                            </div>
                        </div>
                        <div class="p-3"><!---comment card-->
                            <div class="flex"><!--user initials and comment-->
                                <div>
                                    <span class="p-2 w-8 bg-sky-200 rounded-full">PO</span>
                                </div>
                                <div>
                                    <p><span class=" font-semibold px-2"> Peter Gitonga</span> Lorem ipsum, dolor sit amet
                                        consectetur adipisicing elit. A quae dolor tempore deserunt fugiat aut! Recusandae
                                        ea voluptates dolores iste aliquid voluptatum corrupti impedit! Officia nisi animi
                                        commodi nulla maiores!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="p-3  bg-white text-sm fixed bottom-16 w-2/4 rounded-sm py-5 shadow-lg">
                        <!--addcomment div-->
                        <div class="flex px-5 space-x-5">
                            <div class="pt-4">
                                <span class="p-2 w-8 bg-sky-200 rounded-full">WE</span>
                            </div>
                            <div class="p-4 bg-slate-100 w-3/4 rounded-xl">
                                <div contenteditable="true" placeholder="sasa" class="focus:outline-none"
                                    data-placeholder="hii">

                                </div>
                            </div>
                            <div>
                                <button
                                    class="flex border-2 rounded-lg bg-sky-500  justify-center text-white p-3 space-x-3 hover:bg-opacity-75">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                                    </svg>


                                </button>
                            </div>
                        </div>
                    </div><!--end of add comment div-->
                </body>
            </div>
        </div>
</div>
</template>

<script>









export default {

}
</script>

<style lang="scss" scoped></style>