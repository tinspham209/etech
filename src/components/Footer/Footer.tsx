import { useLocale } from "@/lib/i18n";
import {
	ArrowRight,
	Facebook,
	Linkedin,
	MapPin,
	Smartphone,
	Twitter,
} from "lucide-react";

const Footer = () => {
	const { trans } = useLocale();

	return (
		<footer id="footer">
			<div
				className="relative text-white py-10 md:py-[6.5rem] md:pb-[7rem] bg-[url(/bg-footer.webp)]"
				style={{
					backgroundPosition: "center bottom",
					backgroundSize: "cover",
				}}
			>
				<div className="container md:max-w-[90rem] mx-auto px-6 md:px-0 grid grid-cols-1 md:grid-cols-3 gap-[48px] md:gap-[140px] justify-between items-start">
					<div className="mb-6 lg:mb-0 mx-auto md:mx-0 ">
						<img
							src="/logo.png"
							className="object-contain mb-6 h-[96px] md:mb-[48px]"
						/>
						<div className="flex space-x-4 md:space-x-8 mt-11 md:mt-4">
							<Twitter className="w-8 h-8 cursor-pointer" />
							<Facebook className="w-8 h-8 cursor-pointer" />
							<Linkedin className="w-8 h-8 cursor-pointer" />
						</div>
					</div>

					<div className="mb-6 lg:mb-0">
						<h3 className="text-[24px] font-bold">{trans("Address")}</h3>
						<div className="flex flex-row gap-1 md:gap-4 mt-4 md:mt-10">
							<MapPin className="w-16 h-16 md:w-12 md:h-12" />
							<div className="flex flex-col gap-2">
								<p className="text-sm">
									Valletta Buildings, South Street, Valletta - VLT 1103, Malta,
									US
								</p>
								<p className="text-sm">
									{trans(
										"20 Phan Dang Luu street, Hai Chau District, Danang city, Vietnam"
									)}
								</p>
							</div>
						</div>
						<div className="flex flex-row gap-1 md:gap-4 mt-4 md:mt-10 items-center">
							<Smartphone className="w-10 h-10 md:w-12 md:h-12" />
							<div className="flex flex-col gap-2">
								<p className="text-sm">(+1) 555-0108 or (+236) 555-0108</p>
							</div>
						</div>
					</div>

					<div className="mb-6 lg:mb-0">
						<h3 className="text-[24px] font-bold">{trans("Subscribe")}</h3>
						<p className=" text-white mt-4 md:mt-10 text-sm">
							{trans(
								"Subscribe to our newsletter and be the first to know about our updates."
							)}
						</p>
						<div className="flex mt-4">
							<input
								type="email"
								placeholder={trans("Enter your email") as string}
								className="text-white placeholder:text-white flex-1 px-4 py-3 rounded-l-lg focus:outline-none bg-transparent border border-white rounded-[4px 0 0 4px] border-r-0"
							/>
							<button className="bg-transparent hover:bg-blue-500 text-white px-6 rounded-r-lg transition-colors border border-white rounded-[0 4px 4px 0] border-l-0">
								<ArrowRight className="w-5 h-5 text-white" />
							</button>
						</div>
					</div>
				</div>
			</div>

			<div className="text-center py-5 md:pt-[33px] md:pb-[27px] text-white text-sm md:text-[18px] bg-black">
				2017 Copyright. Policy.
			</div>
		</footer>
	);
};

export default Footer;
