class ListingsController < ApplicationController
  def index
    pp params
    currency = params[:currency]
    shipping_region = params[:shipping_region]
    @listings = ::ReverbClient.new.listings(currency: currency, shipping_region: shipping_region)
  end
end
