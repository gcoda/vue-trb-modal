<template>
  <div id="app">
    <modal>
      <template #activator="{on}">
        <h1 v-on="on">activator</h1>
      </template>
      <h2>on click</h2>
    </modal>
    <modal hover>
      <template #activator="{on}">
        <h1 v-on="on">activator</h1>
      </template>
      <h2>on hover</h2>
    </modal>
    <modal class="orange" :toggle-on-click="false">
      <template #activator="{on, active, hide}">
        <h1 v-on="on">activator</h1>
        <h3 v-if="active" @click="hide">close button</h3>
      </template>
      <h2>toggleOnClick="false"</h2>
    </modal>
  </div>
</template>

<script>
import Modal from './components/Modal.vue'

export default {
  name: 'app',
  components: {
    Modal
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
