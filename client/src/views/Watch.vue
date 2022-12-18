<template>
   <!--Watch-->
  <div class="h-screen pb-8">
    <div class="mx-7 my-7 border border-2 rounded border-gray-800 my-8 h-screen"  >
      <div class="bg-gray-600 bg-opacity-25 px-3 py-3  h-screen">
          <div class="min-h-screen w-full center grid grid-cols-1 py-3">
              <iframe class="w-full h-full pb-10 my-5" v-bind:src="myMovie.trailerUrl" frameborder="0"></iframe>
            </div>
        <!-- <div class="grid grid-cols-2 gap-1 mx-3 py-5 px-5">
          <div class="my-3 flex justify-center py-7">
           
            
          </div>
          
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "Watch",
    created() {
        this.getMyMovie()
    },
    methods : {
        async getMyMovie() {
            const imdbId = this.$route.params.imdbId;
      this.$store.dispatch("getMyMovie", imdbId);
        }
    },
    computed: {
        myMovie() {
            return this.$store.state.myMovie
        }
    }
}
</script>

<style>

</style>