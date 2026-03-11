import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./configs/schema.js",
  out: "./drizzle",
  dbCredentials:{
    url:'postgresql://neondb_owner:npg_3RMzG2fyCPwk@ep-blue-truth-adckjh35-pooler.c-2.us-east-1.aws.neon.tech/facelessAI?sslmode=require&channel_binding=require'
  }

}); 
