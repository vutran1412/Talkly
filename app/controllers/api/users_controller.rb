class Api::UsersController < ApplicationController
    def create
        @user = User.new(user_params)
        if @user.save

        else
            render json: @user.errors.full_messages, status: 401
        end
    end

    def edit

    end

    def update
    end

    def destroy
    end

    private

    def user_params
        params.require(:user).permit(:username, :email, :password, :password_confirmation)
    end
end
