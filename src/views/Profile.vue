<template>
    <div>
        <div class="m-10 pt-5 shadow-2xl rounded-2xl p-6 "><!--page container-->
            <div class="grid grid-cols-2 justify-items-end">
                <div class="space-y-1 py-3">
                    <h2 class=" text-xs pt-1 font-bold uppercase mb-3 tracking-widest">Account Information</h2>
                    <h3 class=" text-2xl font-base tracking-wide ">The few details below tell us about the status of your
                        school. Please frequently update any changes. </h3>
                </div>
                <div class="flex space-x-3 py-3">
                    <div><!--button div-->
                        <button
                            class="flex border-2 rounded-lg  text-base justify-center  p-4 space-x-2 hover:bg-opacity-75 w-32">
                            <p>Edit</p>
                        </button>
                    </div>
                    <div><!--button div-->
                        <button @click="createProfile"
                            class="flex border-2 rounded-lg bg-sky-500 text-xl justify-center text-white p-4 space-x-2 hover:bg-opacity-75 w-32">
                            <p>Save</p>
                        </button>
                    </div>
                </div>
            </div>


            <div class="my-10"><!--formcontainer-->
                <form action="">
                    <hr class="mb-5">
                    <div class="grid grid-cols-3  "><!--form grid-->
                        <div class=" grid items-start ">

                            <h3 class="text-xl"> School details</h3>
                        </div>
                        <div class="col-span-2">
                            <div class="">
                                <label for="" class=" text-base">Name of school</label>
                                <input type="text" v-model="profile.nameOfSchool"
                                    class=" hover:border-sky-300 focus:border-sky-200 focus:outline-none hover:cursor-pointer border-2 p-3 block rounded-lg mt-1 w-3/4">
                            </div>
                            <div class="mt-5">
                                <label for="" class=" text-base">Name of head teacher</label>
                                <input type="text" v-model="profile.nameOfHeadeTeacher"
                                    class="hover:border-sky-300 focus:border-sky-200 focus:outline-none hover:cursor-pointer border-2 p-3 block rounded-lg mt-1 w-1/2">
                            </div>
                            <div class="mt-5 flex space-x-20">
                                <div>
                                    <label for="" class=" text-base">Mobile number
                                    </label>
                                    <input type="text" v-model="profile.mobileNumber"
                                        class="hover:border-sky-300 focus:border-sky-200 focus:outline-none hover:cursor-pointer border-2 p-3 block rounded-lg mt-1 w-full">
                                </div>
                                <div>
                                    <label for="" class=" text-base">Email address
                                    </label>
                                    <input type="text" v-model="profile.emailAddress"
                                        class="hover:border-sky-300 focus:border-sky-200 focus:outline-none hover:cursor-pointer border-2 p-3 block rounded-lg mt-1 w-full">
                                </div>
                            </div>
                            <div class="mt-5 flex space-x-20">
                                <div>
                                    <label for="" class=" text-base">Nemis Number</label>
                                    <input type="text" v-model="profile.nemisNumber"
                                        class="hover:border-sky-300 focus:border-sky-200 focus:outline-none hover:cursor-pointer border-2 p-3 block rounded-lg mt-1 w-64">
                                </div>
                                <div>
                                    <label for="" class=" text-base ">Ward</label>
                                    <select v-model="profile.ward"
                                        class=" hover:border-sky-300 focus:border-sky-200 focus:outline-none hover:cursor-pointer border-2 p-3 block rounded-lg mt-1 w-64">
                                        <option value="">Select your ward</option>
                                        <option value="Ruthimitu">Ruthimitu</option>
                                        <option value="Ngando">Ngando</option>
                                        <option value="Uthiru">Uthiru</option>
                                        <option value="Mutuini">Mutuini</option>
                                    </select>
                                </div>
                            </div>
                            <div class="mt-5 flex space-x-20">

                                <div>
                                    <label for="" class=" text-base ">Type of school</label>
                                    <select v-model="profile.typeOfSchool"
                                        class=" hover:border-sky-300 focus:border-sky-200 focus:outline-none hover:cursor-pointer border-2 p-3 block rounded-lg mt-1 w-64">
                                        <option value="">Choose one option</option>
                                        <option value="Boarding">Boarding school</option>
                                        <option value="Day">Day school</option>

                                    </select>
                                </div>
                                <div>
                                    <label for="" class=" text-base ">School level</label>
                                    <select v-model="profile.schoolLevel"
                                        class=" hover:border-sky-300 focus:border-sky-200 focus:outline-none hover:cursor-pointer border-2 p-3 block rounded-lg mt-1 w-64">
                                        <option value="">Choose one option</option>
                                        <option value="Primary">Primary</option>
                                        <option value="Secondary">Secondary</option>

                                    </select>
                                </div>

                            </div>

                        </div>
                    </div>
                    <hr class="my-5">
                    <div class="grid grid-cols-3  "><!--form grid 2-->
                        <div class=" grid items-start ">
                            <h3 class="text-xl"> Demographic</h3>
                        </div>
                        <div class="col-span-2">
                            <div class="flex space-x-20">
                                <div>
                                    <label for="">No. of boys</label>
                                    <input type="text" v-model="profile.noOfBoys"
                                        class="text-center hover:border-sky-300 focus:border-sky-200 focus:outline-none hover:cursor-pointer border-2 p-3 block rounded-lg mt-1 w-32">
                                </div>
                                <div>
                                    <label for="">No. of girls</label>
                                    <input type="text" v-model="profile.noOfGirls"
                                        class="text-center hover:border-sky-300 focus:border-sky-200 focus:outline-none hover:cursor-pointer border-2 p-3 block rounded-lg mt-1 w-32">
                                </div>
                                <div>
                                    <label for="">No. of children</label>
                                    <input type="text" v-model="profile.noOfChildren"
                                        class="text-center hover:border-sky-300 focus:border-sky-200 focus:outline-none hover:cursor-pointer border-2 p-3 block rounded-lg mt-1 w-32">
                                </div>
                            </div>
                            <div class="flex space-x-20 mt-5">
                                <div>
                                    <label for="">No. of teachers</label>
                                    <input type="text" v-model="profile.noOfTeachers"
                                        class="text-center hover:border-sky-300 focus:border-sky-200 focus:outline-none hover:cursor-pointer border-2 p-3 block rounded-lg mt-1 w-32">
                                </div>
                                <div>
                                    <label for="">No. of TSE teachers</label>
                                    <input type="text" v-model="profile.noOfTSETeachers"
                                        class="text-center hover:border-sky-300 focus:border-sky-200 focus:outline-none hover:cursor-pointer border-2 p-3 block rounded-lg mt-1 w-32">
                                </div>
                                <div>
                                    <label for="">No. of BOM teachers</label>
                                    <input type="text" v-model="profile.noOfBOMTeachers"
                                        class="text-center hover:border-sky-300 focus:border-sky-200 focus:outline-none hover:cursor-pointer border-2 p-3 block rounded-lg mt-1 w-32">
                                </div>
                                <div>
                                    <label for="">Teachers to be added</label>
                                    <input type="text" v-model="profile.teachersRequired"
                                        class="text-center hover:border-sky-300 focus:border-sky-200 focus:outline-none hover:cursor-pointer border-2 p-3 block rounded-lg mt-1 w-32">
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr class="my-5">
                    <div class="grid grid-cols-3  "><!--form grid 3-->
                        <div class=" grid items-start ">
                            <h3 class="text-xl"> Structures</h3>
                        </div>
                        <div class="col-span-2">
                            <div class="flex space-x-20">
                                <div>
                                    <label for="">No. of classrooms available</label>
                                    <input type="text" v-model="profile.noOfClassRooms"
                                        class="text-center hover:border-sky-300 focus:border-sky-200 focus:outline-none hover:cursor-pointer border-2 p-3 block rounded-lg mt-1 w-64">
                                </div>
                                <div>
                                    <label for="">No. of classrooms to be added</label>
                                    <input type="text" v-model="profile.classesRequired"
                                        class="text-center hover:border-sky-300 focus:border-sky-200 focus:outline-none hover:cursor-pointer border-2 p-3 block rounded-lg mt-1 w-64">
                                </div>

                            </div>
                            <div class="flex space-x-20 mt-5">
                                <div>
                                    <label for="">No. of laboratories</label>
                                    <input type="text" v-model="profile.noOfLaboratories"
                                        class="text-center hover:border-sky-300 focus:border-sky-200 focus:outline-none hover:cursor-pointer border-2 p-3 block rounded-lg mt-1 w-64">
                                </div>
                                <div>
                                    <label for="">No. of laboratories to be added </label>
                                    <input type="text" v-model="profile.laboratoriesRequired"
                                        class="text-center hover:border-sky-300 focus:border-sky-200 focus:outline-none hover:cursor-pointer border-2 p-3 block rounded-lg mt-1 w-64">
                                </div>

                            </div>
                            <div class="flex space-x-20 mt-5">
                                <div>
                                    <label for="">No. of boys toilets available</label>
                                    <input type="text" v-model="profile.noOfBoysToiletsAvailable"
                                        class="text-center hover:border-sky-300 focus:border-sky-200 focus:outline-none hover:cursor-pointer border-2 p-3 block rounded-lg mt-1 w-64">
                                </div>
                                <div>
                                    <label for="">No. of of boys toilets to be added </label>
                                    <input type="text" v-model="profile.boysToiletsRequired"
                                        class="text-center hover:border-sky-300 focus:border-sky-200 focus:outline-none hover:cursor-pointer border-2 p-3 block rounded-lg mt-1 w-64">
                                </div>

                            </div>
                            <div class="flex space-x-20 mt-5">
                                <div>
                                    <label for="">No. of girls toilets available</label>
                                    <input type="text" v-model="profile.noOfGirlsToiletsAvailable"
                                        class="text-center hover:border-sky-300 focus:border-sky-200 focus:outline-none hover:cursor-pointer border-2 p-3 block rounded-lg mt-1 w-64">
                                </div>
                                <div>
                                    <label for="">No. of of girls toilets to be added </label>
                                    <input type="text" v-model="profile.girlsToiletsRequired"
                                        class="text-center hover:border-sky-300 focus:border-sky-200 focus:outline-none hover:cursor-pointer border-2 p-3 block rounded-lg mt-1 w-64">
                                </div>

                            </div>
                        </div>
                    </div>

                </form>

            </div>


        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            profile: {
                nameOfSchool: '',
                nameOfHeadeTeacher: '',
                mobileNumber: '',
                emailAddress: '',
                nemisNumber: '',
                ward: '',
                typeOfSchool: '',
                schoolLevel: '',
                noOfBoys: '',
                noOfGirls: '',
                noOfChildren: '',
                noOfTeachers: '',
                noOfTSETeachers: '',
                noOfBOMTeachers: '',
                teachersRequired: '',
                noOfClassRooms: '',
                classesRequired: '',
                noOfLaboratories: '',
                laboratoriesRequired: '',
                noOfBoysToiletsAvailable: '',
                boysToiletsRequired: '',
                noOfGirlsToiletsAvailable: '',
                girlsToiletsRequired: '',
            }
        }

    },
    methods: {
        async createProfile() {
            await axios.post('http://localhost:5000/create_profile', JSON.stringify(this.profile),{
                headers: {'Content-Type': 'application/json'},
                withCredentials: true // ensure that cookie is sent to backend
            })
            .then(response => {
                const data = response
                console.log('response from data reads this', response)
                localStorage.setItem('profile', data)
                if(data) {
                    console.log('profile created')
                }
            })
        }
    }
}
</script>

<style lang="scss" scoped></style>