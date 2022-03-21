const CardModel = require('../models/card-model');
const ApiError = require('../exceptions/api-error');

class CardService {
  async addCard(CVV, amount, cardNumber, expirationDate) {
    const candidate = await CardModel.findOne({ cardNumber })
    if (candidate) {
      throw ApiError.BadRequest(`Пользователь с номером карты ${cardNumber} Уже существует`)
    } // should be hash card number using uuid.v4()

    const card = await CardModel.create({ CVV, amount, cardNumber, expirationDate })

    return { amount: card.amount, RequestId: card._id }
  }

}

module.exports = new CardService();