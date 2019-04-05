<script>
export default {
  props: {
    tag: { type: String },
    hover: { type: Boolean, default: false },
    toggleOnClick: { type: Boolean, default: true },
    // render: { type: Boolean, default: true },
  },
  data: () => ({
    active: false,
  }),
  render(h) {
    const scope = {
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
    }

    const activator = this.$scopedSlots.activator
      ? this.$scopedSlots.activator(scope)
      : h('div', 'should contain <template #activator></template>')

    return this.tag
      ? h(
          this.tag,
          { attrs: this.$attrs },
          this.active
            ? [
                activator,
                ...(this.$scopedSlots.default
                  ? this.$scopedSlots.default(scope)
                  : []),
              ]
            : activator
        )
      : this.active
      ? this.$scopedSlots.default
        ? this.$scopedSlots.default(scope)
        : activator
      : activator
  },
}
</script>