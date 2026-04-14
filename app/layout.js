import './globals.css';

export const metadata = {
  title: 'Bryant AC & Electric | Austin HVAC & Electrical Since 1982',
  description: 'Family owned AC, heating, and electrical service in Austin, TX. Licensed pros, upfront pricing, 24/7 emergency service. Call (512) 328-3268.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
