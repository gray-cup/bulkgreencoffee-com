import { pgTable, serial, text, integer, timestamp, doublePrecision } from "drizzle-orm/pg-core";

export const bulkgreencoffee_site = pgTable("bulkgreencoffee_site", {
  id:             serial("id").primaryKey(),
  created_at:     timestamp("created_at").defaultNow().notNull(),

  // customer
  name:           text("name").notNull(),
  phone:          text("phone").notNull(),
  email:          text("email"),
  country:        text("country").notNull().default("IN"),
  pincode:        text("pincode").notNull(),
  address:        text("address").notNull(),
  state:          text("state"),
  gst_or_tax_id:  text("gst_or_tax_id"),
  business_type:  text("business_type"),

  // order
  products:       text("products").notNull(),   // JSON array of slugs
  quantity_tier:  text("quantity_tier").notNull(),
  total_amount:   integer("total_amount").notNull(),

  // cashfree
  link_id:        text("link_id").notNull(),
  payment_status: text("payment_status").notNull().default("pending"),
  currency:       text("currency").notNull().default("INR"),        // currency actually charged via Cashfree (INR for domestic, local currency for international)
  charged_amount: doublePrecision("charged_amount"),                 // amount in `currency` sent to Cashfree; null means it equals total_amount (INR)
  cf_payment_id:  text("cf_payment_id"),                             // Cashfree's payment id, set once a webhook/verify call confirms the payment
  status_updated_at: timestamp("status_updated_at"),
});
