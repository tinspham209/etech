import { useLocale } from "@/lib/i18n";
import { FC, useEffect, useState } from "react";

type Props = {
	targetDate: Date;
};

const CountdownTimer: FC<Props> = ({ targetDate }) => {
	const { trans } = useLocale();

	const [timeLeft, setTimeLeft] = useState({
		days: 0,
		hours: 0,
		minutes: 0,
		seconds: 0,
	});

	useEffect(() => {
		const timer = setInterval(() => {
			const now = new Date().getTime();
			const distance = targetDate.getTime() - now;

			setTimeLeft({
				days: Math.floor(distance / (1000 * 60 * 60 * 24)),
				hours: Math.floor(
					(distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
				),
				minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
				seconds: Math.floor((distance % (1000 * 60)) / 1000),
			});
		}, 1000);

		return () => clearInterval(timer);
	}, [targetDate]);

	return (
		<div className="flex gap-2 md:gap-8 bg-white rounded-[21px] px-[38px] py-[18px] pb-[28px] md:px-[40px] md:py-[16px] shadow-lg">
			{[
				{ label: "Days", value: timeLeft.days },
				{ label: "Hours", value: timeLeft.hours },
				{ label: "Minutes", value: timeLeft.minutes },
				{ label: "Second", value: timeLeft.seconds },
			].map((item, index) => {
				const isLastItem = index === 3;
				return (
					<div key={item.label} className="flex gap-2 md:gap-[56px]">
						<div className="text-center">
							<div className="text-[36px] md:text-[60px] font-bold text-black font-secondary">
								{String(item.value).padStart(2, "0")}
							</div>
							<div className="text-[12px] md:text-[16px] text-black font-bold">
								{trans(item.label)}
							</div>
						</div>
						{!isLastItem && (
							<p className="text-[40px] md:text-[65px] text-black translate-y-3 md:translate-y-[8px] md:mr-[30px]">
								:
							</p>
						)}
					</div>
				);
			})}
		</div>
	);
};

export default CountdownTimer;
