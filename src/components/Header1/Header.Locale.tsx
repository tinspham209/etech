import { FC, useEffect, useState } from "react";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { Check, ChevronDown } from "lucide-react";
import { useLocale } from "@/lib/i18n";

const languages = [
	{ code: "en", name: "English", flag: "/flags/us.svg" },
	{ code: "vi", name: "Vietnamese", flag: "/flags/vn.svg" },
];
const HeaderLocale: FC<{
	isMobile?: boolean;
	onSelect?: (..._args: any[]) => void;
}> = ({ isMobile = false, onSelect }) => {
	const [open, setOpen] = useState(false);

	const { i18n } = useLocale();

	const [selectedLang, setSelectedLang] = useState(languages[0]); // Default to English

	useEffect(() => {
		setSelectedLang(
			languages.find((lang) => lang.code === i18n.language) || languages[0]
		);
	}, [i18n.language]);

	const changeLanguage = (item: (typeof languages)[0]) => {
		i18n.changeLanguage(item.code);
		setSelectedLang(item);
		setOpen(false);
		if (onSelect) {
			onSelect();
		}
	};

	return (
		<Popover open={open} onOpenChange={setOpen}>
			<PopoverTrigger
				className={`flex items-center gap-2 rounded-md px-1 ${
					isMobile
						? "border border-gray-300"
						: " border border-transparent hover:border-gray-300 "
				}transition`}
			>
				<img
					src={selectedLang.flag}
					alt={selectedLang.name}
					className="w-7 h-7"
				/>
				<ChevronDown
					className={`w-4 h-4 ${isMobile ? "text-black" : "text-white"}`}
				/>
			</PopoverTrigger>

			<PopoverContent className="w-full p-2 bg-white rounded-lg shadow-lg">
				{languages.map((lang) => (
					<button
						key={lang.code}
						className="flex items-center gap-4 w-full p-1  rounded transition"
						onClick={() => changeLanguage(lang)}
					>
						{selectedLang.code === lang.code ? (
							<Check className="w-4 h-4 text-black" />
						) : (
							<div className="w-4 h-4" />
						)}

						<div className="flex items-center gap-2">
							<img src={lang.flag} alt={lang.name} className="w-9 h-9" />
							<span className="text-sm font-medium text-black">
								{lang.name}
							</span>
						</div>
					</button>
				))}
			</PopoverContent>
		</Popover>
	);
};

export default HeaderLocale;
