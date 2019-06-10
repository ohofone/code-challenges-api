DROP TABLE IF EXISTS challenges;

CREATE TABLE challenges (
    id SERIAL PRIMARY KEY,
    question VARCHAR(2048) NOT NULL,
    dataType VARCHAR(32) NOT NULL,
    bigOTime VARCHAR(255),
    bigOSpace VARCHAR(255),
    difficulty VARCHAR(32),
    edgeCases VARCHAR(255),
    solution VARCHAR(2048) NOT NULL
);

INSERT INTO challenges (
    question,
    dataType,
    bigOTime,
    bigOSpace,
    difficulty,
    edgeCases,
    solution
    )
    VALUES (
    'Find the missing number in a given an unsorted integer array from one to hundred?',
    'array',
    'O of n, where n is the size of the array',
    'O of 1',
    'medium',
    'more than one missing value',
    'The optimal solution for this problem is to calculate the sum of the values in the array and subtract it from the expected sum of 5,050.'
    );

INSERT INTO challenges (
    question,
    dataType,
    bigOTime,
    bigOSpace,
    difficulty,
    edgeCases,
    solution
    )
    VALUES (
    'Determine if a given string is a palindrome, meaning the string is the same when reversed.',
    'string',
    'O 0f n, n is the length of the string',
    'O of 1',
    'easy',
    'single char string:odd or even length:case-insensitive',
    'The optimal solution for this problem is to compare the beginning and end of the string and step inwards from both ends until you reach the middle.'
    );