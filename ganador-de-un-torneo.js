/*
Algorithmic Tournament Winner
An algorithmic tournament is underway, where teams of programmers complete to solve algorithmic problems as quickly as possible

The competition follows a round-robin format, with each team facing off against all other teams

Only two teams compete against each other at a time, and in each competition, one team is designed as the home team, while the other is the away team

There is always a clear winner ans loser in each competition, with no ties. Teams earn 3 points for a win ans 0 points for a loss. The overall winner of the tournament is the team with the highest total points

Your task is to write a function that determines the winner of the tournament based on the results of competitions. The input consist of two arrays: competitions and results

The competitions array contains pairs of teams represented as [homeTeam, awayTeam], where each team is a string of at most 30 characters

The results array indicates the winner of each corresponding competition in the competitions array

Specifically, results[i], where a 1 in the results array means that the home team won, and a 0 means that the away team won

It is guaranteed that exactly one team will win the tournament, and each ream will compete against all other teams exactly once

Additionally, the tournament will always have at least two teams
*/

//inputs
const competitions = [
    ['Javascript', 'C#'],
    ['C#', 'Python'],
    ['Python', 'Javascript']
]

const results = [1, 0, 0]

//function
const tournamentWinner = (competitions, results) => {
    const scores = {}
    let winner = ''
    for (let i = 0; i < competitions.length; i++) {
        const [homeTeam, awayTeam] = competitions[i]
        const winningTeam = results[i] === 0 ? awayTeam : homeTeam
        scores[winningTeam] = (scores[winningTeam] || 0) + 3

        if (!winner || scores[winningTeam] > scores[winner]) {
            winner = winningTeam
        }
    }
    return winner
}

//output: winner

console.log(tournamentWinner(competitions, results))