# Javascript-Misdirection-Entry

- I went with the simple approach - a unicode exploit with enough of a justified reason to call an external library
 - Works on the principle that the information to be able to compute the key is sent before the hashes are computed
 - Global variable misuse due to use of unicode characters
 - The server takes in a token that when hashed once can reconstruct the key
 - The final key actually doesn't use any input, and is only a random number hashed once. It looks as though it is hashed 20 times, however, with user given entropy
