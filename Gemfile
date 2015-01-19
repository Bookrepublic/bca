source "https://rubygems.org"

ruby "2.1.5"

gem "airbrake"
gem "coffee-rails"
gem "delayed_job_active_record"
gem "email_validator"
gem "flutie"
gem "high_voltage"
gem "i18n-tasks"
gem "jquery-rails"
gem "newrelic_rpm"
gem "normalize-rails", "~> 3.0.0"
gem "pg"
gem "rack-timeout"
gem "rails", "4.1.8"
gem "recipient_interceptor"
gem "title"
gem "uglifier"
gem "unicorn"
gem 'formtastic'
gem 'medium-editor-rails'
gem 'rails-assets-iacquire-medium-editor-insert-plugin'
gem 'activeadmin', github: 'activeadmin'
gem 'devise'

# Frontend

gem 'slim-rails'

group :development do
  gem "bundler-audit"
  gem "spring"
  gem "spring-commands-rspec"
  gem 'mailcatcher'
  gem 'guard'
end

group :development, :test do
  gem 'better_errors'
  gem 'binding_of_caller'
  gem "awesome_print"
  gem "byebug"
  gem "dotenv-rails"
  gem "factory_girl_rails"
  gem "pry-rails"
  gem "rspec-rails", "~> 3.0.0"
end

group :test do
  gem "capybara-webkit", ">= 1.2.0"
  gem "database_cleaner"
  gem "formulaic"
  gem "launchy"
  gem "shoulda-matchers", require: false
  gem "timecop"
  gem "webmock"
end

group :staging, :production do
gem 'rails_12factor'
end
source 'https://rails-assets.org'

gem 'rails-assets-normalize-scss'
gem 'sass'
