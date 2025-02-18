import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import { useLocale } from "@/lib/i18n";

const OurPartners = () => {
	const { trans } = useLocale();
	return (
		<section id="partners" className="py-16 px-0 md:px-32 bg-white">
			<div className="container mx-auto px-4">
				<h2 className="text-4xl font-bold font-secondary text-center mb-12">
					{trans("Our Partners")}
				</h2>

				<Carousel
					opts={{
						align: "start",
						loop: true,
						slidesToScroll: 2,
					}}
					className="w-full max-w-6xl mx-auto"
				>
					<CarouselContent className="-ml-2 md:-ml-4">
						{partners.map((partner) => (
							<CarouselItem
								key={partner.name}
								className="pl-2 md:pl-4 basis-1/3 md:basis-1/5"
							>
								<div className="h-32 p-4 flex items-center justify-center">
									<img
										src={partner.logo}
										alt={partner.name}
										className="max-w-full h-full object-contain filter grayscale-0 hover:grayscale transition-all duration-300 scale-150 md:scale-100"
									/>
								</div>
							</CarouselItem>
						))}
					</CarouselContent>

					<CarouselPrevious className="flex left-0 md:-left-12 border-0 shadow-md bg-white text-gray-400 rounded-md hover:scale-105" />
					<CarouselNext className="flex right-0 md:-right-12 border-0 shadow-md bg-white  text-gray-400 rounded-md hover:scale-105" />
				</Carousel>
			</div>
		</section>
	);
};

const partners = [
	{
		name: "EA Games",
		logo: "/partners/1.png",
	},
	{
		name: "Game",
		logo: "/partners/2.png",
	},
	{
		name: "First Power Up",
		logo: "/partners/3.png",
	},
	{
		name: "Walt Disney",
		logo: "/partners/4.png",
	},
	{
		name: "Book Pro Game Shop",
		logo: "/partners/5.png",
	},
	{
		name: "Sega",
		logo: "/partners/6.png",
	},
	{
		name: "2K",
		logo: "/partners/7.png",
	},
];

export default OurPartners;
