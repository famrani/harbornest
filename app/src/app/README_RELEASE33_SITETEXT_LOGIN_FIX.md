# Release 33 - siteText pipe fix for LoginModule

## Fix

`LoginComponent`, `SignupComponent`, and `ForgotPasswordComponent` use the `| siteText` pipe, but `LoginModule` did not import the standalone `SiteTextPipe`.

This caused Angular runtime crashes such as:

```text
TypeError: Cannot read properties of undefined (reading 'onDestroy')
at ɵɵpipe
at LoginComponent_Template
```

## Change

Updated `login/login.module.ts`:

- imports `SiteTextPipe` from `../home/site-text.pipe`
- adds `SiteTextPipe` to the module `imports` array

This makes `siteText` available to all login-related templates.
