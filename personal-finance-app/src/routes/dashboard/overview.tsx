import { createFileRoute } from "@tanstack/react-router";
import Overview from "../../features/overview/pages/Overview";

export const Route = createFileRoute("/dashboard/overview")({
  component: Overview,
});
