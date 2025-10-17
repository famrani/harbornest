"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendBookingConfirmationEmail = sendBookingConfirmationEmail;
const nodejs_1 = __importDefault(require("@emailjs/nodejs"));
async function sendBookingConfirmationEmail(booking) {
    try {
        const response = await nodejs_1.default.send("service_7vistjr", "template_bsdvkhk", {
            user_name: booking.user_name,
            to_email: booking.to_email,
            start_date: booking.start_date,
            end_date: booking.end_date,
            listing_title: booking.listing_title,
            price: booking.price,
        }, {
            publicKey: "fmG0xI5QYxEjMTsRk"
        });
        console.log("✅ Email sent successfully:", response.status, response.text);
    }
    catch (error) {
        console.error("❌ Failed to send email:", error);
    }
}

//# sourceMappingURL=sendBookingEmail.node.js.map
