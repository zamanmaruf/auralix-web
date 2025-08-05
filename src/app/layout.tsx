import "./globals.css";
import ClientLayout from "./ClientLayout";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Auralix AI - Enterprise AI Automation Solutions</title>
        <meta name="description" content="AI Automation That Scales With You — From Startup to Enterprise. Revolutionizing business operations with enterprise-grade AI solutions." />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
      </head>
      <body className="bg-[#0a0a0a] text-[#ededed] font-sans">
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
