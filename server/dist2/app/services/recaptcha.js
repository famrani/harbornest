"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyRecaptcha = verifyRecaptcha;
async function verifyRecaptcha(token) {
    const secret = process.env.RECAPTCHA_SECRET_KEY;
    if (!secret)
        return { ok: true, score: 1 }; // disabled
    const params = new URLSearchParams();
    params.append('secret', secret);
    params.append('response', token || '');
    const resp = await fetch('https://www.google.com/recaptcha/api/siteverify', {
        method: 'POST',
        body: params,
    });
    const data = await resp.json();
    return { ok: !!data.success, score: data.score ?? 0, data };
}

//# sourceMappingURL=recaptcha.js.map
