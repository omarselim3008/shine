class CustomersController < ApplicationController
  def index
  	search = params['keywords']
  	byebug
  	@customers = if search.present?
  	  Customer.where("lower(first_name) LIKE :first_name", {first_name: search})
  	else
  	  Customer.all.limit(10)
  	end
  end
end