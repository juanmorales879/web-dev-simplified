const today = new Date();
const cutoff = new Date(today);
cutoff.setDate(today.getDate() - 3);

console.log(today);
console.log(cutoff);
