import "./globals.css";
import { Montserrat } from "next/font/google";
import 'react-toastify/dist/ReactToastify.css';

const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['400', '700'],
    display: 'swap',
  });

export const metadata = {
    title: "My Exam Mockup",
    description: "Projeto pra mostrar tudo que eu sei",
};

export default function RootLayout({ children }) {
    return (
        <html lang="pt-BR" className={montserrat.className}>
            <head>
                <link rel="icon" href="/icons/favicon.ico" />
                </head>
            <body>{children}</body>
        </html>
    );
}
