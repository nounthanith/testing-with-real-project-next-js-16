import type {Metadata} from "next";
import {Geist, Geist_Mono} from "next/font/google";
import "./globals.css";
import LightRays from "@/components/LightRays";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Learning Next.js",
	description: "The Next.js application for learning 2026",
};

export default function RootLayout({
	                                   children,
                                   }: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
		<head>
			<link rel="icon" href="/icon.png" sizes="any"/>
		</head>
		<body
			className={`${geistSans.variable} ${geistMono.variable} min-h-screen p-2 antialiased`}
		>
		<Navbar/>
		<div className="absolute inset-0 top-0 z-[-0] min-h-screen">
			<LightRays
				raysOrigin="top-center"
				raysColor="#52b69a"
				raysSpeed={0.5}
				lightSpread={0.8}
				rayLength={1.2}
				followMouse={true}
				mouseInfluence={0.1}
				noiseAmount={0.1}
				distortion={0.05}
				className="custom-rays"
			/>
		</div>
		{children}
		</body>
		</html>
	);
}
