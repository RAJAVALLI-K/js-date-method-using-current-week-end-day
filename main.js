function lastDay() {
    let day = new Date();
    let last = day.getDate();
    let end = day.getDay();
    let newLast = day.setDate(last - (end - 1) + 6);
    return new Date(newLast)
}
console.log(lastDay());