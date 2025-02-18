import { Card, CardContent } from "@/components/ui/card";
import { useLocale } from "@/lib/i18n";
import { Clock, Paintbrush, Users } from "lucide-react";
import { FC } from "react";

const AboutSection = () => {
	const { trans } = useLocale();
	return (
		<section id="about-us" className="container mx-auto px-4 py-16 mt-24">
			<div className="grid lg:grid-cols-2 gap-12 items-start">
				<div>
					<h1 className="text-6xl font-black mb-6 font-secondary text-black">
						{trans("About Us")}
					</h1>

					<p className="text-[#757575] my-14">
						{trans(
							"Browse our selection of free online games and have a great time without leaving the site! Our Kids Games option also includes game reviews, extensive game cheats and walkthroughs, and much more. We have exclusive free downloads, videos, and articles as well. Etech reviews the most popular kids games from all the most popular video gaming platforms, so you don’t need to search around for fun anywhere else on the Internet. Explore a whole new world of gaming on Etech."
						)}
					</p>

					<div className="flex flex-row md:flex-col gap-8">
						<div className="mb-8">
							<div className="text-6xl font-bold text-[#079BEE] mb-2">
								600<span className="text-4xl font-medium">M</span>+
							</div>
							<div className="text-3xl text-black font-bold">
								{trans("Users")}
							</div>
						</div>
						<div className="mb-8">
							<div className="text-6xl font-bold text-[#079BEE] mb-2">135+</div>
							<div className="text-3xl text-black font-bold">
								{trans("Games")}
							</div>
						</div>
					</div>
				</div>

				<Card className="bg-[#EEEEEE] rounded-none md:rounded-lg border-none h-full">
					<CardContent className="p-6">
						<div className="space-y-3">
							<FeatureCard
								icon={Clock}
								title={trans("24 - Hour") as string}
								description={
									trans(
										"24/7 access ensures operators' businesses runs smoothly all year long."
									) as string
								}
							/>

							<FeatureCard
								icon={Paintbrush}
								title={trans("Design") as string}
								description={
									trans(
										"Combining imaginative universes, play dynamics, and unprecedented gameplay, our games transcend the boundaries of the virtual world by weaving innovative gameplay."
									) as string
								}
							/>

							<FeatureCard
								icon={Users}
								title={trans("Team") as string}
								description={
									trans(
										"Etech is an award-winning, international studio of designers, artists, animators and producers that create content for the biggest names in film and video games."
									) as string
								}
							/>
						</div>
					</CardContent>
				</Card>
			</div>

			<div className="mt-[200px] md:mt-[200px] lg:mt-[300px] w-full relative flex flex-col items-center">
				<div className="w-full max-w-4xl bg-dots-pattern relative ">
					<img
						src="/map.webp"
						alt="World map with location markers"
						className="object-contain"
					/>

					<div className="absolute top-[10%] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
						<img
							src="/co-tien.webp"
							alt="Character illustration"
							className="h-[300px] object-contain animate-bounce animate-infinite animate-ease-in-out animate-duration-[2s]"
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

const FeatureCard: FC<{
	icon: any;
	title: string;
	description: string;
}> = ({ icon: Icon, title, description }) => (
	<div className="flex gap-4 p-4">
		<div className="">
			<div className="bg-[#E3FCFF] rounded-lg p-3">
				<Icon className="w-6 h-6 text-black " />
			</div>
		</div>
		<div>
			<h3 className="text-2xl font-semibold mb-1 text-black">{title}</h3>
			<p className="text-[#757575] text-sm">{description}</p>
		</div>
	</div>
);

export default AboutSection;
