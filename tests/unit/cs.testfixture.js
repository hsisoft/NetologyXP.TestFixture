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

class TestClass {
	constructor() {
		this._roundsWinnersCombination = [
			{terroristsWins: 0, counterTerroristsWins: 0, score: '0 / 0'},
			{terroristsWins: 0, counterTerroristsWins: 1, score: '0 / 1'},
			{terroristsWins: 0, counterTerroristsWins: 2, score: '0 / 2'},
			{terroristsWins: 1, counterTerroristsWins: 0, score: '1 / 0'},
			{terroristsWins: 1, counterTerroristsWins: 1, score: '1 / 1'},
			{terroristsWins: 1, counterTerroristsWins: 2, score: '1 / 2'},
			{terroristsWins: 2, counterTerroristsWins: 0, score: '2 / 0'},
			{terroristsWins: 2, counterTerroristsWins: 1, score: '2 / 1'},
		];
	};

	emulateTerroristsWins(count) {
		for (var i = 0; i < count; i++) {
			this.emulateRoundWithBombPlanted();
		}
	};

	emulateCounterTerroristsWins(count) {
		for (var i = 0; i < count; i++) {
			this.emulateRoundWithBombPlantedAndDefused();
		}
	};

	emulateIdleRound(){
		game.StartRound();
		game.EndRound();
	};

	emulateRoundWithBombPlanted(){
		game.StartRound();
		game.activeRound.terroristsTeam.plantBomb(game.activeRound.bomb);
		game.EndRound();
	}

	emulateRoundWithBombPlantedAndDefused(){
		game.StartRound();
		game.activeRound.terroristsTeam.plantBomb(game.activeRound.bomb);
		game.activeRound.counterTerroristsTeam.defuseBomb(game.activeRound.bomb);
		game.EndRound();
	}

	get roundsWinnersCombination (){
		return this._roundsWinnersCombination;
	};
}

const testClass = new TestClass();

suite('When Terrorist and Counter-Terrorists Teams', function () {
	testClass.roundsWinnersCombination.forEach(function (roundsWinnersCombination) {
		test('win ' + roundsWinnersCombination.terroristsWins + ' to '
			+ roundsWinnersCombination.counterTerroristsWins + ' then score should be '
			+ roundsWinnersCombination.score, function () {
			// Arrage
			let referenceResult = roundsWinnersCombination.score;

			// Action
			if (roundsWinnersCombination.terroristsWins >= roundsWinnersCombination.counterTerroristsWins) {
				testClass.emulateCounterTerroristsWins(roundsWinnersCombination.counterTerroristsWins);
				testClass.emulateTerroristsWins(roundsWinnersCombination.terroristsWins);
			} else {
				testClass.emulateTerroristsWins(roundsWinnersCombination.terroristsWins);
				testClass.emulateCounterTerroristsWins(roundsWinnersCombination.counterTerroristsWins);
			}

			// Assert
			assert.equal(referenceResult, game.score);
		});
	})
});

suite('When a game starts', function () {
	test('game status should be idle', function () {
		// Arrage
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
		let referenceResult = 2;

		// Action
		testClass.emulateIdleRound();
		game.StartRound();

		// Assert
		assert.equal(referenceResult, game.activeRound.roundNumber);
	});

	test('with number 1 - its number should be 1', function () {
		// Arrage
		let referenceResult = 1;

		// Action
		game.StartRound(1);

		// Assert
		assert.equal(referenceResult, game.activeRound.roundNumber);
	});

	test('with number 2 - its number should be 2', function () {
		// Arrage
		let referenceResult = 2;

		// Action
		game.StartRound(2);

		// Assert
		assert.equal(referenceResult, game.activeRound.roundNumber);
	});

	test('game status should be playing', function () {
		// Arrage
		let referenceResult = GameModule.GameState.Playing

		// Action
		game.StartRound();

		// Assert
		assert.equal(referenceResult, game.gameState);
	});

	test('a bomb should be ready', function () {
		// Arrage
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
		let referenceResult = GameModule.RoundState.Finished_CounterTerroristsWon;

		// Action
		testClass.emulateIdleRound();

		// Assert
		assert.equal(referenceResult, game.activeRound.roundState);
	});

	test('then score is 0 / 1', function () {
		// Arrage
		let referenceResult = '0 / 1';

		// Action
		testClass.emulateIdleRound();

		// Assert
		assert.equal(referenceResult, game.score);
	});
});

suite('When the first round ends and a bomb is planted', function () {
	test('then T win', function () {
		// Arrage
		let referenceResult = GameModule.RoundState.Finished_TerroristsWon;

		// Action
		testClass.emulateRoundWithBombPlanted();

		// Assert
		assert.equal(referenceResult, game.activeRound.roundState);
	});

	test('then score is 1 / 0', function () {
		// Arrage
		let referenceResult = '1 / 0';

		// Action
		testClass.emulateRoundWithBombPlanted();

		// Assert
		assert.equal(referenceResult, game.score);
	});
});

suite('When the first round ends and a bomb is defused', function () {
	test('then CT win', function () {
		// Arrage
		let referenceResult = GameModule.RoundState.Finished_CounterTerroristsWon;

		// Action
		testClass.emulateRoundWithBombPlantedAndDefused();

		// Assert
		assert.equal(referenceResult, game.activeRound.roundState);
	});

	test('then score is 0 / 1', function () {
		// Arrage
		let referenceResult = '0 / 1';

		// Action
		testClass.emulateRoundWithBombPlantedAndDefused();

		// Assert
		assert.equal(referenceResult, game.score);
	});
});

suite('When CT win for the second time', function () {
	test('then CT win a game', function () {
		// Arrage
		let referenceResult = GameModule.GameState.Finished_CounterTerroristsWon;

		// Action
		testClass.emulateCounterTerroristsWins(2);

		// Assert
		assert.equal(referenceResult, game.gameState);
	});
});

suite('When T win for the second time', function () {
	test('then T win a game', function () {
		// Arrage
		let referenceResult = GameModule.GameState.Finished_TerroristsWon;

		// Action
		testClass.emulateTerroristsWins(2);

		// Assert
		assert.equal(referenceResult, game.gameState);
	});
});
