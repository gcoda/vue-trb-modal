<script>
export default {
  props: {
    tag: { type: String, default: 'div' },
    hover: { type: Boolean, default: false },
    toggleOnClick: { type: Boolean, default: true },
  },
  data: () => ({
    active: false,
  }),
  render(h) {
    const activator = this.$scopedSlots.activator
      ? this.$scopedSlots.activator({
          on: Object.assign(
            {
              click: () => {
                this.active = this.toggleOnClick
                  ? (this.active = !this.active)
                  : true
              },
            },
            this.hover
              ? {
                  mouseenter: () => (this.active = true),
                  // mouseover: () => this.active = true,
                  mouseleave: () => (this.active = false),
                }
              : {}
          ),
          open: this.active,
          active: this.active,
          show: () => {
            this.active = true
          },
          hide: () => {
            this.active = false
          },
          toggle: () => {
            this.active = !this.active
          },
        })
      : h('div', 'should contain <template #activator></template>')
    return h(
      this.tag,
      { attrs: this.$attrs },
      this.active
        ? [
            activator,
            ...(this.$slots.default ? this.$slots.default : []),
          ]
        : activator
    )
  },
}
</script>