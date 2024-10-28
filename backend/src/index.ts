import { Hono } from "hono";

const app = new Hono();

app.post("/api/v1/signup", (c) => {
  return c.text("signup route");
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
