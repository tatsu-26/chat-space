class Message < ApplicationRecord
  belongs_to :user
  belongs_to :group
  mount_uploader :image, ImageUploader
  with_options presence: true do
    validates :text
    validates :image
  end
  
  
end
