import { createFileRoute } from "@tanstack/react-router";
import { PublicPage } from "../components/site/public";
export const Route = createFileRoute("/contact")({
 head: () => ({meta:[{title:'Contact & Request a Quote | INFRAVISION BUILDCON LLP'},{name:"description",content:'Contact INFRAVISION BUILDCON LLP at 5135453235 or infravision@gmail.com. Browser-only demo inquiry form.'},{property:"og:title",content:'Contact & Request a Quote | INFRAVISION BUILDCON LLP'},{property:"og:description",content:'Contact INFRAVISION BUILDCON LLP at 5135453235 or infravision@gmail.com. Browser-only demo inquiry form.'},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary_large_image"}]}),
 component: Page,
});
function Page() { return <PublicPage page="/contact"/>; }
