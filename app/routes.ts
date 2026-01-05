import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/index.tsx"),
  route("snoepjes", "routes/snoepjes.tsx"),
  route("over-ons", "routes/over-ons.tsx"),
  route("contact", "routes/contact.tsx"),
] satisfies RouteConfig;
