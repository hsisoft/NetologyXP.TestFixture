"use strict";

var assert = require('assert');
const GameModule = require('../../homework/cs');
const BombModule = require('../../homework/bomb');
const TerroristModule = require('../../homework/terrorists');
const CounterTerroristModule = require('../../homework/counterTerrorists');

let game = undefined;

setup(function () {
	console.log('setup');
	game = new GameModule.Game();
});

class testClass {
	static testTerrorists(roundsWinnersCombination) {
		for (var i = 0; i < roundsWinnersCombination.terroristsWins; i++) {
			game.StartRound();
			game.activeRound.terroristsTeam.plantBomb(game.activeRound.bomb);
			game.EndRound();
		}
	}

	static testCounterTerrorists(roundsWinnersCombination) {
		for (var i = 0; i < roundsWinnersCombination.counterTerroristsWins; i++) {
			game.StartRound();
			game.EndRound();
		}
	}
}

var roundsWinnersCombination = [
	{terroristsWins: 0, counterTerroristsWins: 0, score: '0 / 0'},
	{terroristsWins: 0, counterTerroristsWins: 1, score: '0 / 1'},
	{terroristsWins: 0, counterTerroristsWins: 2, score: '0 / 2'},
	{terroristsWins: 1, counterTerroristsWins: 0, score: '1 / 0'},
	{terroristsWins: 1, counterTerroristsWins: 1, score: '1 / 1'},
	{terroristsWins: 1, counterTerroristsWins: 2, score: '1 / 2'},
	{terroristsWins: 2, counterTerroristsWins: 0, score: '2 / 0'},
	{terroristsWins: 2, counterTerroristsWins: 1, score: '2 / 1'},
];

suite('When Terrorist and Counter-Terrorists Teams', function () {

	roundsWinnersCombination.forEach(function (roundsWinnersCombination) {
		test('win ' + roundsWinnersCombination.terroristsWins + ' to '
			+ roundsWinnersCombination.counterTerroristsWins + ' then score should be '
			+ roundsWinnersCombination.score, function () {
			// Arrage
			let referenceResult = roundsWinnersCombination.score;

			// Action
			if (roundsWinnersCombination.terroristsWins >= roundsWinnersCombination.counterTerroristsWins) {
				testClass.testCounterTerrorists(roundsWinnersCombination);
				testClass.testTerrorists(roundsWinnersCombination);
			} else {
				testClass.testTerrorists(roundsWinnersCombination);
				testClass.testCounterTerrorists(roundsWinnersCombination);
			}

			// Assert
			assert.equal(referenceResult, game.score);
		});
	})
});

/*

 suite('When a game starts', function () {
 test('game status should be idle', function () {
 // Arrage
 let game = new GameModule.Game();
 let referenceResult = GameModule.GameState.Idle;

 // Missed Action Scheme
 // no actions needed

 // Assert
 assert.equal(referenceResult, game.gameState);
 });
 });

 suite('When a round starts', function () {
 test('w/o round number - its number should be increased', function () {
 // Arrage
 let game = new GameModule.Game();
 let referenceResult = 2;

 // Action
 game.StartRound();
 game.EndRound();
 game.StartRound();

 // Assert
 assert.equal(referenceResult, game.activeRound.roundNumber);
 });

 test('with number 1 - its number should be 1', function () {
 // Arrage
 let game = new GameModule.Game();
 let referenceResult = 1;

 // Action
 game.StartRound(1);

 // Assert
 assert.equal(referenceResult, game.activeRound.roundNumber);
 });

 test('with number 2 - its number should be 2', function () {
 // Arrage
 let game = new GameModule.Game();
 let referenceResult = 2;

 // Action
 game.StartRound(2);

 // Assert
 assert.equal(referenceResult, game.activeRound.roundNumber);
 });

 test('game status should be playing', function () {
 // Arrage
 let game = new GameModule.Game();
 let referenceResult = GameModule.GameState.Playing

 // Action
 game.StartRound();

 // Assert
 assert.equal(referenceResult, game.gameState);
 });

 test('a bomb should be ready', function () {
 // Arrage
 let game = new GameModule.Game();
 let referenceResult = BombModule.BombState.ready;

 // Action
 game.StartRound();

 // Assert
 assert.equal(referenceResult, game.activeRound.bomb.state);
 });
 });

 suite('When the first round ends and nothing happens', function () {
 test('then CT win', function () {
 // Arrage
 let game = new GameModule.Game();
 let referenceResult = GameModule.RoundState.Finished_CounterTerroristsWon;

 // Action
 game.StartRound();
 game.EndRound();

 // Assert
 assert.equal(referenceResult, game.activeRound.roundState);
 });

 test('then score is 0 / 1', function () {
 // Arrage
 let game = new GameModule.Game();
 let referenceResult = '0 / 1';

 // Action
 game.StartRound();
 game.EndRound();

 // Assert
 assert.equal(referenceResult, game.score);
 });
 });

 suite('When the first round ends and a bomb is planted', function () {
 test('then T win', function () {
 // Arrage
 let game = new GameModule.Game();
 let referenceResult = GameModule.RoundState.Finished_TerroristsWon;

 // Action
 game.StartRound();
 game.activeRound.terroristsTeam.plantBomb(game.activeRound.bomb);
 game.EndRound();

 // Assert
 assert.equal(referenceResult, game.activeRound.roundState);
 });

 test('then score is 1 / 0', function () {
 // Arrage
 let game = new GameModule.Game();
 let referenceResult = '1 / 0';

 // Action
 game.StartRound();
 game.activeRound.terroristsTeam.plantBomb(game.activeRound.bomb);
 game.EndRound();

 // Assert
 assert.equal(referenceResult, game.score);
 });
 });

 suite('When the first round ends and a bomb is defused', function () {
 test('then CT win', function () {
 // Arrage
 let game = new GameModule.Game();
 let referenceResult = GameModule.RoundState.Finished_CounterTerroristsWon;

 // Action
 game.StartRound();
 game.activeRound.terroristsTeam.plantBomb(game.activeRound.bomb);
 game.activeRound.counterTerroristsTeam.defuseBomb(game.activeRound.bomb);
 game.EndRound();

 // Assert
 assert.equal(referenceResult, game.activeRound.roundState);
 });

 test('then score is 0 / 1', function () {
 // Arrage
 let game = new GameModule.Game();
 let referenceResult = '0 / 1';

 // Action
 game.StartRound();
 game.activeRound.terroristsTeam.plantBomb(game.activeRound.bomb);
 game.activeRound.counterTerroristsTeam.defuseBomb(game.activeRound.bomb);
 game.EndRound();

 // Assert
 assert.equal(referenceResult, game.score);
 });
 });

 suite('When CT win for the second time', function () {
 test('then CT win a game', function () {
 // Arrage
 let game = new GameModule.Game();
 let referenceResult = GameModule.GameState.Finished_CounterTerroristsWon;

 // Action
 game.StartRound();
 game.activeRound.terroristsTeam.plantBomb(game.activeRound.bomb);
 game.activeRound.counterTerroristsTeam.defuseBomb(game.activeRound.bomb);
 game.EndRound();

 game.StartRound();
 game.activeRound.terroristsTeam.plantBomb(game.activeRound.bomb);
 game.activeRound.counterTerroristsTeam.defuseBomb(game.activeRound.bomb);
 game.EndRound();

 // Assert
 assert.equal(referenceResult, game.gameState);
 });
 });

 suite('When T win for the second time', function () {
 test('then T win a game', function () {
 // Arrage
 let game = new GameModule.Game();
 let referenceResult = GameModule.GameState.Finished_TerroristsWon;

 // Action
 game.StartRound();
 game.activeRound.terroristsTeam.plantBomb(game.activeRound.bomb);
 game.EndRound();

 game.StartRound();
 game.activeRound.terroristsTeam.plantBomb(game.activeRound.bomb);
 game.EndRound();

 // Assert
 assert.equal(referenceResult, game.gameState);
 });
 });
 */