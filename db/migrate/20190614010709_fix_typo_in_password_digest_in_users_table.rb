class FixTypoInPasswordDigestInUsersTable < ActiveRecord::Migration[5.2]
  def change
    rename_column :users, :password_diggest, :password_digest
  end
end
