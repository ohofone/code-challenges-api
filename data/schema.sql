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
  'Find the top two largest numbers in an array',
  'array',
  'O of n, where n is the size of the array',
  'O of 1',
  'easy',
  'all values are equal:if you only have one value',
  'The optimal solution for this problem is to set two variables and check each number'
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
  'Find the number of even numbers within an array',
  'array',
  'O of n, where n is the size of the array',
  'O of 1',
  'easy',
  'No even numbers:no numbers within an array',
  'The optimal solution for this problem is to check each index for even numbers and increment a counter'
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
  'Find the duplicate number in an integer array',
  'array',
  'O of n, where n is the size of the array',
  'O of n, where n is the size of the set',
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
  'O of n squared, where n is the length of the array',
  'O of 1',
  'hard',
  'No even numbers:no numbers within an array',
  'The optimal solution for this problem is to find the sum of the array of elements. Keep track of the sum for each sub array, to confirm average subtract the sub array from total sum.'
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
  'O 0f n, n is the length of the string',
  'O of 1',
  'easy',
  'case-insensitive',
  'The optimal solution for this problem is to filter and regex to increment counter when vowel is found.'
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
  'O 0f n, n is the number of words in the sentence',
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
  'O 0f n, n is the number of characters in the larger string',
  'O of 1',
  'medium',
  '',
  'The optimal solution for this problem is to iterate the over both strings and incrementing the differences. If the difference is equal to or greater than 2, return false.'
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
  'O 0f n, n is the number of characters in the sentence',
  'O of 1',
  'hard',
  'special symbols',
  'The optimal solution for this problem is to loop through the string, when a new character is encountered add to an object with the key value of the character equal to one. Each time you encounter a duplicate, replace the character with the value from the object and increase the counter.'
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
  'list',
  'O of n, where n is the numder of nodes within the list',
  'O of 1',
  'easy',
  'Non integer values:duplicate values',
  'The optimal solution for this problem is to iterate through the linked list checking each nodes value agaisnt your stored max value.'
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
  'list',
  'O of n, where n is the number of nodes within the list',
  'O of 1',
  'medium',
  'even number nodes',
  'The optimal solution for this problem is to use two pointers. One that moves twice as fast as the other. When the fast one reaches the end, the slow one will be at the middle.'
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
  'list',
  'O of n, where n is the number of nodes within the list',
  'O of 1',
  'medium',
  'If there is only one node',
  'The optimal solution for this problem is to use three pointers and modify the linked list in place.'
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
  'Find the kth node from the end of the linked list',
  'list',
  'O of n, where n is the numder of nodes within the list',
  'O of 1',
  'hard',
  'If there is only one node:k is greater than the length of the list:k is a negative number',
  'The optimal solution for this problem is to use two pointers, a fast and a slow. When the fast pointer gets kth nodes from the begining, start the slow node. When the fast node gets to the end, the slow node will be kth node from the end.'
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
  'Check if a linked list contains a loop',
  'list',
  'O of n, where n is the numder of nodes within the list',
  'O of 1',
  'hard',
  'If there is only one node',
  'The optimal solution for this problem is to use two pointers. One that moves twice as fast as the other. If the fast node gets to the end, there is no loop. If the slow and fast are ever the same node, there is a loop.'
);
