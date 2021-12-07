class AccountsController < ApplicationController

rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
before_action :authorize
skip_before_action :authorize, only [:index, :show, :set_account]
    def index 
        render json: Account.all
    end

    def show 
    account = Account.find(params[:id])
    render json :account
    end

    def create 
        account = @current_user.accounts.create!(account_params)
        render json: account, status: :created
    end

    private

    def account_params
    params.permit(:name, :account_number, :balance)
    end

    def render_unprocessable_entity_response(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end

    def authorize
        @current_user = User.find_by(id: session[:user_id])
        render json: { errors: ["Not authorized"] }, status: :unauthorized unless session.include? :user_id
    end
end
