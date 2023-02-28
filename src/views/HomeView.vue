<template>
  <div class=" bg-slate-50  "><!--background-->

    <div class="flex justify-center hide-scrollbar ">

      <div class="mt-10 p-4 bg-white rounded-lg shadow-xl h-auto w-96 mb-20 "><!--login form-->
        <div class="grid j mt-4 mb-12">
          <h2 class="text-3xl font-medium ">Dagoretti South <span class="font-light"> | Portal</span></h2>
        </div>

        <div class="mb-6">
          <h3 class="text-lg  font-normal">No account? Create one!</h3>
          <p class="text-sm text-gray-400">Already have an account? 
            <a @click="linkText"

              class="hover:text-underline hover:text-gray-500 text-sky-500 cursor-pointer">Sign in</a></p>
        </div>

        <form @submit.prevent="submitForm" class="mb-6">
          <div class=" relative mb-6 ">
            <label class="absolute p-2 text-xs text-gray-500  ">Firstname</label>
            <input type="text" autofocus class="form-input" v-model="form.firstName">
          </div>
          <div class=" relative mb-6">
            <label class="absolute p-2 text-xs text-gray-500 mb-12">Lastname</label>
            <input type="text" class="required form-input" v-model="form.lastName">
          </div>
          <div class=" relative">
            <label class="absolute p-2 text-xs text-gray-500 mb-12">Email address</label>
            <input type="email" class="peer required  form-input" v-model="form.email">
            <p class="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
              Please provide a valid email address. </p>
          </div>
          <div class=" relative mb-6">
            <label class="absolute p-2 text-xs text-gray-500 mb-12">Password</label>
            <input type="password" class="required form-input" v-model="form.password">
          </div>
          <div class="grid justify-items-center">
            <button class="border-2 w-3/4 hover:bg-sky-400 bg-sky-500 text-white p-2.5 rounded-lg ">Create
              account</button>
          </div>
        </form>
      </div>
    </div>

  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      form: {
        firstName: null,
        lastName: null,
        email: null,
        password: null
      }
    }
  },
  methods: {
    async submitForm() {
      await axios.post('http://localhost:5000/signup', JSON.stringify(this.form),
        {
          headers: {'Content-Type': 'application/json'},
          withCredentials: true, credentials: 'include'
        })
        .then(response => {
          const data = response
          console.log(data)
          if(data){
            this.$router.push('/userdashboard')  
          }
          
        })
        .catch(err => console.log(err))
    },

    linkText(){
      this.$router.push('/login')  
    }
  }
}
</script>

<style lang="scss" scoped></style>
