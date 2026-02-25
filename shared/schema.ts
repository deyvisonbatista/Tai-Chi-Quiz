import { sql } from "drizzle-orm";
import { pgTable, text, varchar, jsonb, timestamp, serial } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export const quizSubmissions = pgTable("quiz_submissions", {
  id: serial("id").primaryKey(),
  answers: jsonb("answers").notNull(),
  completedAt: timestamp("completed_at").defaultNow(),
});

export const insertQuizSubmissionSchema = createInsertSchema(quizSubmissions).omit({
  id: true,
  completedAt: true,
});

export type InsertQuizSubmission = z.infer<typeof insertQuizSubmissionSchema>;
export type QuizSubmission = typeof quizSubmissions.$inferSelect;
