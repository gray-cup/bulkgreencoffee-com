import { sqliteTable, integer, text, real } from "drizzle-orm/sqlite-core";

export const bulkgreencoffee_site = sqliteTable("bulkgreencoffee_site", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  created_at: text("created_at")
    .notNull()
    .$defaultFn(() => new Date().toISOString()),

  // customer
  name: text("name").notNull(),
  phone: text("phone").notNull(),
  email: text("email"),
  country: text("country").notNull().default("IN"),
  pincode: text("pincode").notNull(),
  address: text("address").notNull(),
  state: text("state"),
  gst_or_tax_id: text("gst_or_tax_id"),
  business_type: text("business_type"),

  // order
  products: text("products").notNull(), // JSON array of slugs
  quantity_tier: text("quantity_tier").notNull(),
  total_amount: integer("total_amount").notNull(),
  items_detail: text("items_detail"), // JSON array of {slug,name,image,tier,grams,price}

  // cashfree
  link_id: text("link_id").notNull(),
  cf_link_id: text("cf_link_id"),
  payment_status: text("payment_status").notNull().default("pending"),
  currency: text("currency").notNull().default("INR"),
  charged_amount: real("charged_amount"),
  cf_payment_id: text("cf_payment_id"),
  status_updated_at: text("status_updated_at"),
});
