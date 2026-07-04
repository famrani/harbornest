# Release 3.1 — SiteContentService v3

Changes included:

- UI translations now load from `/siteContent/<language>` directly.
- Supported language roots: `fr`, `en`, `es`, `it`, `de`, `nl`, `ru`.
- Backwards compatibility remains for older dumps using `/siteContent/i18n/<language>`.
- `/alegria_v2` is no longer used for translation lookup.
- `SiteTextPipe` now delegates to `SiteContentService.tFromContent()` and falls back safely.
- Missing keys no longer break rendering; the key itself is shown as a safe fallback.

Expected Firebase structure:

```json
{
  "siteContent": {
    "fr": {},
    "en": {},
    "es": {},
    "it": {},
    "de": {},
    "nl": {},
    "ru": {}
  }
}
```
