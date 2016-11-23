# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20161123013519) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "companies", force: :cascade do |t|
    t.string   "name"
    t.string   "website"
    t.text     "pros"
    t.text     "cons"
    t.string   "size"
    t.string   "focus"
    t.string   "industry"
    t.integer  "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_companies_on_user_id", using: :btree
  end

  create_table "job_statuses", force: :cascade do |t|
    t.string   "category"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "jobs", force: :cascade do |t|
    t.integer  "user_id"
    t.integer  "job_status_id"
    t.integer  "company_id"
    t.text     "pros"
    t.text     "cons"
    t.datetime "date_applied"
    t.string   "contact_name"
    t.string   "contact_phone"
    t.string   "contact_email"
    t.string   "located"
    t.string   "salary"
    t.text     "notes"
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
    t.string   "title"
    t.index ["company_id"], name: "index_jobs_on_company_id", using: :btree
    t.index ["job_status_id"], name: "index_jobs_on_job_status_id", using: :btree
    t.index ["user_id"], name: "index_jobs_on_user_id", using: :btree
  end

  create_table "tasks", force: :cascade do |t|
    t.string   "title"
    t.text     "desc"
    t.datetime "due"
    t.boolean  "complete"
    t.datetime "completed_on"
    t.integer  "user_id"
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
    t.integer  "company_id"
    t.integer  "job_id"
    t.index ["company_id"], name: "index_tasks_on_company_id", using: :btree
    t.index ["job_id"], name: "index_tasks_on_job_id", using: :btree
    t.index ["user_id"], name: "index_tasks_on_user_id", using: :btree
  end

  create_table "users", force: :cascade do |t|
    t.string   "email"
    t.text     "password_digest"
    t.string   "username"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

  add_foreign_key "companies", "users"
  add_foreign_key "jobs", "companies"
  add_foreign_key "jobs", "job_statuses"
  add_foreign_key "jobs", "users"
  add_foreign_key "tasks", "companies"
  add_foreign_key "tasks", "jobs"
  add_foreign_key "tasks", "users"
end
