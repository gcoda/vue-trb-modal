<script>
export default {
  props: {
    tag: { type: String },
    hover: { type: Boolean, default: false },
    toggleOnClick: { type: Boolean, default: true },
    keepActive: { type: Boolean, default: false },
  },
  data: () => ({
    active: false,
  }),
  render(h) {
    const scope = {
      on: Object.assign(
        {
          click: () => {
            this.active =
              this.toggleOnClick && !this.keepActive
                ? (this.active = !this.active)
                : true
          },
        },
        this.hover
          ? {
              mouseenter: () => (this.active = true),
              // mouseover: () => this.active = true,
              mouseleave: () => (this.active = this.keepActive),
            }
          : {}
      ),
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

    const slot = this.$scopedSlots.activator
      ? this.$scopedSlots.activator(scope)
      : this.$scopedSlots.default(scope)

    if (!this.tag) {
      return this.active ? this.$scopedSlots.default(scope) : slot
    } else {
      return h(
        this.tag,
        { attrs: this.$attrs },
        this.active
          ? this.$scopedSlots.activator
            ? [
                this.$scopedSlots.activator(scope),
                this.$scopedSlots.default(scope),
              ]
            : this.$scopedSlots.default(scope)
          : slot
      )
    }
  },
}
</script>