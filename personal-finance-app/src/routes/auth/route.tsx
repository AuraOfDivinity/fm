import { createFileRoute } from "@tanstack/react-router";
import AuthIndexComponent from "../../features/auth/AuthIndexComponent";

export const Route = createFileRoute("/auth")({
  component: AuthIndexComponent,
});
