class ListingsController < ApplicationController
  def index
    @listings = ::ReverbClient.new.listings
    # @currencies = ::Listing
  end
end
