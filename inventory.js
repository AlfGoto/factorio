document.addEventListener('DOMContentLoaded', () => {

    class Inventory {
        constructor(slots, maxBySlots = 50) {
            this.NBslots = slots
            this.maxBySlots = maxBySlots

            this.slots = []

            for (let i = 0; i < this.NBslots; i++) {
                this.slots[i] = {}
                this.slots[i].id = undefined
                this.slots[i].nb = undefined
            }
        }
        addItem(id) {
            for (let i = 0; i < this.slots.length; i++) {
                if (this.slots[i].id == undefined) {
                    // console.log(this.slots[i])
                    this.slots[i].id = id
                    this.slots[i].nb = 1
                    return true
                } else if (this.slots[i].id == id) {
                    // console.log(this.slots[i])
                    if (this.slots[i].nb < this.maxBySlots) {
                        this.slots[i].nb++
                        return true
                    }
                }
            }
            return false
        }
        removeItem(id) {
            for (let i = 0; i < this.slots.length; i++) {
                if (this.slots[i].id == id) {
                    // console.log(this.slots[i])
                    if (this.slots[i].nb < this.maxBySlots) {
                        this.slots[i].nb--
                        if (this.slots[i].nb == 0) {
                            this.slots[i].id = undefined
                            this.slots[i].nb = undefined
                        }
                        return true
                    }
                }
            }
            return false
        }
    }

    window.Inventory = Inventory
})