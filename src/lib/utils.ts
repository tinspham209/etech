import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

const isEmptyObject = (value: any): boolean =>
	typeof value === "object" && Object.keys(value).length === 0;
const isEmptyString = (value: any): boolean =>
	typeof value === "string" && value === "";
const isEmptyArray = (value: any): boolean =>
	Array.isArray(value) && value.length === 0;

export const isEmpty = (value: any): boolean => {
	return (
		value === undefined ||
		value === null ||
		Number.isNaN(value) ||
		isEmptyObject(value) ||
		isEmptyString(value) ||
		isEmptyArray(value)
	);
};
