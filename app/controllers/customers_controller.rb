class CustomersController < ApplicationController
	PAGE_SIZE = 10
  def index
  	@page = (params[:page] || 0).to_i
  	@keywords = params['keywords']
  	@customers = if @keywords.present?
  		customer_search_term = CustomerSearchTerm.new(@keywords)
  		@customers = Customer.where(customer_search_term.where_clause, customer_search_term.where_args)
  		  .order(customer_search_term.order)
  		  .offset(PAGE_SIZE * @page)
  		  .limit(PAGE_SIZE)
  	else
  	  Customer.all.order("last_name asc").offset(PAGE_SIZE * @page).limit(PAGE_SIZE)
  	end

    respond_to do |format|
      format.html { }
      format.json { render json: @customers}
    end

    def show
      customer = Customer.find(params[:id])
      respond_to do |format|
        format.json { render json: customer }
      end
    end

    def show
      customer_detail = CustomerDetail.find(params[:id])
      respond_to do |format|
        format.json { render json: customer_detail }
      end
    end

  end
end