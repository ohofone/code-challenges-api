DROP TABLE IF EXISTS challenges;
DROP TABLE IF EXISTS users;

CREATE TABLE challenges (
    id SERIAL PRIMARY KEY,
    question VARCHAR(2048) NOT NULL,
    dataType VARCHAR(32) NOT NULL,
    bigOTime VARCHAR(255),
    bigOSpace VARCHAR(255),
    difficulty VARCHAR(32),
    edgeCases VARCHAR(255),
    solution VARCHAR(2048) NOT NULL,
    avg_time INTEGER DEFAULT 0,
    completions INTEGER DEFAULT 0
);

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    amazon_id VARCHAR(255),
    has_open_question BOOLEAN DEFAULT FALSE,
    question_id INTEGER,
    start_time BIGINT
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
  'Find the top two largest numbers in an array',
  'array',
  'O of n, where n is the number of elements in the array',
  'O of 1',
  'easy',
  'all values are equal:if you only have one value',
  'The optimal solution for this problem is to use two variables and check each array index to see if it is larger than the variables'
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
  'Find the number of even integers within an array',
  'array',
  'O of n, where n is the number of elements in the array',
  'O of 1',
  'easy',
  'No even numbers:no numbers within an array',
  'The optimal solution for this problem is to check each array element and increment a counter if the number is even'
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
  'Find the missing number in an unsorted array of integers from one to one hundred',
  'array',
  'O of n, where n is the number of elements in the array',
  'O of 1',
  'medium',
  'more than one missing value',
  'The optimal solution for this problem is to calculate the sum of the values in the array and subtract it from the expected sum of 5,050'
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
  'Find the duplicate number in an integer array',
  'array',
  'O of n, where n is the number of elements in the array',
  'O of n, where n is the number of elements in the set',
  'medium',
  'more than one duplicate:no duplicate values',
  'The optimal solution for this problem is use a set to store the duplicate values'
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
  'Given an array, split the array into two sub arrays where the average value of each sub array is equal. Return false if not possible',
  'array',
  'O of n squared, where n is the number of elements of the array',
  'O of 1',
  'hard',
  'No even numbers:no numbers within an array',
  'The optimal solution for this problem is to find the sum of the initial array. Keep track of the sum of each sub array. To confirm, subtract the average of one subarray from the total average.'
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
  'O of n, n is the length of the string',
  'O of 1',
  'easy',
  'single char string:odd or even length:case-insensitive',
  'The optimal solution for this problem is to compare the beginning and end of the string and step inwards from both ends until you reach the middle.'
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
  'Count the number of vowels in a string',
  'string',
  'O of n, n is the length of the string',
  'O of 1',
  'easy',
  'case-insensitive',
  'The optimal solution for this problem is to filter and use a regular expression to match vowels, incrementing a counter each time one is found.'
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
  'Reverse the words in a given sentence',
  'string',
  'O of n, n is the number of words in the sentence',
  'O of 1',
  'medium',
  'one word sentence',
  'The optimal solution for this problem is to split the sentence at the spaces. Reverse the array, then join the array back into a sentence.'
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
  'Given two strings, determine if they are one edit from being the same. Return true or false',
  'string',
  'O of n, n is the number of characters in the larger string',
  'O of 1',
  'medium',
  '',
  'The optimal solution for this problem is to iterate the over both strings and increment a counter whenever there is a difference. If the difference is equal to or greater than 2, return false.'
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
  'Given a string, replace the duplicate characters with the number of times it appears as a duplicate',
  'string',
  'O of n, n is the number of characters in the sentence',
  'O of 1',
  'hard',
  'special symbols',
  'The optimal solution for this problem is to loop through the string. When a new character is encountered, add the new character to an object with the character as the key and value equal to one. Each time you encounter a duplicate, replace the character with the value from the object and increment the corresponding value.'
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
  'Find the largest value in a linked list',
  'linkedlist',
  'O of n, where n is the numder of nodes within the list',
  'O of 1',
  'easy',
  'Non integer values:duplicate values',
  'The optimal solution for this problem is to iterate through the linked list. Check each node value against your stored max value.'
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
  'Find the middle element of a singly linked list in one pass',
  'linkedlist',
  'O of n, where n is the number of nodes within the list',
  'O of 1',
  'medium',
  'even number nodes',
  'The optimal solution for this problem is to use two pointers, one which moves twice as fast as the other. When the fast pointer reaches the end, the slow pointer will be at the middle.'
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
  'Reverse a linked list',
  'linkedlist',
  'O of n, where n is the number of nodes within the list',
  'O of 1',
  'medium',
  'If there is only one node',
  'The optimal solution for this problem is to use three tracking variables and modify the linked list as you traverse.'
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
  'Find the kayth node from the end of the linked list',
  'linkedlist',
  'O of n, where n is the numder of nodes within the list',
  'O of 1',
  'hard',
  'If there is only one node:k is greater than the length of the list:k is a negative number',
  'The optimal solution for this problem is to use two pointers, a fast and a slow. When the fast pointer gets kayth nodes from the beginning, start the slow node. When the fast pointer gets to the end, the slow pointer will be referencing the kayth node from the end.'
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
  'Determine if a linked list contains a loop',
  'linkedlist',
  'O of n, where n is the numder of nodes in the list',
  'O of 1',
  'hard',
  'If there is only one node',
  'The optimal solution for this problem is to use two pointers. One pointer moves twice as fast as the other. If the fast pointer gets to the end of the list, there is no loop. If the slow and fast pointers ever reference the same node, there is a loop.'
);
