/*! 
 * numeral.js language configuration
 * language : Finnish
 * author : Sami Saada : https://github.com/samitheberber
 */
(function(){var n={delimiters:{thousands:" ",decimal:","},abbreviations:{thousand:"k",million:"M",billion:"G",trillion:"T"},ordinal:function(){return"."},currency:{symbol:"€"}};"undefined"!=typeof module&&module.exports&&(module.exports=n),"undefined"!=typeof window&&this.numeral&&this.numeral.language&&this.numeral.language("fi",n)})();