/*! 
 * numeral.js language configuration
 * language : belgium-dutch (be-nl)
 * author : Dieter Luypaert : https://github.com/moeriki
 */
(function(){var n={delimiters:{thousands:" ",decimal:","},abbreviations:{thousand:"k",million:" mln",billion:" mld",trillion:" bln"},ordinal:function(n){var e=n%100;return 0!==n&&1>=e||8===e||e>=20?"ste":"de"},currency:{symbol:"€ "}};"undefined"!=typeof module&&module.exports&&(module.exports=n),"undefined"!=typeof window&&this.numeral&&this.numeral.language&&this.numeral.language("be-nl",n)})();