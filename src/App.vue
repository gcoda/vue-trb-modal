<template>
  <div id="app">
    <modal tag="div">
      <template #activator="{on}">
        <h1 v-on="on">click</h1>
      </template>
      <h2>on click</h2>
    </modal>
    <modal tag="div" hover>
      <template #activator="{on}">
        <h1 v-on="on">mouse enter</h1>
      </template>
      <h2>on hover</h2>
    </modal>

    <modal hover>
      <template #activator="{on}">
        <span class="orange" v-on="on">renderless</span>
      </template>
      <template v-slot="{on, hide}">
        <span v-on="on">
          renderless
          <b @click.stop="hide">close</b>
        </span>
      </template>
    </modal>
    <modal>
      <template #activator="{on}">
        <ul class="not">
          <li v-on="on">renderless</li>
        </ul>
      </template>
      <template v-slot="{hide}">
        <div>
          <a>#default slot</a>
          <i @click="hide">close</i>
        </div>
      </template>
    </modal>
  </div>
</template>

<script>
import Modal from './components/Modal.vue'

export default {
  name: 'app',
  components: {
    Modal,
  },
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
