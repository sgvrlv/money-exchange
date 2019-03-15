// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
        var result = {};
        var col = {
            error: "You are rich, my friend! We don't have so much coins for exchange"
        };
        if (currency > 10000) {
            return col;
        }
        if (currency <= 0) {
            return result;
        }
        while (currency > 0) {
            if (currency >= 50) {
                result.H = (Math.floor(currency / 50));
                currency = currency - result.H * 50;
            }
            if (currency >= 25) {
                result.Q = (Math.floor(currency / 25));
                currency = currency - result.Q * 25;
            }
            if (currency >= 10) {
                result.D = (Math.floor(currency / 10));
                currency = currency - result.D * 10;
            }
            if (currency >= 5) {
                result.N = (Math.floor(currency / 5));
                currency = currency - result.N * 5;
            } else if (currency >= 1) {
                result.P = currency;
                currency = 0;
            }
        }
        return result;
}
