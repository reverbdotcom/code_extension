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
    ReverbClient.new.categories
  end
end
