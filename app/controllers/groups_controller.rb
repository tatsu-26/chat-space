class GroupsController < ApplicationController
  def new
    @group = Group.new
  end

  def edit
   @group = Group.find(params[:id])
  end

  def create
  end

  def update
  end
  
  
    
  

end
