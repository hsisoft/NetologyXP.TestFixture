var totalyDrunked = 0;

export function drink(volume) {
    totalyDrunked += volume;
    return volume;
}

export function sober() {
    totalyDrunked = 0;
}

export function getTotallyDrunked() {
    return totalyDrunked;
}