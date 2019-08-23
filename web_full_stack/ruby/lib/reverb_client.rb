require 'httparty'

class ReverbClient
  HEADERS = {
    'Accept' => 'application/json',
    'Accept-Version' => '3.0',
    'Content-Type' => 'application/json'
  }

  attr_reader :base_uri

  def initialize(base_uri: 'https://api.reverb.com/api')
    @base_uri = base_uri
  end

  def listings(per_page: 10, currency: 'EUR', shipping_region: 'FR')
    pp currency
    pp shipping_region
    get('/listings/all', {per_page: per_page}, { 'X-Display-Currency' => currency,  'X-Shipping-Region' => shipping_region })['listings']
  end

  def categories
    get('/categories/flat')['categories']
  end

  private

  def get(path, params={}, extra_headers = {})
    # merges the extra headers with HEADERS
    JSON.parse(HTTParty.get(base_uri + path, headers: HEADERS.merge(extra_headers), query: params).body)
  end
end
