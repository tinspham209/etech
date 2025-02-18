import { ReactNode } from "react";
import { Trans, useTranslation } from "react-i18next";
import { isEmpty } from "../utils";

/**
 * utils func to use i18n
 * @returns {
 *  i18n: i18n instance,
 *  trans: translate function,
 *  enableLocale: boolean,
 *  Trans: Translation component
 * }
 *
 * @example
 * ```
 * const {trans, enableLocale, i18n} = useLocale();
 * <Typography>
 *  {trans('key')}
 * </Typography>
 * ```
 */
const useLocale = () => {
	const { t, i18n } = useTranslation();

	const enableLocale = true;

	const trans = (key: ReactNode, condition = true): ReactNode | string => {
		if (isEmpty(key)) return key;

		if (enableLocale && typeof key === "string" && condition) {
			return t(key);
		}
		return key;
	};

	return {
		i18n,
		trans,
		enableLocale,
		Trans,
	};
};

export default useLocale;
