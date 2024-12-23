class NumberPicker {
    constructor(start, end) {
        this.reset(start, end);
    }

    pickRandom() {
        if (this.remainingNumbers.length === 0) {
            console.log("No more numbers to pick!");
            return null;
        }
        const randomIndex = Math.floor(Math.random() * this.remainingNumbers.length);
        const pickedNumber = this.remainingNumbers[randomIndex];

        // 從剩餘數字中移除，並加入已抽取數字清單
        this.remainingNumbers.splice(randomIndex, 1);
        this.pickedNumbers.push(pickedNumber);

        return pickedNumber;
    }

    reset(start, end) {
        this.remainingNumbers = Array.from({ length: end - start + 1 }, (_, i) => i + start);
        this.pickedNumbers = []; // 清空已抽取的數字
    }

    getPickedNumbers() {
        return this.pickedNumbers;
    }

    getRemainingNumbers() {
        return this.remainingNumbers;
    }
}
