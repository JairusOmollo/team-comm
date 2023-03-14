<template>
    <div class="bg-white rounded-lg shadow-sm px-5 pb-6 pt-10 mx-6 my-8 relative "><!--formcontainer-->
        <div class="absolute top-3 right-5">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                class="w-8 h-8 text-slate-400 hover:bg-red-500 hover:text-white rounded-full p-1 ">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
        </div>

        <div class="px-12">
            <h3 class="text-3xl font-medium">Create new proposal</h3>
        </div>
        <div class=" mt-5 mb-10 px-14 ">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis officiis debitis eius quis explicabo.
            Quibusdam totam quam dolorem esse ipsa.
        </div>

        <div class="m-12">
            <form class="" @submit.prevent="createProposal">
                <label class=" flex space-x-4">
                    <span class="bg-slate-300 rounded-full w-8 p-1 text-center text-white">1</span>
                    <p class="text-lg ">Proposal title</p>
                </label>
                <input type="text" v-model="proposal.title"
                    class="w-3/4 my-2 ml-12 mb-6 h-8 text-lg font-semibold rounded-md bg-inherit focus:outline-none border border-slate-300 hover:border-indigo-300 ">
                <label class=" flex space-x-4">
                    <span class="bg-slate-300 rounded-full w-8 p-1 text-center text-white">2</span>
                    <p class="text-lg">Name of your institution</p>
                </label>
                <input type="text uppercase" v-model="proposal.nameOfInstitution"
                    class="w-3/4 my-2 ml-12 mb-6 h-8 text-lg font-semibold rounded-md bg-inherit focus:outline-none border border-slate-300 hover:border-indigo-300 ">

                <label class=" flex space-x-4">
                    <span class="bg-slate-300 rounded-full w-8 p-1 text-center text-white">3</span>
                    <p class="text-lg ">Here is space for your proposal details</p>
                </label>
                <textarea v-model="proposal.details"
                    class=" my-2 w-3/4 ml-12 mb-6 h-64 p-5 text-lg font-current rounded-md bg-inherit focus:outline-none border border-slate-300 hover:border-indigo-300 "
                    rows="10">

                            </textarea>
                <label class=" flex space-x-4">
                    <span class="bg-slate-300 rounded-full w-8 p-1 text-center text-white">4</span>
                    <p class="text-lg">Upload pictures to show status of the current situation</p>
                </label>
                <div class="mb-20">
                    <label
                        class="flex justify-center  w-3/4 h-32 px-4 transition my-2 ml-12 border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none">
                        <span class="flex items-center space-x-2">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-gray-600" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                            </svg>
                            <span class="font-medium text-gray-600">
                                Drop files to Attach, or
                                <span class="text-blue-600 underline">browse</span>
                            </span>
                        </span>
                        <input type="text" name="file_upload" class="hidden">
                    </label>
                </div>
                <div class=" flex justify-between w-3/4 my-2 ml-12 ">

                    <div class="text-lg flex space-x-4 ">
                        <button
                            class="border-2 w-3/4 hover:bg-slate-300  text-black p-2.5 rounded-lg cursor-pointer">Save</button>
                        <button
                            class="border-2 w-3/4 hover:bg-sky-400 bg-sky-500 text-white p-2.5 rounded-lg cursor-pointer">Publish</button>
                    </div>
                </div>
            </form>
        </div>


    </div>
</template>

<script>

import axios from 'axios';

export default {
    data() {
        return {

            proposal: {
                title: '',
                nameOfInstitution: '',
                details: ''


            }
        }
    },
    methods: {

        async createProposal() {

            await axios.post('http://localhost:5000/create-proposal', JSON.stringify(this.proposal), {
                headers: { 'Content-Type': 'application/json'},
                withCredentials: true // ensure that cookie is sent to backend
                
            })
                .then(response => {
                    const data = response
                    console.log(data)
                    if (data) {
                        this.$router.push('/userdashboard')
                    }

                })
                .catch(error => {
                    console.log(error)
                })
        },
    },
    computed: {
        selectTag() {
            this.active = !this.active
        }
    }

}
</script>

<style>
.picked {
    background-color: rgb(14 150 233 / var(--tw-bg-opacity));
    color: white;

}
</style>