import { createFileRoute } from "@tanstack/react-router";
import { PublicPage } from "../components/site/public";
export const Route = createFileRoute("/services")({
 head: () => ({meta:[{title:'Construction Services | INFRAVISION BUILDCON LLP'},{name:"description",content:'Explore illustrative residential, commercial, structural, renovation, and civil construction services.'},{property:"og:title",content:'Construction Services | INFRAVISION BUILDCON LLP'},{property:"og:description",content:'Explore illustrative residential, commercial, structural, renovation, and civil construction services.'},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary_large_image"}]}),
 component: Page,
});
function Page() { return <PublicPage page="/services"/>; }
