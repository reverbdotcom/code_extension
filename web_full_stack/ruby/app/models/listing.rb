class Listing < ActiveJob::Base
  CURRENCY = ['', 'USD', 'EUR']
  SHIPPING_REGION = ['', 'US_CON', 'FR']
end