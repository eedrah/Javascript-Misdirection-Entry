# Javascript-Misdirection-Entry

- I went with the simple approach - a unicode exploit with enough of a justified reason to call an external library
 - Works on the principle that the key is sent before the hashes are computed
 - Global variable leak due to use of unicode characters
 - While not completely deterministic, I'd guess most keys will be computed with 20 hashes, but could try 21-30 hashes if 20 doesn't work.