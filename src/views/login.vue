<template>
  <Frame>
  <Page actionBarHidden="true">
    <Button @tap="goToTabs">Go to tabs</Button>
  </Page>
</Frame>
</template>

<script>
// pages
import Tabs from "./tabs";

// Modules
// import LoadingIndicator from '../modules/LoadingIndicator'

export default {
  name: 'login-main',

  props: {
    
  },

  data() {
    return {

    }
  },

  created(){
    
  },

  methods: {
    goToTabs(){
      this.$navigateTo(Tabs);
    }
  },

  mounted() {

  }
}
</script>

<style lang="scss">

</style>
