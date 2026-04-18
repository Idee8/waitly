"use client";

import { useMemo, useState } from "react";

import Countdown from "./countdown";
import People from "./people";
import { Logo } from "./svgs";
import Form from "./form";

export default function Hero({ waitlistPeople }: { waitlistPeople: number }) {
	const year = useMemo(() => new Date().getFullYear(), []);
	const [isSuccess, setIsSuccess] = useState(false);

	return (
		<div className="flex flex-col items-center justify-center gap-6">
			<div className="flex flex-col items-center justify-center gap-6 mb-6">
				<Logo />
				<div className="flex items-center gap-4 rounded-full border border-border px-4 py-1 relative">
					<span className="relative flex h-2 w-2">
						<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#95AD8B] opacity-75" />
						<span className="relative inline-flex rounded-full h-2 w-2 bg-[#95AD8B]" />
					</span>
					<p className="uppercase text-sm font-medium">
						Coming soon
					</p>
				</div>
			</div>
			<div className="flex flex-col items-center justify-center gap-2 max-w-2xl">
				<h2 className="text-4xl font-bold text-foreground">
					{isSuccess ? "You're on the waitlist" : "Get early Access"}
				</h2>
				<p className="text-base text-muted-foreground text-center max-w-md">
					{isSuccess
						? "You've successfully secured your spot.We’ll hit you up the moment it’s your turn to dive in"
						: "Be among the first to experience the future of AI-powered productivity. Join the waitlist to get notified when we launch."}
				</p>
			</div>
			<div className="flex flex-col items-center justify-center gap-2 w-full max-w-md">
				<Form onSuccessChange={setIsSuccess} />
			</div>
			<div className="flex items-center justify-center gap-2">
				<People count={waitlistPeople} />
			</div>
			<Countdown period={new Date("2026-04-24T12:00:00")} />
		</div>
	);
}
