import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";

export const cdc = sqliteTable("CDC-COVID", {
  id: text("id").primaryKey(),
  geographyType: text("geography_type"),
  geography: text("geography"),
  groupName: text("group_name"),
  groupCategory: text("group_category"),
  indicatorName: text("indicator_name"),
  indicatorCategory: text("indicator_category"),
  timePeriod: text("time_period"),
  timeYear: text("time_year"),
  timeType: text("time_type"),
  estimate: text("estimate"),
  coninfNintyFive: text("coninf_95"),
  sampleSize: text("sample_size"),
  suppressionFlag: integer("suppression_flag"),
  updatedAt: integer("updated_at"),
  createdAt: integer("created_at"),
});
