class UsersController < ApplicationController

  def search
    @users = User.where("name LIKE(?)", "%#{params[:keyword]}%").where.not(id: current_user)
    respond_to do |format|
      format.html
      format.json
    end
  end

  def edit
  end

  def update
  end
  
end
