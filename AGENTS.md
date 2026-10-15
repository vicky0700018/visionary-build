<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Website architecture
- Continue the imported JavaScript site components and data model; keep thin TanStack route wrappers and the platform bootstrap because Lovable requires its existing routing/runtime.
- SiteProvider owns public/admin state and browser persistence, initialized after hydration, so edits remain synchronized without a backend.
- Store all visual styles and brand tokens in src/styles.css, and use the site's existing native Button and ActionLink for controls.
- Media imported from the source repository must be transferred to this project's asset storage so source-project pointers never break deployment.
