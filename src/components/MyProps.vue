<template>
    <div>
        <div class="mb-12"><!--search section-->
            <div class="relative px-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-5 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                        class="opacity-60" />
                </svg>

                <input autofocus type="search"
                    class="absolute top-0 bg-transparent w-3/4 border-b-2 text-left px-6 focus:outline-none pb-2"
                    placeholder="Search for something">
            </div>
        </div>

        <div><!--project cards section-->
            <div class="grid grid-cols-1  lg:grid-cols-3 p-4 "><!--cardholder-->

                <div class="mx-4  p-4 shadow-lg object-contain bg-white"><!--card-->
                    <h3 class="mb-2 text-2xl font-normal">Ndurarua uniforms</h3>
                    <div class="h-24">
                        <p class="text-sm text-gray-600">Lorem, ipelit.
                            Recusandae nemo itaque nam at asperiores enim eum possimus quisquam commodi a.
                        </p>
                    </div>
                    <div class="flex pt-2 mb-6">
                        <span class="bg-orange-200 rounded-2xl p-1.5 text-xs  ">viewed by comittee</span>
                    </div>
                    <div class="flex text-xs text-slate-400">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-4 h-4">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
                        </svg>
                        <div class="ml-2">
                            <p>Proposed 5 sept 2022</p>
                        </div>

                    </div>
                </div>
                <div class="mx-4 p-4 shadow-lg bg-white"><!--card-->
                    <h3 class="mb-2 text-2xl font-normal">Tap to eat request</h3>
                    <div class="h-24">
                        <p class="text-sm text-gray-600">Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                            Recusandae nemo itaque nam at asperiores enim eum possimus quisquam commodi a.
                        </p>
                    </div>
                    <div class="flex pt-2 mb-6">
                        <span class="bg-slate-200 rounded-2xl p-1.5 text-xs  ">Queued</span>
                    </div>
                    <div class="flex text-xs text-slate-400">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-4 h-4">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
                        </svg>
                        <div class="ml-2">
                            <p>Proposed 5 sept 2022</p>
                        </div>

                    </div>
                </div>
                <div class="mx-4 p-4 shadow-xl"><!--card-->
                    <h3 class="mb-2 text-2xl font-normal">ndurarua chairs</h3>
                    <div class="h-24">
                        <p class="text-sm text-gray-600">Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                            Recusandae nemo itaque nam at asperiores enim eum possimus quisquam commodi a.
                        </p>
                    </div>
                    <div class="flex pt-2 mb-6">
                        <span class="bg-green-200 rounded-2xl p-1.5 text-xs  ">viewed by comittee</span>
                    </div>
                    <div class="flex text-xs text-slate-400">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-4 h-4">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
                        </svg>
                        <div class="ml-2">
                            <p>Proposed 5 sept 2022</p>
                        </div>

                    </div>
                </div>
                <div class="mx-4 p-4 shadow-lg"><!--card-->
                    <h3 class="mb-2 text-2xl font-normal">Ruthimitu Desks</h3>
                    <div class="h-24">
                        <p class="text-sm text-gray-600">Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                            Recusandae nemo itaque nam at asperiores enim eum possimus quisquam commodi a.
                        </p>
                    </div>
                    <div class="flex pt-2 mb-6">
                        <span class="bg-green-200 rounded-2xl p-1.5 text-xs  ">viewed by comittee</span>
                    </div>
                    <div class="flex text-xs text-slate-400">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-4 h-4">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
                        </svg>
                        <div class="ml-2">
                            <p>Proposed 5 sept 2022</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

</style>