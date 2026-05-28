import { ClerkProvider } from "@clerk/nextjs"
import { ui } from "@clerk/ui"
import { Inter } from "next/font/google"
import "../globals.css"

export const metadata = {
    title: "Threads",
    description: " A Next.js threads application"
}

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <ClerkProvider ui={ui} afterSignOutUrl="/">
            <html lang="en">
                <body className={`${inter.className} bg-dark-1`}>
                    <div className="w-full flex justify-center items-center min-h-screen">
                    {children}
                    </div>
                </body>
            </html>
        </ClerkProvider>)
}
