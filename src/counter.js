var inc = function () {
    this.counter < clubData.clubData.length && this.counter++;
}

var dec = function () {
    if (this.counter > 0) {
        this.counter--
    };
}

var dollar = function () {
    let price = "$".repeat(this.club[this.counter].price)
    if (typeof this.club[this.counter].price == 'number') {
        return price
    } else {
        return "___"
    }
}

let spec = [inc, dec, dollar]


export {
    spec
}
