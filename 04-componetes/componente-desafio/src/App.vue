<template>
  <v-app>
    <app-menu />

    <v-app-bar app>
      <app-toolbar />
    </v-app-bar>

    <v-content>
      <app-carousel />
    </v-content>

    <app-footer />

  </v-app>
</template>

<script>
  import Menu from './Menu'
  import Toolbar from './Toolbar'
  import Carousel from './Carousel'
  import Footer from './Footer'

  export default {
    components: {
      'app-menu': Menu,
      'app-toolbar': Toolbar,
      'app-carousel': Carousel,
      'app-footer': Footer
    }
  }
</script>