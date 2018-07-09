class UsersController < ApplicationController

    def new
        @user = User.new
    end

    def create
      @user = User.create(user_params)
      if @user.valid?
        console.log("yay")
      else
        flash[:errors] = @user.errors.full_messages
      end
    end

    def edit

    end

    private

    def user_params
        params.require(:user).permit(:username, :password)
    end
end
