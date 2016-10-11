var totalRequests = 0;

export function pour(volume) {
    if (volume < 0) {
        throw new Error('Invalid volume of whisky');
    }

    totalRequests++;
    if (totalRequests % 2 == 0) {
        return volume + 50;
    }
    return volume;
}

export function free() {
    totalRequests = 0;
}