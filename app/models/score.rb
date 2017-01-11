# == Schema Information
#
# Table name: scores
#
#  id         :integer          not null, primary key
#  wpm        :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  user_id    :integer          not null
#  quote_id   :integer          not null
#

class Score < ActiveRecord::Base
  validates :wpm, :user, :quote, presence: true

  belongs_to :user
  belongs_to :quote
end
