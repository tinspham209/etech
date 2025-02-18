import { Card, CardContent } from "@/components/ui/card";
import { useLocale } from "@/lib/i18n";
import { FC } from "react";

const OurGames = () => {
	const { trans } = useLocale();
	return (
		<section id="games" className="container mx-auto px-4 py-16">
			<div className="text-center mb-12">
				<h2 className="text-6xl font-black mb-6 font-secondary text-black">
					{trans("Our Games")}
				</h2>
				<p className="text-[#757575] max-w-3xl mx-auto">
					{trans(
						"As a pioneer of mobile app gamification, we take pride in originality and individuality, providing global players with state-of-the-art games that feature splendid storylines, sensational sound effects and magnificent animation that never cease to impress."
					)}
				</p>
			</div>

			<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
				{games.map((game, index) => (
					<GameCard
						key={index}
						title={game.title}
						description={game.description}
						imageUrl={game.imageUrl}
						className={`col-span-1 row-span-1 ${
							index % 2 !== 0 && "translate-y-10 md:translate-y-14"
						}`}
					/>
				))}
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
		className={`group relative overflow-hidden border-none rounded-2xl transition-transform shadow-xl hover:scale-105 ${className}`}
	>
		<div className=" rounded-none absolute inset-0 bg-gradient-to-t from-blue/80 to-transparent z-10 " />
		<img src={imageUrl} alt={title} className="w-full h-full object-cover" />
		<CardContent className="absolute bottom-0 left-0 right-0 z-20 p-6">
			<h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
			<p className="text-white/80 text-sm">{description}</p>
		</CardContent>
	</Card>
);

const games = [
	{
		title: "E-Space",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor.",
		imageUrl: "/games/1.webp",
		className: "col-span-1 row-span-1",
	},
	{
		title: "Kingland",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor.",
		imageUrl: "/games/2.png",
		className: "col-span-1 row-span-1",
	},
	{
		title: "The Last Game",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor.",
		imageUrl: "/games/3.png",
		className: "col-span-1 row-span-1",
	},
	{
		title: "G-Dragon",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor.",
		imageUrl: "/games/4.png",
		className: "col-span-1 row-span-1",
	},
	{
		title: "Pirates",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor.",
		imageUrl: "/games/5.png",
		className: "col-span-1 row-span-1",
	},
	{
		title: "Witch Party",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor.",
		imageUrl: "/games/6.png",
		className: "col-span-1 row-span-1",
	},
	{
		title: "Rocky",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor.",
		imageUrl: "/games/7.png",
		className: "col-span-1 row-span-1",
	},
	{
		title: "Blue Fire",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor.",
		imageUrl: "/games/8.png",
		className: "col-span-1 row-span-1",
	},
	{
		title: "Magic tree",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor.",
		imageUrl: "/games/9.png",
		className: "col-span-1 row-span-1",
	},
	{
		title: "Aborigines",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor.",
		imageUrl: "/games/10.png",
		className: "col-span-1 row-span-1",
	},
	{
		title: "Cinderella",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor.",
		imageUrl: "/games/11.png",
		className: "col-span-1 row-span-1",
	},
	{
		title: "Egypt Game",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor.",
		imageUrl: "/games/12.png",
		className: "col-span-1 row-span-1",
	},
];

export default OurGames;
