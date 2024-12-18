const $ = require('jquery');
const { nextSequence, checkSequence, sequence, userSequence, level } = require('../script.js');

describe('Simon Says Game', () => {
    beforeEach(() => {
        document.body.innerHTML = `
            <button id="start">Start</button>
            <div id="green" class="color-button"></div>
            <div id="red" class="color-button"></div>
            <div id="yellow" class="color-button"></div>
            <div id="blue" class="color-button"></div>
        `;
    });

    test('should start the game and increase the level', () => {
        $('#start').click();
        expect($('#start').text()).toBe('Level 1');
    });

    test('should add a color to the sequence', () => {
        $('#start').click();
        expect(sequence.length).toBe(1);
    });

    test('should reset the game on wrong sequence', () => {
        sequence.push('green');
        userSequence.push('red');
        checkSequence(0);
        expect($('#start').text()).toBe('Game Over! Start Again');
        expect(sequence.length).toBe(0);
        expect(level).toBe(0);
    });

    test('should proceed to next level on correct sequence', () => {
        sequence.push('green');
        userSequence.push('green');
        checkSequence(0);
        expect($('#start').text()).toBe('Level 2');
    });
});