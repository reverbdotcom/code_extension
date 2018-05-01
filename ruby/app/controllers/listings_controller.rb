class ListingsController < ApplicationController
  def index
    @listings = load_listings
  end


  private

  def load_listings
    headers = {
      'Accept' => 'application/json',
      'Accept-Version' => '3.0',
      'Content-Type' => 'application/json'
    }
    JSON.parse(HTTParty.get('http://api.reverb.com/api/listings/all?per_page=10', headers: headers).body)['listings']
  end
end
