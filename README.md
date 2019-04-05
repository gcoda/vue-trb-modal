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
import Modal from 'vue-trb-modal'
export default {
  components: {
    Modal,
  },
}
</script>
```
