import * as React from 'react';
import {
	Body,
	Button,
	Container,
	Head,
	Hr,
	Html,
	Link,
	Preview,
	Section,
	Text,
	Tailwind,
} from '@react-email/components';

const WaitlistEmail = ({ userFirstname }: { userFirstname: string }) => {
	const currentYear = new Date().getFullYear();

	return (
		<Html>
			<Tailwind>
				<Head>
					<title>Welcome to Sino</title>
					<Preview>Thanks for joining our waitlist! We'll keep you in the loop.</Preview>
					<style>
						{`
              @import url('https://fonts.googleapis.com/css2?family=Inter+Tight:wght@400;500;700&display=swap');
            `}
					</style>
				</Head>
				<Body className="bg-[#ffffff] py-[40px]" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
					<Container className="bg-[#ffffff] rounded-[8px] mx-auto p-[32px] max-w-[600px]">
						<Section className="mt-[16px] text-center">
							<Text className="text-[28px] font-bold text-black m-0">
								Welcome to <span className="text-[#95AD8B]">Sino</span>
							</Text>

							<Text className="text-[18px] text-black mt-[16px] mb-[16px]">
								You’re officially on the early access list!
							</Text>

							<Hr className="border-solid border-[#27272A] my-[16px] w-[80px] mx-auto" />
						</Section>

						<Section>
							<Text className="text-[16px] leading-[24px] text-black mt-[32px]">
								Hi{userFirstname},
							</Text>

							<Text className="text-[16px] leading-[24px] text-black">
								Thanks for joining Sino, your new AI-powered way to discover, create, and cook amazing recipes. We're on a mission to make cooking more fun, creative, and personalized for everyone, and we're excited to have you with us on this journey.
							</Text>

							<Text className="text-[16px] leading-[24px] text-black">
								We will personally keep you updated on our progress and let you know the moment Sino is ready for you. Got questions or ideas in the meantime? Just hit reply, we read every email and would love to hear from you.
							</Text>

							<Section className="my-[32px] text-center">
								<Button
									className="bg-[#95AD8B] text-[#ffffff] font-bold py-[12px] px-[24px] rounded-[12px] no-underline text-center box-border"
									href="https://cal.com/idee8/quick-chat"
								>
									<span style={{ display: 'inline-flex', alignItems: 'center' }}>
										<svg
											width="16"
											height="16"
											viewBox="0 0 24 24"
											fill="none"
											style={{ marginRight: '8px' }}
										>
											<title>Calendar</title>
											<path d="M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
											<path d="M16 2V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
											<path d="M8 2V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
											<path d="M3 10H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
											<path d="M8 14H8.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
											<path d="M12 14H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
											<path d="M16 14H16.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
											<path d="M8 18H8.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
											<path d="M12 18H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
											<path d="M16 18H16.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
										</svg>
										Talk to us
									</span>
								</Button>
							</Section>

							<Text className="text-[16px] leading-[24px] text-black">
								Want to see what we're up to? Follow us at <Link href="https://www.instagram.com/sino.recipes/" className="text-[#95AD8B] underline">@sino.recipes</Link> for behind-the-scenes updates and early previews.
							</Text>

							<Text className="text-[16px] leading-[24px] text-black mt-[24px]">
								Cheers,
							</Text>

							<Text className="text-[16px] font-bold text-black mb-[32px]">
								The Sino Team
							</Text>
						</Section>

						<Hr className="border-solid border-[#27272A] my-[24px]" />

						<Section>
							<Text className="text-[12px] text-[#71717A] text-center m-0">
								© {currentYear} Sino. All rights reserved.
							</Text>
							<Text className="text-[12px] text-[#71717A] text-center m-0">
								13 Fredman Drive, Sandton, Johannesburg, South Africa
							</Text>
							<Text className="text-[12px] text-[#71717A] text-center mt-[16px]">
								<Link href="mailto:mail@sino.recipes" className="text-[#95AD8B]">
									Unsubscribe
								</Link>{' '}
								•{' '}
								<Link href="mailto:mail@sino.recipes" className="text-[#95AD8B]">
									Privacy Policy
								</Link>
							</Text>
						</Section>
					</Container>
				</Body>
			</Tailwind>
		</Html>
	);
};

export default WaitlistEmail;