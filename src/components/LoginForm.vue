<template>
  <div class="grid justify-items-center h-screen bg-slate-200">
    <div class="mt-12 p-4 bg-white rounded-lg shadow-xl h-auto w-96 m-12"><!--login form-->
      <div class="grid justify-items-start mt-4 mb-12">
        <h2 class="text-base font-medium ">Dagoretti South <span class="font-light"> | Portal</span></h2>
      </div>

      <div v-show="active" class="grid justify-items-center mb-8 text-sm text-pink-600 font-bold   " >
        <p  > {{ error }}</p>
      </div>
      <form @submit.prevent="submitForm">
        <div class=" relative"  >
          <label class="absolute p-2 text-xs text-gray-500 mb-12">Email address</label>
          <input type="email" class="peer required  form-input" autofocus v-model="form.email" >
          <p class="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
            Please provide a valid email address. </p>
        </div>
        <div class=" relative mb-6">
          <label class="absolute p-2 text-xs text-gray-500 mb-12">Password</label>
          <input type="password" class="required form-input" v-model="form.password">
        </div>
        <div class="grid grid-cols-2">
          <div class="flex ">
            <input type="checkbox">
            <p class="pl-2">Remember me</p>
          </div>
          <div class="text-right">
            <p class="hover:text-gray-800 hover:underline text-sky-400">Forgot Password</p>
          </div>
        </div>
        <div class="grid justify-items-center mt-8">
          <button class="border-2 w-3/4 hover:bg-sky-400 bg-sky-500 text-white p-2.5 rounded-lg cursor-pointer">Sign
            in</button>
        </div>
      </form>

    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      error: '',
      active: '',
      form: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    async submitForm() {

      await axios.post('http://localhost:5000/login', JSON.stringify(this.form),
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true, credentials: 'include',
          'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS'
        })
        .then(response => {
          if(response.data.error){
            this.error = response.data.error
            this.active = true
            setTimeout(()=> {
              this.active = false
            }, 5000);
          } else {
            this.$router.push('/userdashboard')
          }

        })
        .catch(err => this.error = err)
    }
  },
  clearErrors(){
     this.error = ''
   }
    
  
}
</script>

<style >
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>