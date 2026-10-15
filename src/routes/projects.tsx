import { createFileRoute } from "@tanstack/react-router";
import { PublicPage } from "../components/site/public";
export const Route = createFileRoute("/projects")({
 head: () => ({meta:[{title:'Demo Projects | INFRAVISION BUILDCON LLP'},{name:"description",content:'Explore clearly labeled construction concepts for residential, commercial, and renovation projects.'},{property:"og:title",content:'Demo Projects | INFRAVISION BUILDCON LLP'},{property:"og:description",content:'Explore clearly labeled construction concepts for residential, commercial, and renovation projects.'},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary_large_image"}]}),
 component: Page,
});
function Page() { return <PublicPage page="/projects"/>; }
