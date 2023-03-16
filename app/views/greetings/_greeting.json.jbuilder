json.extract! greeting, :id, :greeting, :created_at, :updated_at
json.url greeting_url(greeting, format: :json)
