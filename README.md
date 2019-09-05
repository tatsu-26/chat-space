## userテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|eamil|string|null: false|
|group_id|integer|integer|null: false,foreign_key: true|

### Association
- has_many :groups_users
- has_many :groups, through: :groups_users
- has_many :messages

## groupテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|user_id|integer|integer|null: false,foreign_key: true|

### Association
- has_many :groups_users
- has_many :users, through: :groups_users

## groups_usersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user

## messageテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|text|text||
|image|text||

### Association
- belongs_to :user

