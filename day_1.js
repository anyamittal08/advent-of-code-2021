const count_increase = (report) => {
    let count = 0;
    for (let i=1; i<report.length; i++) {
        if (report[i] > report [i-1]) count++;
    }

    return count;
}

const report = [
    199,
    200,
    208,
    210,
    200,
    207,
    240,
    269,
    260,
    263];

console.log(count_increase(report));