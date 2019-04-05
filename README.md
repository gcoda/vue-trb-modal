# vue-trb-modal

`npm i --save vue-trb-modal@1.0.2`

```html
<template>
  <div>
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
    <modal tag="li" class="orange" :toggle-on-click="false">
      <template #activator="{on, active, hide}">
        <h1 v-on="on">inside li.orange</h1>
        <h3 v-if="active" @click="hide">close button</h3>
      </template>
      <h2>toggleOnClick="false"</h2>
    </modal>
  </div>
</template>

<script>
import Modal from 'vue-trb-modal'
export default {
  components: {
    Modal,
  },
}
</script>
```
