declare module 'awesome-qr' {
	/** correctLevel values. */
	enum QRErrorCorrectLevel {
		M,
		L,
		H,
		Q
	}

	/** QR generation options. */
	interface AwesomeQrOptions {
		text: string;

		/** @example 800 */
		size?: number;

		/** @example 20 */
		margin?: number;

		/** @example 4 */
		typeNumber?: number;

		/** @example '#000000' */
		colorDark?: string;

		/** @example '#ffffff' */
		colorLight?: string;

		/** @example QRErrorCorrectLevel.M */
		correctLevel?: QRErrorCorrectLevel;

		/** Background image path. */
		backgroundImage?: string;

		/** @example 'rgba(0,0,0,0)' */
		backgroundDimming?: string;

		/** Logo image path. */
		logoImage?: string;

		/** @example 0.2 */
		logoScale?: number;

		/** @example 6 */
		logoMargin?: number;

		/** @example 8 */
		logoCornerRadius?: number;

		/** @example true */
		whiteMargin?: boolean;

		/** @example 0.35 */
		dotScale?: number;

		/** @example false */
		maskedDots?: boolean;

		/** @example true */
		autoColor?: boolean;

		/** @example 'rgba(0, 0, 0, .1)' */
		borderDark?: string;

		/** @example 'rgba(255, 255, 255, .1)' */
		borderLight?: string;

		/** @example 128 */
		binarizeThreshold?: number;

		/** @example true */
		drawPosition?: boolean;

		callback: (data: Uint8Array) => any
	}

	export class AwesomeQRCode {
		create(options: AwesomeQrOptions): void;
		makeCode(text: string): any;
		clear(): void;
	}
}
