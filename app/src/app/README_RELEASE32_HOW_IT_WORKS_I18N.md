Release 3.2 - How it works i18n fix

Changes:
- Completed embedded GuestInfo fallback content for /how-it-works in 7 languages: fr, en, es, it, de, nl, ru.
- Completed embedded FAQ fallback content for 7 languages because it uses the same GuestContentService.
- Updated GuestJourneyComponent and GuestFaqComponent fallbacks to use current language, then English, then French.
- Preserved Firebase /guestInfo support. If Firebase provides a language branch, it remains the source of truth; otherwise the app now falls back to a translated embedded branch instead of showing French/English.

Recommended Firebase shape remains:
/guestInfo/guestJourney/{fr,en,es,it,de,nl,ru}
/guestInfo/guestFaq/{fr,en,es,it,de,nl,ru}
