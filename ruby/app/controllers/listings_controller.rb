require 'reverb_client'

class ListingsController < ApplicationController
  def index
    @listings = ::ReverbClient.new.listings
  end
end
