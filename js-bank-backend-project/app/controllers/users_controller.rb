class UsersController < ApplicationController
    
    def index
    render json: User.all
    end
    
    def create 
        user = User.create!(user_params)
            session[:user_id] = user.id
            render json: user, status: :created
    
            # render json: {errors: user.errors.full_messages }, status: :unprocessable_entity
    end

    def show 
        user = User.find_by(id: session[:user_id])
        if user
            render json: user
        else
            render json: { error: "not authorized" }, status: :unauthorized
        end
    end

    private 
    
    def user_params
    params.permit(:name, :password, :password_confirmation)
    end
    
end
