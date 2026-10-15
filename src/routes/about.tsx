import { createFileRoute } from "@tanstack/react-router";
import { PublicPage } from "../components/site/public";
export const Route = createFileRoute("/about")({
 head: () => ({meta:[{title:'About Us | INFRAVISION BUILDCON LLP'},{name:"description",content:'Our approach to construction quality, safety awareness, and dependable building spaces.'},{property:"og:title",content:'About Us | INFRAVISION BUILDCON LLP'},{property:"og:description",content:'Our approach to construction quality, safety awareness, and dependable building spaces.'},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary_large_image"}]}),
 component: Page,
});
function Page() { return <PublicPage page="/about"/>; }
