class ListingsController < ApplicationController
  def index
    @listings = ::ReverbClient.new.listings
  end
end
