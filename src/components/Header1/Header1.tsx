import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { FC, useEffect, useState } from "react";
import HeaderLocale from "./Header.Locale";
import { useLocale } from "@/lib/i18n";

const Header: FC = () => {
	const [isScrolled, setIsScrolled] = useState(false);
	const { trans } = useLocale();

	useEffect(() => {
		const handleScroll = () => {
			const scrollPosition = window.scrollY;
			setIsScrolled(scrollPosition > 0);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<header
			id="header"
			className={`fixed top-0 left-0 right-0 h-16 transition-colors duration-300 z-50 
      ${isScrolled ? "bg-blue-500" : "bg-transparent"}`}
		>
			<div className="container mx-auto px-4 h-full">
				<nav className="flex items-center justify-between h-full">
					<img src={"/logo.png"} className="h-[42px] object-contain" />

					<div className="hidden md:flex space-x-10 items-center">
						{navigationOptions.map((item) => (
							<a
								href={`/#${item.value}`}
								key={item.title}
								className="text-white font-bold hover:text-blue-100 transition-colors"
							>
								{trans(item.title)}
							</a>
						))}
						<HeaderLocale />
					</div>

					<div className="md:hidden">
						<HeaderMobile />
					</div>
				</nav>
			</div>
		</header>
	);
};

const HeaderMobile: FC = () => {
	const [open, setOpen] = useState(false);
	const { trans } = useLocale();

	return (
		<Sheet open={open} onOpenChange={setOpen} modal>
			<SheetTrigger asChild>
				<button className=" text-white">
					<svg
						className="w-10 h-10"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M4 6h16M4 12h16M4 18h16"
						/>
					</svg>
				</button>
			</SheetTrigger>

			<SheetContent side="right" className="w-full bg-white">
				<HeaderLocale isMobile onSelect={() => setOpen(false)} />
				<nav className="mt-6 space-y-4 flex flex-col">
					{navigationOptions.map((item) => (
						<a
							href={`/#${item.value}`}
							key={item.title}
							onClick={() => setOpen(false)}
							className="w-full text-center px-6 py-3 text-lg font-medium hover:bg-gray-100"
						>
							{trans(item.title)}
						</a>
					))}
				</nav>
			</SheetContent>
		</Sheet>
	);
};

const navigationOptions = [
	{ title: "ABOUT US", value: "about-us" },
	{ title: "GAMES", value: "games" },
	{ title: "PARTNERS", value: "partners" },
	{ title: "CONTACT US", value: "contact-us" },
];

export default Header;
