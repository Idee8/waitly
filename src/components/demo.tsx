"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

interface DemoProps {
	videoSrc: string;
	thumbnailSrc?: string;
	className?: string;
	captionsSrc?: string;
}

export default function Demo({
	videoSrc,
	thumbnailSrc,
	className = "",
}: DemoProps) {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const videoRef = useRef<HTMLVideoElement>(null);
	const modalVideoRef = useRef<HTMLVideoElement>(null);

	const handlePlayClick = () => {
		setIsModalOpen(true);
	};

	// Handle escape key to close modal
	useEffect(() => {
		const handleEsc = (e: KeyboardEvent) => {
			if (e.key === "Escape") {
				setIsModalOpen(false);
			}
		};

		window.addEventListener("keydown", handleEsc);

		return () => {
			window.removeEventListener("keydown", handleEsc);
		};
	}, []);

	// Play video when modal opens
	useEffect(() => {
		if (isModalOpen && modalVideoRef.current) {
			modalVideoRef.current.play();
		}
	}, [isModalOpen]);

	return (
		<div className="py-14 sm:px-0 px-4">
			<div className="bg-muted/40 rounded-lg p-2 max-w-3xl mx-auto">
				<div className="flex flex-row justify-start items-center gap-2 p-2">
					<span className="relative flex h-4 w-4">
						<span className="absolute inline-flex h-full w-full rounded-full bg-background opacity-75" />
					</span>
					<span className="relative flex h-4 w-4">
						<span className="absolute inline-flex h-full w-full rounded-full bg-background opacity-75" />
					</span>
					<span className="relative flex h-4 w-4">
						<span className="absolute inline-flex h-full w-full rounded-full bg-background opacity-75" />
					</span>
				</div>
				<div
					className={`relative w-full max-w-3xl mx-auto rounded-lg overflow-hidden ${className}`}
				>
					{/* Glitch effect container */}
					<div className="relative w-full aspect-video bg-black rounded-lg overflow-hidden">
						{/* Video thumbnail */}
						<video
							ref={videoRef}
							poster={thumbnailSrc}
							className="w-full h-full object-cover"
							muted
							aria-describedby="video-description"
						>
							<track
								kind="captions"
								label="No captions needed"
								srcLang="en"
								default
							/>
							Your browser does not support the video tag.
						</video>
						<span id="video-description" className="sr-only">
							Demonstration video showing how the waitlist works. No captions
							are necessary as this is primarily a visual demo with no speech.
						</span>

						{/* Play button overlay */}
						<div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-60">
							{/* Play button */}
							<motion.button
								onClick={handlePlayClick}
								className="relative w-16 h-16 bg-[#95AD8B] rounded-full flex items-center justify-center mb-4 z-10"
								whileHover={{ scale: 1.1 }}
								whileTap={{ scale: 0.95 }}
								aria-label="Play video"
								type="button"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									fill="black"
									className="w-8 h-8"
									style={{ marginLeft: "2px" }} // Slight offset for the play icon
									aria-hidden="true"
								>
									<title>Play Icon</title>
									<path d="M8 5v14l11-7z" />
								</svg>
							</motion.button>

							{/* Text below the play button */}
							<p className="text-gray-300 text-sm">See how wait works</p>
						</div>

						{/* CRT scan lines effect */}
						<div
							className="absolute inset-0 pointer-events-none"
							style={{
								background:
									"linear-gradient(to bottom, transparent 50%, rgba(0, 0, 0, 0.1) 51%, transparent 52%)",
								backgroundSize: "100% 4px",
							}}
						/>

						{/* Chromatic aberration edges */}
						<div
							className="absolute inset-0 pointer-events-none opacity-70"
							style={{
								boxShadow:
									"inset 0 0 50px rgba(0, 0, 0, 0.8), inset 0 0 20px rgba(255, 0, 0, 0.3), inset 0 0 20px rgba(0, 255, 0, 0.3), inset 0 0 20px rgba(0, 0, 255, 0.3)",
							}}
						/>
					</div>
				</div>

				{/* Video Modal */}
				<AnimatePresence>
					{isModalOpen && (
						<motion.div
							className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							onClick={() => setIsModalOpen(false)}
						>
							<motion.div
								className="relative w-full max-w-5xl mx-4 rounded-lg overflow-hidden"
								initial={{ scale: 0.8, opacity: 0 }}
								animate={{ scale: 1, opacity: 1 }}
								exit={{ scale: 0.8, opacity: 0 }}
								transition={{ type: "spring", damping: 25 }}
								onClick={(e) => e.stopPropagation()}
							>
								{/* Close button */}
								<button
									className="absolute -top-10 right-0 text-white hover:text-gray-300 z-10"
									onClick={() => setIsModalOpen(false)}
									aria-label="Close video"
									type="button"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-8 w-8"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										aria-hidden="true"
									>
										<title>Close Icon</title>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M6 18L18 6M6 6l12 12"
										/>
									</svg>
								</button>

								{/* Video player */}
								<div className="w-full aspect-video bg-black rounded-lg overflow-hidden">
									<video
										ref={modalVideoRef}
										src={videoSrc}
										className="w-full h-full"
										controls
										playsInline
										muted
										onEnded={() => setIsModalOpen(false)}
									>
										<track
											kind="captions"
											label="No captions needed"
											srcLang="en"
											default
										/>
										Your browser does not support the video tag.
									</video>
								</div>
							</motion.div>
						</motion.div>
					)}
				</AnimatePresence>
			</div>
		</div>
	);
}
