import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Pranav - Technical Business Analyst',
	description:
		'Welcome to my portfolio! I am a Technical Business Analyst passionate in buliding AWS cloud insfrastructure from the ground up. Fun fact - this website is completely hosted on and managed on AWS as part of the Cloud Resume Challenge!',
	keywords: [
		'Cloud Resume Challenge',
		'Software Engineer',
		'Frontend Development',
		'React',
		'Next.js',
		'Node.js',
		'JavaScript',
		'TypeScript',
		'Database Design',
		'API Development',
		'Cloud Solutions',
		'DevOps',
		'CI/CD',
		'AWS',
		'Web Development',
		'[Pranav Bedre]',
	],
	authors: [{ name: '[Pranav Bedre]' }],
	creator: '[Pranav Bedre]',
	openGraph: {
		title: '[Pranav Bedre] - Technical Business Analyst',
		description:
			'Passionate full-stack developer creating complete web solutions. Explore my projects and technical expertise across the entire development stack.',
		url: 'https://pranavbedre.in',
		siteName: '[Pranav Bedre] - Portfolio',
		images: [
			{
				url: '/og-image.jpg',
				width: 1200,
				height: 630,
				alt: '[Pranav Bedre] - Full-Stack Developer Portfolio',
			},
		],
		locale: 'en_US',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: '[Pranav Bedre] - Full-Stack Developer',
		description:
			'Passionate full-stack developer creating complete web solutions. Explore my projects and technical expertise across the entire development stack.',
		creator: '@yourusername',
		images: ['/og-image.jpg'],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
		</html>
	);
}
