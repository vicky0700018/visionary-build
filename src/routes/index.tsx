import { createFileRoute } from "@tanstack/react-router";
import { PublicPage } from "../components/site/public";
export const Route = createFileRoute("/")({
 head: () => ({meta:[{title:'INFRAVISION BUILDCON LLP | Building Tomorrow'},{name:"description",content:'Quality-driven building construction, thoughtful planning, and professional project execution.'},{property:"og:title",content:'INFRAVISION BUILDCON LLP | Building Tomorrow'},{property:"og:description",content:'Quality-driven building construction, thoughtful planning, and professional project execution.'},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary_large_image"}]}),
 component: Page,
});
function Page() { return <PublicPage page="/"/>; }
