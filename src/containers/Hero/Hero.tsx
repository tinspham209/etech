import { CountdownTimer } from "@/components";
import { useLocale } from "@/lib/i18n";
import { ArrowRight } from "lucide-react";
import { FC, useState } from "react";

const Hero = () => {
	const { trans } = useLocale();
	const [email, setEmail] = useState("");

	// Set target date 30 days from now
	const targetDate = new Date();
	targetDate.setDate(targetDate.getDate() + 30);

	return (
		<section id="hero" className="relative mb-48 md:mb-[340px] lg:mb-0">
			<div className="absolute bottom-[-30%] md:bottom-[-50%] lg:bottom-[-64px] left-[25%] lg:left-0 z-10">
				<img
					src="/ong-tien.webp"
					className="object-contain h-[250px] md:h-[680px] transition-all"
				/>
			</div>
			<div
				className={`relative bg-[url(/bg-hero.webp)] bg-center bg-cover bg-no-repeat ellipse overflow-hidden`}
			>
				<BackgroundMaterial />
				<div className="relative container mx-auto px-4 pt-[130px] md:pt-[294px] pb-20">
					<div className="max-w-6xl md:mx-auto text-center ">
						<h1 className="text-[40px] md:text-[80px] font-black text-white mb-[24px] md:mb-[20px] font-secondary">
							{trans(`We're Getting Ready`)}
						</h1>

						<div className="flex justify-center mb-[40px] md:mb-[104px]">
							<CountdownTimer targetDate={targetDate} />
						</div>

						<p className="text-[12px] md:text-lg text-white mb-[16px] md:mb-[36px] max-w-xl md:max-w-[34rem] flex  mx-[4px] md:mx-auto leading-[1.26] text-center">
							{trans(
								"We will back to something amazing. Getting the latest updates about our games. Please sign up to our newsletter."
							)}
						</p>

						<div className="flex max-w-xl mx-auto px-[12px] pr-[0px] mb-[36px]">
							<input
								type="email"
								placeholder={trans("Enter your email") as string}
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								className="flex-1 px-4 py-4 rounded-l-lg focus:outline-none text-sm"
							/>
							<button className="bg-white hover:bg-blue-500 text-white px-4 rounded-r-lg transition-colors">
								<ArrowRight className="w-5 h-5 text-black" />
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

const BackgroundMaterial: FC<{ length?: number }> = ({ length = 10 }) => {
	return (
		<div className="absolute inset-0 overflow-hidden">
			{Array.from({ length }).map((_, i) => (
				<div
					key={i}
					className="absolute w-16 h-16 bg-blue-600/10 rotate-45 animate-float"
					style={{
						left: `${Math.random() * 100}%`,
						top: `${Math.random() * 100}%`,
						animationDelay: `${Math.random() * 5}s`,
						animationDuration: `${10 + Math.random() * 10}s`,
					}}
				/>
			))}
		</div>
	);
};

export default Hero;
