import { Card, CardContent } from "@/components/ui/card";
import { useLocale } from "@/lib/i18n";
import { FC } from "react";

const OurGames = () => {
	const { trans } = useLocale();
	return (
		<section id="games" className=" mx-auto px-4 py-16 mt-[10px] md:mt-[69px]">
			<div className="container px-[0px] md:px-[32px]">
				<div className="text-center mb-12">
					<h2 className="text-[40px] md:text-[60px] font-black mb-5 md:mb-6 font-secondary text-black ">
						{trans("Our Games")}
					</h2>
					<p className="text-[#757575] md:max-w-3xl mx-auto text-sm">
						{trans(
							"As a pioneer of mobile app gamification, we take pride in originality and individuality, providing global players with state-of-the-art games that feature splendid storylines, sensational sound effects and magnificent animation that never cease to impress."
						)}
					</p>
				</div>
			</div>

			<div className="mx-auto md:mx-[64px] mt-[10px] md:mt-[82px]">
				<div className="grid grid-cols-2 md:grid-cols-4 gap-[16px] md:gap-[30px]">
					{games.map((game, index) => (
						<GameCard
							key={index}
							title={game.title}
							description={game.description}
							imageUrl={game.imageUrl}
							className={`col-span-1 row-span-1 ${
								index % 2 !== 0 && "translate-y-7 md:translate-y-[7.3rem]"
							}`}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

const GameCard: FC<{
	title: string;
	description: string;
	imageUrl: string;
	className?: string;
}> = ({ title, description, imageUrl, className = "" }) => (
	<Card
		className={`group relative overflow-hidden border-none rounded-[16px] transition-transform shadow-xl hover:scale-105 ${className}`}
	>
		<div className=" rounded-none absolute inset-0 bg-gradient-to-t from-blue/80 to-transparent z-10 " />
		<img
			src={imageUrl}
			alt={title}
			className="w-full h-full object-cover rounded-[16px]"
		/>
		<CardContent className="absolute bottom-0 left-0 right-0 z-20 p-2 md:p-10">
			<h3 className="text-[24px] md:text-[48px] font-bold text-white mb-2 md:leading-[1.4]">
				{title}
			</h3>
			<p className="text-white/80 text-[12px] md:text-sm">{description}</p>
		</CardContent>
	</Card>
);

const games = [
	{
		title: "E-Space",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		imageUrl: "/games/1.webp",
		className: "col-span-1 row-span-1",
	},
	{
		title: "Kingland",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		imageUrl: "/games/2.png",
		className: "col-span-1 row-span-1",
	},
	{
		title: "The Last Game",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		imageUrl: "/games/3.png",
		className: "col-span-1 row-span-1",
	},
	{
		title: "G-Dragon",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		imageUrl: "/games/4.png",
		className: "col-span-1 row-span-1",
	},
	{
		title: "Pirates",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		imageUrl: "/games/5.png",
		className: "col-span-1 row-span-1",
	},
	{
		title: "Witch Party",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		imageUrl: "/games/6.png",
		className: "col-span-1 row-span-1",
	},
	{
		title: "Rocky",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		imageUrl: "/games/7.png",
		className: "col-span-1 row-span-1",
	},
	{
		title: "Blue Fire",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		imageUrl: "/games/8.png",
		className: "col-span-1 row-span-1",
	},
	{
		title: "Magic tree",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		imageUrl: "/games/9.png",
		className: "col-span-1 row-span-1",
	},
	{
		title: "Aborigines",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		imageUrl: "/games/10.png",
		className: "col-span-1 row-span-1",
	},
	{
		title: "Cinderella",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		imageUrl: "/games/11.png",
		className: "col-span-1 row-span-1",
	},
	{
		title: "Egypt Game",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		imageUrl: "/games/12.png",
		className: "col-span-1 row-span-1",
	},
];

export default OurGames;
