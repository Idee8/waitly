import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "./ui/accordion";

export default function Faq() {
	return (
		<div className="flex flex-col items-center justify-center gap-6 py-10">
			<div className="flex flex-col items-center justify-center gap-2 max-w-md">
				<h2 className="sm:text-3xl text-2xl font-semibold text-foreground">
					Frequently Asked Questions
				</h2>
				<p className="sm:text-base text-sm text-muted-foreground text-center">
					Everything you need to know about Sino.
				</p>
			</div>

			<div className="w-full max-w-lg">
				<Accordion
					type="single"
					collapsible
					className="w-full flex flex-col gap-4"
				>
					<AccordionItem value="item-1">
						<AccordionTrigger className="hover:no-underline">
							What is Sino?
						</AccordionTrigger>
						<AccordionContent className="text-muted-foreground">
							Sino is a recipe app that helps you discover meals, follow
							step-by-step cooking instructions, and manage your cooking
							experience with tools like timers, shopping lists, and an AI
							assistant.
						</AccordionContent>
					</AccordionItem>

					<AccordionItem value="item-2">
						<AccordionTrigger className="hover:no-underline">
							How does the AI assistant work?
						</AccordionTrigger>
						<AccordionContent className="text-muted-foreground">
							The AI assistant helps with recipes, cooking tips,
							substitutions, and more. It uses AI models to answer your
							questions in real time.
						</AccordionContent>
					</AccordionItem>

					<AccordionItem value="item-3">
						<AccordionTrigger className="hover:no-underline">
							Is the AI assistant free to use?
						</AccordionTrigger>
						<AccordionContent className="text-muted-foreground">
							Sino offers limited free monthly credits for the AI assistant.
							You can upgrade to a paid plan for unlimited access and
							additional features.
						</AccordionContent>
					</AccordionItem>

					<AccordionItem value="item-4">
						<AccordionTrigger className="hover:no-underline">
							What are badges and how do I earn them?
						</AccordionTrigger>
						<AccordionContent className="text-muted-foreground">
							Badges are rewards you earn for cooking meals and reaching
							milestones. The more you cook and explore, the more badges you
							unlock.
						</AccordionContent>
					</AccordionItem>
				</Accordion>
			</div>
		</div>
	);
}