import scoreAnswers from '../src/score-answers.js';
const test = QUnit.test;

test('all correct answers is 5', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const heartAnswer = 'burgers';
    const hometownAnswer = 'phoenix';
    const cityAnswer = 'los angeles';
    const dislikeAnswer = 'crocs';
    const trickAnswer = 'yes';
    const expected = 5;

    //Act 
    // Call the function you're testing and set the result to a const
    const score = scoreAnswers(heartAnswer, hometownAnswer, cityAnswer, dislikeAnswer, trickAnswer);

    //Assert
    assert.equal(score, expected);
});

// test('all correct answers is 0', function(assert) {
//     //Arrange
//     // Set up your parameters and expectations
//     const heartAnswer = 'burgers';
//     const hometownAnswer = 'phoenix';
//     const cityAnswer = 'los angeles';
//     const dislikeAnswer = 'crocs';
//     const trickAnswer = 'yes';
//     const expected = 0;

//     //Act 
//     // Call the function you're testing and set the result to a const
//     const score = scoreAnswers(heartAnswer, hometownAnswer, cityAnswer, dislikeAnswer, trickAnswer);

//     //Assert
//     assert.equal(score, expected);
// });