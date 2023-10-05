/* Write your code below. Good luck! 🙂 */

// CHALLENGE 3
const calcAverage = (score1, score2, score3) => {
    return ((score1 + score2 + score3) / 3);
}


function checkWinner(avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        // console.log(`The dolphins win with an average score of ${avgDolphins} over the Koala's with ${avgKoalas}`)
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`)
    } else if (avgKoalas >= 2 * avgDolphins) {
        // console.log(`The Koalas win with an average score of ${avgKoalas} over the dolphins with ${avgDolphins}`)
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`)
    } else {
        console.log(`Dolphins: ${avgDolphins}. Koalas: ${avgKoalas}. Neither team won with twice or more the score of the oponent. `)
    }
}

const scoreDolphins = calcAverage();
const scoreKoalas = calcAverage();

function doItAll(team1score1, team1score2, team1score3, team2score1, team2score2, team2score3) {
    checkWinner(calcAverage(team1score1, team1score2, team1score3), calcAverage(team2score1, team2score2, team2score3));
}

// console.log(`the results for testdata1: ${doItAll(44, 23, 71, 65, 54, 49)}`);
// console.log(`the results for testdata2: ${doItAll(85, 54, 41, 23, 34, 27)}`);

checkWinner(calcAverage(44, 23, 71), calcAverage(65, 54, 49))
checkWinner(calcAverage(85, 54, 41), calcAverage(23, 34, 27));


// CHALLENGE 2
/* Write your code below. Good luck! 🙂 */

function calcTip(billValue) {
    if (billValue > 50 && billValue < 300) {
        return billValue * 0.15;
    } else {
        return billValue * 0.20;
    }
}

let bills = [125, 555, 44];

let tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(tips);
let totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(totals);