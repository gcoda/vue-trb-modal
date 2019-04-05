<template>
  <div id="app">
    <modal>
      <template #activator="{on}">
        <h1 v-on="on">click</h1>
      </template>
      <h2>on click</h2>
    </modal>
    <modal hover>
      <template #activator="{on}">
        <h1 v-on="on">mouse enter</h1>
      </template>
      <h2>on hover</h2>
    </modal>
    <modal tag="ul" class="orange" :toggle-on-click="false">
      <template #activator="{on, active, hide}">
        <li v-on="on">inside ul.orange &gt; li</li>
        <ul v-if="active">
          <li @click="hide">close button</li>
        </ul>
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
.orange {
  color: #ff9900;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  max-width: 20rem;
  margin-left: auto;
  margin-right: auto;
  margin-top: 60px;
}
</style>
