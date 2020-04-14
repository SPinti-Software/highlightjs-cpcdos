/*
Language: CPCDOSC+
Author: SPinti Software
Contributors: Jordan D (0v3rl0w)
Description: Based on the CPCDOS' manual
Website: https://cpcdos.net
*/

module.exports = function(hljs) {
    var COND_KEYWORD = {
        className: 'keyword',
        begin: '(sinon|else|alors|then):',
    };

    var END_KEYWORD = {
        className: 'keyword',
        begin: '(end|fin)\\/\\s(if|si|function|fonction|fenetre|window|'+
               'bouton|button|imagebox|picturebox|textebloc|textblock|checkbox|barreprogression|progressbar)',
    }

    var NUMBERS = {
        className: 'number',
        begin: '[0-9]+',
    };

    var VARIABLE = {
        className: 'variable',
        begin: '(%[a-zA-Z][a-zA-Z0-9._]+%|@#[a-zA-Z][a-zA-Z0-9._]+)'
    }

    var CPC_KEYWORDS = {
        lexemes: '[a-z]+\\/',
        keyword: "txt cls fix set couleurc colorf " +
                 "couleurf colorb exe cmd ccp aide " +
                 "help pos stopk stop sys aller goto " +
                 "si if rep dir copier copy supprimer " +
                 "delete renommer rename dossier folder ouvrir " +
                 "open ecrire write fermer close retour return " +
                 "fonction function declarer declare ping telecharger " +
                 "download serveur server client demarrer start iug " +
                 "gui message msgbox fenetre window imagebox picturebox " +
                 "bouton button textebloc textblock checkbox barreprogression " +
                 "progressbar end textebox creer create",
    };

    return {
        name : 'CPCDOSC+',
        aliases: ['cpc', 'CPC', 'ccp', 'CCP', 'cpcdosc+'],
        case_insensitive: true,
        keywords: CPC_KEYWORDS,

        contains: [
            END_KEYWORD,
            COND_KEYWORD,
            NUMBERS,
            VARIABLE,
            hljs.QUOTE_STRING_MODE,
            hljs.COMMENT('REM', '$', {relevance: 10}),
            hljs.COMMENT('\'', '$', {relevance: 10}),
            hljs.COMMENT('\\/\\/', '$', {relevance: 10}),
        ],
    }
}
