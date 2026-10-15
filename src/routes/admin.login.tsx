import { createFileRoute } from "@tanstack/react-router";
import { AdminLogin } from "../components/site/admin";
export const Route = createFileRoute("/admin/login")({
 head: () => ({meta:[{title:'Admin Login | INFRAVISION BUILDCON LLP'},{name:"description",content:'Sign in to the browser-only demonstration website manager.'},{property:"og:title",content:'Admin Login | INFRAVISION BUILDCON LLP'},{property:"og:description",content:'Sign in to the browser-only demonstration website manager.'},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary_large_image"}, {name:"robots",content:"noindex"}]}),
 component: Page,
});
function Page() { return <AdminLogin/>; }
