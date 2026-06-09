import { createFileRoute } from "@tanstack/react-router";
import Portfolio from "@/components/portfolio/Portfolio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sudipta Samanta — Full Stack Developer" },
      { name: "description", content: "Portfolio of Sudipta Samanta, a full stack MERN developer building elegant, scalable web experiences." },
      { property: "og:title", content: "Sudipta Samanta — Full Stack Developer" },
      { property: "og:description", content: "Portfolio of Sudipta Samanta, a full stack MERN developer building elegant, scalable web experiences." },
    ],
  }),
  component: Portfolio,
});
