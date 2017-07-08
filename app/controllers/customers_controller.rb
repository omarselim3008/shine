class CustomersController < ApplicationController
  def index
  	search = params['keywords']
  	@customers = if search.present?
  		customer_search_term = CustomerSearchTerm.new(search)
  		@customers = Customer.where(customer_search_term.where_clause, customer_search_term.where_args).order(customer_search_term.order)
  	else
  	  Customer.all.limit(10)
  	end
  end
end