var Game = require('./../lib/codebreaker').Game

 describe('Codebreaker',
function() {

    describe('Game',
    function() {

        var game = new Game()

        describe('#start',
        function() {

            it("sends a welcome message",
            function() {
                var message = game.start();
                expect(message).not.toBeUndefined();
                expect(message).toContain("Hello")
            })

            it("should accept secret code",
            function() {
                var message = game.start(1234);
                expect(game.secret).not.toBeUndefined();
                expect(game.secret).toEqual(1234);
            })

            it("prompts for first guess",
            function() {
                var message = game.start();
                expect(message).not.toBeUndefined()
                expect(message).toContain("Enter guess:")
            })

        })

        describe('#guess',
        function() {

            beforeEach(function() {
                game.start(1234);
            })

            describe("with a full match",
            function() {

                it("sends a mark with 'Correct!'",
                function() {
                    var result = game.guess(1234);
                    expect(result).toEqual('Correct!');
                })

            })

            describe("with no matches",
            function() {

                it("sends a mark with ''",
                function() {
                    var result = game.guess(5678);
                    expect(result).toEqual('');
                })

            })

            describe("with 1 number match",
            function() {

                it("sends a mark with '-'",
                function() {
                    var result = game.guess(5671);
                    expect(result).toEqual('-')
                })

            })

            describe("with 1 exact match",
            function() {

                it("sends a mark with '+'",
                function() {
                    var result = game.guess(1567);
                    expect(result).toEqual('+')
                })

            })

            describe("with 2 number matches",
            function() {

                it("sends a mark with '--'",
                function() {
                    var result = game.guess(3456);
                    expect(result).toEqual('--')
                })

            })

            describe("with 1 number match and 1 exact match -in that order",
            function() {

                it("sends a mark with '+-'",
                function() {
                    var result = game.guess(4724);
                    expect(result).toEqual('+-')
                })

            })

            describe("with 1115 & 5555",
            function() {

                it("sends a mark with '+'",
                function() {
                    game.start(1115);
                    var result = game.guess(5555);
                    expect(result).toEqual('+')
                })

            })

            describe("with 1115 & 5552",
            function() {

                it("sends a mark with '-'",
                function() {
                    game.start(1115);
                    var result = game.guess(5225);
                    expect(result).toEqual('+')
                })

            })

        })

    })

})
