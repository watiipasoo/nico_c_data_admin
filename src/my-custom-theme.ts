
import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const myCustomTheme: CustomThemeConfig = {
    name: 'my-custom-theme',
    properties: {
		// =~= Theme Properties =~=
		"--theme-font-family-base": `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
		"--theme-font-family-heading": `system-ui`,
		"--theme-font-color-base": "0 0 0",
		"--theme-font-color-dark": "255 255 255",
		"--theme-rounded-base": "9999px",
		"--theme-rounded-container": "8px",
		"--theme-border-base": "1px",
		// =~= Theme On-X Colors =~=
		"--on-primary": "0 0 0",
		"--on-secondary": "255 255 255",
		"--on-tertiary": "0 0 0",
		"--on-success": "0 0 0",
		"--on-warning": "0 0 0",
		"--on-error": "0 0 0",
		"--on-surface": "255 255 255",
		// =~= Theme Colors  =~=
		// primary | #65a631 
		"--color-primary-50": "232 242 224", // #e8f2e0
		"--color-primary-100": "224 237 214", // #e0edd6
		"--color-primary-200": "217 233 204", // #d9e9cc
		"--color-primary-300": "193 219 173", // #c1dbad
		"--color-primary-400": "147 193 111", // #93c16f
		"--color-primary-500": "101 166 49", // #65a631
		"--color-primary-600": "91 149 44", // #5b952c
		"--color-primary-700": "76 125 37", // #4c7d25
		"--color-primary-800": "61 100 29", // #3d641d
		"--color-primary-900": "49 81 24", // #315118
		// secondary | #4900da 
		"--color-secondary-50": "228 217 249", // #e4d9f9
		"--color-secondary-100": "219 204 248", // #dbccf8
		"--color-secondary-200": "210 191 246", // #d2bff6
		"--color-secondary-300": "182 153 240", // #b699f0
		"--color-secondary-400": "128 77 229", // #804de5
		"--color-secondary-500": "73 0 218", // #4900da
		"--color-secondary-600": "66 0 196", // #4200c4
		"--color-secondary-700": "55 0 164", // #3700a4
		"--color-secondary-800": "44 0 131", // #2c0083
		"--color-secondary-900": "36 0 107", // #24006b
		// tertiary | #98a4d8 
		"--color-tertiary-50": "240 241 249", // #f0f1f9
		"--color-tertiary-100": "234 237 247", // #eaedf7
		"--color-tertiary-200": "229 232 245", // #e5e8f5
		"--color-tertiary-300": "214 219 239", // #d6dbef
		"--color-tertiary-400": "183 191 228", // #b7bfe4
		"--color-tertiary-500": "152 164 216", // #98a4d8
		"--color-tertiary-600": "137 148 194", // #8994c2
		"--color-tertiary-700": "114 123 162", // #727ba2
		"--color-tertiary-800": "91 98 130", // #5b6282
		"--color-tertiary-900": "74 80 106", // #4a506a
		// success | #7ef0fe 
		"--color-success-50": "236 253 255", // #ecfdff
		"--color-success-100": "229 252 255", // #e5fcff
		"--color-success-200": "223 251 255", // #dffbff
		"--color-success-300": "203 249 255", // #cbf9ff
		"--color-success-400": "165 245 254", // #a5f5fe
		"--color-success-500": "126 240 254", // #7ef0fe
		"--color-success-600": "113 216 229", // #71d8e5
		"--color-success-700": "95 180 191", // #5fb4bf
		"--color-success-800": "76 144 152", // #4c9098
		"--color-success-900": "62 118 124", // #3e767c
		// warning | #d29df9 
		"--color-warning-50": "248 240 254", // #f8f0fe
		"--color-warning-100": "246 235 254", // #f6ebfe
		"--color-warning-200": "244 231 254", // #f4e7fe
		"--color-warning-300": "237 216 253", // #edd8fd
		"--color-warning-400": "224 186 251", // #e0bafb
		"--color-warning-500": "210 157 249", // #d29df9
		"--color-warning-600": "189 141 224", // #bd8de0
		"--color-warning-700": "158 118 187", // #9e76bb
		"--color-warning-800": "126 94 149", // #7e5e95
		"--color-warning-900": "103 77 122", // #674d7a
		// error | #769d1b 
		"--color-error-50": "234 240 221", // #eaf0dd
		"--color-error-100": "228 235 209", // #e4ebd1
		"--color-error-200": "221 231 198", // #dde7c6
		"--color-error-300": "200 216 164", // #c8d8a4
		"--color-error-400": "159 186 95", // #9fba5f
		"--color-error-500": "118 157 27", // #769d1b
		"--color-error-600": "106 141 24", // #6a8d18
		"--color-error-700": "89 118 20", // #597614
		"--color-error-800": "71 94 16", // #475e10
		"--color-error-900": "58 77 13", // #3a4d0d
		// surface | #3b0b47 
		"--color-surface-50": "226 218 227", // #e2dae3
		"--color-surface-100": "216 206 218", // #d8ceda
		"--color-surface-200": "206 194 209", // #cec2d1
		"--color-surface-300": "177 157 181", // #b19db5
		"--color-surface-400": "118 84 126", // #76547e
		"--color-surface-500": "59 11 71", // #3b0b47
		"--color-surface-600": "53 10 64", // #350a40
		"--color-surface-700": "44 8 53", // #2c0835
		"--color-surface-800": "35 7 43", // #23072b
		"--color-surface-900": "29 5 35", // #1d0523
	}
}