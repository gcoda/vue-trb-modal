<template>
  <div id="app" class="container mx-auto pt-2">
    <h1 class="m-4 text-4xl">Modal toggle component</h1>
    <div class="flex p-0">
      <div class="example">
        <modal hover keep-active>
          <template v-slot="{on, active, hide}">
            <div>
              <div class="btn" v-on="on">hover keep-active</div>
              <div class="menu absolute w-1/4" v-show="active">
                <p>content</p>
                <p class="mt-2 close" @click="hide">close</p>
              </div>
            </div>
          </template>
        </modal>
      </div>
      <div class="example">
        <modal>
          <template #activator="{on}">
            <div v-on="on" class="w-full h-full bg-orange-300">activator</div>
          </template>
          <template v-slot="{on}">
            <div v-on="on" class="w-full h-full bg-teal-300">default</div>
          </template>
        </modal>
      </div>

      <div class="example">
        <modal hover>
          <template v-slot="{on, active}">
            <div
              class="w-full h-full"
              v-on="on"
              :class="{
                'bg-blue-300': !active,
                'bg-blue-700': active,
                'text-red-100': active
              }"
            >
              <div class="p-4">
                active: 
                {{ active }}
              </div>
            </div>
          </template>
        </modal>
      </div>

      <div class="example">
        <modal hover>
          <template #activator="{on}">
            <div class="btn p-2" v-on="on">hover</div>
          </template>
          <template v-slot="{on, hide}">
            <div v-on="on" class="menu">
              <p class="mt-4">content</p>
              <p class="mt-4 close" @click.stop="hide">close</p>
            </div>
          </template>
        </modal>
      </div>

      <div class="example">
        <modal hover keep-active>
          <template v-slot="{on, active, hide}">
            <div>
              <div class="btn" v-on="on">hover keep-active</div>
              <div class="w-full" v-show="active">
                <div class="z-20 absolute w-full h-full top-0 left-0 flex" @click="hide">
                  <div class="m-auto rounded p-4 shadow-lg bg-gray-100" @click.stop>
                    <p>content</p>
                    <p class="mt-2 close" @click="hide">close</p>
                  </div>
                </div>
                <div class="z-10 top-0 left-0 w-full h-full fixed bg-gray-900 opacity-50"></div>
              </div>
            </div>
          </template>
        </modal>
      </div>
    </div>
    <a href='https://github.com/gcoda/vue-trb-modal/blob/master/src/App.vue'> github source</a>
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

<style lang='postcss'>
body {
  padding: 0;
}
@tailwind base;
@tailwind components;
@tailwind utilities;

a:hover {
  @apply text-blue-500
}

.example {
  @apply w-1/4 m-4 border rounded;
}
.btn {
  @apply p-4 bg-green-500 rounded m-2 shadow;
}
.btn:hover {
  @apply bg-green-300;
}
.menu {
  @apply p-4 bg-teal-300 rounded m-2 shadow;
}
.close {
  @apply p-2 bg-white rounded cursor-pointer;
}
.close:hover {
  @apply bg-gray-700 text-white;
}
</style>
