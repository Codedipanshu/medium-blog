import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { sign, verify } from "hono/jwt";

export const userRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
}>();

// Signup Route
userRouter.post("/signup", async (c) => {
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

// Signin Route
userRouter.post("/signin", async (c) => {
  // Init Prisma Client
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();

  try {
    // Find user
    const user = await prisma.user.findUnique({
      where: { email: body.email, password: body.password },
    });

    if (!user) {
      c.status(403);
      return c.json({
        error: "user not found or email/password does not match",
      });
    }

    // Sign JWT token
    const jwt = await sign({ id: user.id }, c.env.JWT_SECRET);
    return c.json({ jwt });
  } catch (e) {
    c.status(403);
    return c.json({ error: "errror while signining in" });
  }
});
