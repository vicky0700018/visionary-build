import { createFileRoute } from "@tanstack/react-router";
import { AdminDashboard } from "../components/site/admin";
export const Route = createFileRoute("/admin/")({
 head: () => ({meta:[{title:'Demo Admin | INFRAVISION BUILDCON LLP'},{name:"description",content:'Browser-only demonstration workspace for managing website content.'},{property:"og:title",content:'Demo Admin | INFRAVISION BUILDCON LLP'},{property:"og:description",content:'Browser-only demonstration workspace for managing website content.'},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary_large_image"}, {name:"robots",content:"noindex"}]}),
 component: Page,
});
function Page() { return <AdminDashboard/>; }
