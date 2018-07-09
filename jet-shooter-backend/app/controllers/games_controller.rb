class GamesController < ApplicationController

    def new

    end

    def create
        
    end

    private

    def game_params
        params.require(:game).permit(:score, :user_id)
    end
end
