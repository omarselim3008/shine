class FakeBillingController < ApplicationController
  def show
    Resque.enqueue(Sleeper, 15)
    if params[:cardholder_id]
      render json: {
        lastFour: Faker::Business.credit_card_number[-4..-1],
        cardType: Faker::Business.credit_card_type,
        expirationMonth: Faker::Business.credit_card_expiry_date.month,
        expirationYear: Faker::Business.credit_card_expiry_date.year,
        detailsLink: Faker::Internet.url
      }
    end
  end
end