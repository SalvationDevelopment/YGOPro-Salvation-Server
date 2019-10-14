/* eslint-disable no-plusplus */
function validateDeck(deck, banlist, database, cardpool, prerelease) {
    'use strict';
    //console.log(database[0], database.length);

    cardpool = cardpool || 'OCG/TCG';
    var main = {},
        side = {},
        extra = {},
        validate = {
            error: false,
            msg: ''
        },
        card;


    function getCardById(cardId) {
        var result = database.find(function (card) {
            if (card.id === parseInt(cardId, 10)) {
                return true;
            }
            return false;
        });
        return result || {};
    }

    function getFilteredCardById(cardId) {
        var result = database.find(function (card) {
            if (card.id === parseInt(cardId, 10)) {
                return true;
            }
            return false;
        });
        return result || null;
    }


    try {
        // make sure we can work with the input
        if (!deck.main || !deck.side || !deck.extra || typeof deck.main.forEach !== 'function' || typeof deck.side.forEach !== 'function' || typeof deck.extra.forEach !== 'function') {
            validate.error = true;
            validate.msg = 'Invalid deck object';
            return validate;
        }
        // check deck lengths
        if (deck.main.length < 40) {
            validate.error = true;
            validate.msg = 'Main Deck size below 40';
            return validate;
        }
        if (deck.main.length > 60 && banlist.masterRule > 0) {
            validate.error = true;
            validate.msg = 'Main Deck size above 60';
            return validate;
        }
        if (deck.side.length > 15) {
            validate.error = true;
            validate.msg = 'Side Deck size above 15';
            return validate;
        }
        if (deck.extra.length > 15 && banlist.masterRule > 0) {
            validate.error = true;
            validate.msg = 'Extra Deck size above 15';
            return validate;
        }
        // remap decks

        deck.main.forEach(function (card) {
            var cardObject = getCardById(card);
            if (cardObject.alias) {
                card = cardObject.alias;
            }
            if (!main[card]) {
                main[card] = 1;
            } else {
                main[card]++;
            }
        });
        deck.side.forEach(function (card) {
            var cardObject = getCardById(card);
            if (cardObject.alias) {
                card = cardObject.alias;
            }
            if (!side[card]) {
                side[card] = 1;
            } else {
                side[card]++;
            }
        });
        deck.extra.forEach(function (card) {
            var cardObject = getCardById(card);
            if (cardObject.alias) {
                card = cardObject.alias;
            }
            if (!extra[card]) {
                extra[card] = 1;
            } else {
                extra[card]++;
            }
        });
        // check amount of cards

        for (card in main) {
            var reference = getCardById(card);
            if (reference === null) {
                validate.error = true;
                validate.msg = 'Error loading deck: check Deck Edit to verify that your deck looks fine';
                return validate;
            } else {
                if (main[card] > 3 || side[card] && main[card] + side[card] > 3) {
                    validate.error = true;
                    validate.msg = 'You can\'t have ' + cardAmount + ' copies of ' + '"' + reference.name + '"';
                    return validate;
                }
            }
        }
        for (card in side) {
            var reference = getCardById(card);
            if (reference === null) {
                validate.error = true;
                validate.msg = 'Error loading deck: check Deck Edit to verify that your deck looks fine';
                return validate;
            }
            if (side[card] > 3 || main[card] && main[card] + side[card] > 3) {
                validate.error = true;
                validate.msg = 'You can\'t have ' + cardAmount + ' copies of ' + '"' + reference.name + '"';
                return validate;
            }
        }
        for (card in extra) {
            if (reference == null) {
                validate.error = true;
                validate.msg = 'Error loading deck: check Deck Edit to verify that your deck looks fine';
                return validate;
            } else {
                var reference = getCardById(card);
                if (extra[card] > 3 || side[card] && extra[card] + side[card] > 3) {
                    validate.error = true;
                    validate.msg = 'You can\'t have ' + cardAmount + ' copies of ' + '"' + reference.name + '"';
                    return validate;
                }
            }
        }
        // check banlist.
        for (var card in banlist.bannedCards) {
            var cardAmount = 0,
                reference = getCardById(card);
            if (reference.alias) {
                card = reference.alias;
            }
            if (main[card]) {
                cardAmount += main[card];
            }
            if (side[card]) {
                cardAmount += side[card];
            }
            if (extra[card]) {
                cardAmount += extra[card];
            }
            if (cardAmount > banlist.bannedCards[card]) {
                validate.error = true;
                validate.msg = 'The number of copies of ' + '"' + reference.name + '"' + ' exceeds the number permitted by the selected Forbidden/Limited Card List';
                return validate;
            }
        }
        //console.log(banlist.region);
        if (banlist.region == 'tcg') {
            //console.log('checking against tcg');
            for (var card in main) {
                var reference = getFilteredCardById(card),
                    subreference = getCardById(card);
                if (!reference) {

                }
                //console.log(reference.name, subreference.tcg.date, new Date(banlist.endDate));
                if (reference.tcg.date || (reference && cardpool == 'OCG/TCG')) {
                    if (reference.tcg.date > new Date(banlist.endDate)) {
                        //console.log(card)
                        validate.error = true;
                        validate.msg = '"' + subreference.name + '"' + ' does not exist in the timeframe of the selected Forbidden/Limited Card List';
                        return validate;
                    }
                } else {
                    //console.log(card.tcg, card)
                    validate.error = true;
                    validate.msg = '"' + reference.name + '"' + ' does not exist in the TCG';
                    return validate;
                }
            }
            for (var card in side) {
                var reference = getFilteredCardById(card),
                    subreference = getCardById(card);
                //console.log(reference.name, subreference.tcg.date, new Date(banlist.endDate));
                if (reference.tcg.date || (reference && cardpool == 'OCG/TCG')) {
                    if (reference.tcg.date > new Date(banlist.endDate)) {
                        //console.log(card)
                        validate.error = true;
                        validate.msg = '"' + subreference.name + '"' + ' does not exist in the timeframe of the selected Forbidden/Limited Card List';
                        return validate;
                    }
                } else {
                    //console.log(card.tcg, card)
                    validate.error = true;
                    validate.msg = '"' + reference.name + '"' + ' does not exist in the TCG';
                    return validate;
                }
            }
            for (var card in extra) {
                var reference = getFilteredCardById(card),
                    subreference = getCardById(card);
                //console.log(reference.name, subreference.tcg.date, new Date(banlist.endDate));
                if (reference.tcg.date || (reference && cardpool == 'OCG/TCG')) {
                    if (reference.tcg.date > new Date(banlist.endDate)) {
                        //console.log(card)
                        validate.error = true;
                        validate.msg = '"' + subreference.name + '"' + ' does not exist in the timeframe of the selected Forbidden/Limited Card List';
                        return validate;
                    }
                } else {
                    //console.log(card.tcg, card)
                    validate.error = true;
                    validate.msg = '"' + reference.name + '"' + ' does not exist in the TCG';
                    return validate;
                }
            }
        }
        if (banlist.region == 'ocg') {
            //console.log('checking against ocg');
            for (var card in main) {
                var reference = getFilteredCardById(card),
                    subreference = getCardById(card);
                //console.log(reference.name, subreference.ocg.date, new Date(banlist.endDate));
                if (reference.ocg.date || (reference && cardpool == 'OCG/TCG')) {
                    if (reference.ocg.date > new Date(banlist.endDate)) {
                        //console.log(card)
                        validate.error = true;
                        validate.msg = '"' + subreference.name + '"' + ' does not exist in the timeframe of the selected Forbidden/Limited Card List';
                        return validate;
                    }
                } else {
                    //console.log(card.ocg, card)
                    validate.error = true;
                    validate.msg = '"' + reference.name + '"' + ' does not exist in the OCG';
                    return validate;
                }
            }
            for (var card in side) {
                var reference = getFilteredCardById(card),
                    subreference = getCardById(card);
                //console.log(reference.name, subreference.ocg.date, new Date(banlist.endDate));
                if (reference.ocg.date || (reference && cardpool == 'OCG/TCG')) {
                    if (reference.ocg.date > new Date(banlist.endDate)) {
                        //console.log(card)
                        validate.error = true;
                        validate.msg = '"' + subreference.name + '"' + ' does not exist in the timeframe of the selected Forbidden/Limited Card List';
                        return validate;
                    }
                } else {
                    //console.log(card.ocg, card)
                    validate.error = true;
                    validate.msg = '"' + reference.name + '"' + ' does not exist in the OCG';
                    return validate;
                }
            }
            for (var card in extra) {
                var reference = getFilteredCardById(card),
                    subreference = getCardById(card);
                //console.log(reference.name, subreference.ocg.date, new Date(banlist.endDate));
                if (reference.ocg.date || (reference && cardpool == 'OCG/TCG')) {
                    if (reference.ocg.date > new Date(banlist.endDate)) {
                        //console.log(card)
                        validate.error = true;
                        validate.msg = '"' + subreference.name + '"' + ' does not exist in the timeframe of the selected Forbidden/Limited Card List';
                        return validate;
                    }
                } else {
                    //console.log(card.ocg, card)
                    validate.error = true;
                    validate.msg = '"' + reference.name + '"' + ' does not exist in the OCG';
                    return validate;
                }
            }
        }
        if (banlist.masterRule < 4) {
            for (var card in extra) {
                var reference = getCardById(card);
                if (reference.type >= 33554433) {
                    validate.error = true;
                    validate.msg = 'Link Monsters are not permitted by the selected Forbidden/Limited Card List';
                    return validate;
                }
            }
        }
        return validate;
    } catch (error) {
        //console.log(error);
        return validate;
    }
}

if (module && typeof module.exports !== 'undefined') {
    module.exports = validateDeck;
}