import Link from "next/link";

export default function Footer() {
	return (
		<footer className="flex flex-col justify-center items-center gap-4 pb-4">
			<div className="flex flex-row justify-between">
				<ul className="flex flex-row gap-4">
					<li className="dark:text-muted-foreground dark:hover:text-foreground cursor-pointer">
						Our Socials
					</li>
					<li className="dark:text-muted-foreground dark:hover:text-foreground">
						•
					</li>
					<li className="dark:text-muted-foreground dark:hover:text-foreground">
						<Link href="mailto:info@bonangtech.com">
							Our Sponsors
						</Link>
					</li>
					<li className="dark:text-muted-foreground dark:hover:text-foreground">
						•
					</li>
					<li className="dark:text-muted-foreground dark:hover:text-foreground cursor-pointer">
						<Link href="mailto:info@bonangtech.com">Become a Sponsor</Link>
					</li>
				</ul>
			</div>
			<div>
				<p className="text-sm text-muted-foreground">
					&copy; {new Date().getFullYear()} Sino by{" "}
					<Link
						href="https://bonangtech.com"
						className="font-semibold text-foreground"
					>
						Bonang Technologies
					</Link>
				</p>
			</div>
		</footer>
	);
}
