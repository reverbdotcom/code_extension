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

  def listings(per_page: 10)
    get('/listings/all', {per_page: per_page})['listings']
  end

  def categories
    get('/categories/flat')['categories']
  end

  private

  def get(path, params={})
    JSON.parse(HTTParty.get(base_uri + path, headers: HEADERS, query: params).body)
  end
end
