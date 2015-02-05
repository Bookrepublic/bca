class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  before_action :set_locale

  def authenticate_active_admin_user!
    authenticate_user!
    unless current_user.role == 'administrator'
      flash[:alert] = "You are not authorized to access this resource!"
      redirect_to root_path
    end
  end

  def set_locale
    I18n.locale = params[:locale] || I18n.default_locale
  end
end
