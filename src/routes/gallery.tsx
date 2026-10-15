import { createFileRoute } from "@tanstack/react-router";
import { PublicPage } from "../components/site/public";
export const Route = createFileRoute("/gallery")({
 head: () => ({meta:[{title:'Construction Gallery | INFRAVISION BUILDCON LLP'},{name:"description",content:'Illustrative architectural photography, construction work, and interior finishing.'},{property:"og:title",content:'Construction Gallery | INFRAVISION BUILDCON LLP'},{property:"og:description",content:'Illustrative architectural photography, construction work, and interior finishing.'},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary_large_image"}]}),
 component: Page,
});
function Page() { return <PublicPage page="/gallery"/>; }
