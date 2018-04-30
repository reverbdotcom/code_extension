class CategoriesController < ApplicationController
  def index
    @categories = search_categories(params[:query])
  end


  private

  def search_categories(query)
    return [] if query.blank?
    load_categories.select do |category|
      category['full_name'].downcase.include?(query.downcase)
    end
  end

  def load_categories
    headers = {
      'Accept' => 'application/json',
      'Accept-Version' => '3.0',
      'Content-Type' => 'application/json'
    }
    JSON.parse(HTTParty.get('http://api.reverb.com/api/categories/flat', headers: headers).body)['categories']
  end
end
