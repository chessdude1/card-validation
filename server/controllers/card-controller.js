const cardService = require('../service/card-service');
const ApiError = require('../exceptions/api-error');

class cardController {
    async addCard(req, res, next) {
        try {
            const { CVV, amount, cardNumber, expirationDate } = req.body;
            const cardData = await cardService.addCard(CVV, amount, cardNumber, expirationDate);
            return res.json(cardData);
        } catch (e) {
            next(e);
        }
    }
}


module.exports = new cardController();
