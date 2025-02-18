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
				className="relative text-white py-14 md:py-20 bg-[url(/bg-footer.webp)]"
				style={{
					backgroundPosition: "center bottom",
					backgroundSize: "cover",
				}}
			>
				<div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-4 justify-between items-start">
					<div className="mb-6 lg:mb-0 mx-auto md:mx-0">
						<img src="/logo.png" className="object-contain mb-6" />
						<div className="flex space-x-4 mt-4">
							<Twitter className="w-6 h-6 cursor-pointer" />
							<Facebook className="w-6 h-6 cursor-pointer" />
							<Linkedin className="w-6 h-6 cursor-pointer" />
						</div>
					</div>

					<div className="mb-6 lg:mb-0">
						<h3 className="text-lg font-bold">{trans("Address")}</h3>
						<div className="flex flex-row gap-4 mt-10">
							<MapPin className="w-8 h-10" />
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
						<div className="flex flex-row gap-4 mt-6">
							<Smartphone className="w-5 h-5" />
							<div className="flex flex-col gap-2">
								<p className="text-sm">(+1) 555-0108 or (+236) 555-0108</p>
							</div>
						</div>
					</div>

					<div className="mb-6 lg:mb-0">
						<h3 className="text-lg font-bold">{trans("Subscribe")}</h3>
						<p className=" text-white mt-10 text-sm">
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

			<div className="text-center py-5 text-white text-sm bg-black">
				2017 Copyright. Policy.
			</div>
		</footer>
	);
};

export default Footer;
