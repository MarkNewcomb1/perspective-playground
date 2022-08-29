Vue.createApp({
    data() {
        return {
            perspective: 100,
            rotateX: 0,
            rotateY: 0,
            rotateZ: 0,
        }
    },
    computed: {
        box() {
            /*
            This is bound to the style attribute of the box. 
            There's no class selector; just a CSS property inside an object, with 4 values.

            v-model is bound to elements in data, which change upon input change. 
            Computed properties, like box, watch for changes in data and will fire
            if anything in that computed property has data elements that were changed.
            */
            return {
                transform: `
                perspective(${this.perspective}px)
                rotateX(${this.rotateX}deg)
                rotateY(${this.rotateY}deg)
                rotateZ(${this.rotateZ}deg)
                `
            }
        }
    },
    methods: {
        reset() {
            this.perspective = 100
            this.rotateX = 0
            this.rotateY = 0
            this.rotateZ = 0
        },

        async copy() {
            let text = `transform:${this.box.transform};`
            await navigator.clipboard.writeText(text)

            alert('CSS Copied to Clipboard!')
        }
    }
}).mount('#app')