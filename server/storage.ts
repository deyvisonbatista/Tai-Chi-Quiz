import { type User, type InsertUser, type QuizSubmission, type InsertQuizSubmission, users, quizSubmissions } from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createQuizSubmission(submission: InsertQuizSubmission): Promise<QuizSubmission>;
  getQuizSubmissions(): Promise<QuizSubmission[]>;
}

export class DatabaseStorage implements IStorage {
  async getUser(id: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db.insert(users).values(insertUser).returning();
    return user;
  }

  async createQuizSubmission(submission: InsertQuizSubmission): Promise<QuizSubmission> {
    const [result] = await db.insert(quizSubmissions).values(submission).returning();
    return result;
  }

  async getQuizSubmissions(): Promise<QuizSubmission[]> {
    return await db.select().from(quizSubmissions);
  }
}

export const storage = new DatabaseStorage();
