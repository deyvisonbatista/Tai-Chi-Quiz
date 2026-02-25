import type { Express } from "express";
import { type Server } from "http";
import { storage } from "./storage";
import { insertQuizSubmissionSchema } from "@shared/schema";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.post("/api/quiz/submit", async (req, res) => {
    try {
      const parsed = insertQuizSubmissionSchema.safeParse(req.body);
      if (!parsed.success) {
        return res.status(400).json({ message: "Dados inválidos", errors: parsed.error.flatten() });
      }
      const submission = await storage.createQuizSubmission(parsed.data);
      return res.status(201).json(submission);
    } catch (error) {
      console.error("Error saving quiz submission:", error);
      return res.status(500).json({ message: "Erro ao salvar respostas" });
    }
  });

  app.get("/api/quiz/submissions", async (_req, res) => {
    try {
      const submissions = await storage.getQuizSubmissions();
      return res.json(submissions);
    } catch (error) {
      console.error("Error fetching submissions:", error);
      return res.status(500).json({ message: "Erro ao buscar respostas" });
    }
  });

  return httpServer;
}
