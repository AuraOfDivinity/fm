import { createFileRoute } from "@tanstack/react-router";
import DashboardLayout from "../../features/layout/DashboardLayout";

export const Route = createFileRoute("/dashboard")({
  component: DashboardLayout,
});
