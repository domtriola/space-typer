# == Schema Information
#
# Table name: quotes
#
#  id         :integer          not null, primary key
#  title      :string           not null
#  body       :text             not null
#  url        :string           not null
#  image_url  :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Quote < ActiveRecord::Base
  validates :title, :body, :url, :image_url, presence: true

  has_many :scores
end
