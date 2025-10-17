import emailjs from '@emailjs/nodejs';

export interface BookingDetails {
  user_name: string;
  to_email: string;
  start_date: string;
  end_date: string;
  listing_title: string;
  price: number;
}

export async function sendBookingConfirmationEmail(booking: BookingDetails): Promise<void> {
  try {
    const response = await emailjs.send("service_7vistjr", "template_bsdvkhk", {
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
  } catch (error) {
    console.error("❌ Failed to send email:", error);
  }
}