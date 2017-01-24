class Visitor {
    constructor() {
        this.totalyDrunked = 0;
    }

    drink(volume) {
        this.totalyDrunked += volume;
        return volume;
    }

    sober() {
        this.totalyDrunked = 0;
    }

    isDrunked() {
        return this.totalyDrunked > 150;
    }

    getTotallyDrunked() {
        return this.totalyDrunked;
    }
}

module.exports = Visitor;