import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { sign } from "hono/jwt";

const app = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
}>();

// Signup Route
app.post("/api/v1/signup", async (c) => {
  // Init Prisma Client
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();

  try {
    // Create User from body
    const user = await prisma.user.create({
      data: {
        email: body.email,
        password: body.password,
      },
    });

    // Sign JWT token
    const jwt = await sign({ id: user.id }, c.env.JWT_SECRET);

    return c.json({ jwt });
  } catch (e) {
    c.status(403);
    return c.json({ error: "errror while signining up" });
  }
});

app.post("/api/v1/signin", (c) => {
  return c.text("signin route");
});

app.post("/api/v1/blog", (c) => {
  return c.text("post a blog route");
});

app.put("/api/v1/blog", (c) => {
  return c.text("update a blog route");
});

app.get("/api/v1/blog/:id", (c) => {
  return c.text("get a blog route");
});

app.get("/api/v1/blog/bulk", (c) => {
  return c.text("get all route");
});

export default app;
