
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
		"--on-tertiary": "255 255 255",
		"--on-success": "0 0 0",
		"--on-warning": "0 0 0",
		"--on-error": "255 255 255",
		"--on-surface": "255 255 255",
		// =~= Theme Colors  =~=
		// primary | #75b219 
		"--color-primary-50": "234 243 221", // #eaf3dd
		"--color-primary-100": "227 240 209", // #e3f0d1
		"--color-primary-200": "221 236 198", // #ddecc6
		"--color-primary-300": "200 224 163", // #c8e0a3
		"--color-primary-400": "158 201 94", // #9ec95e
		"--color-primary-500": "117 178 25", // #75b219
		"--color-primary-600": "105 160 23", // #69a017
		"--color-primary-700": "88 134 19", // #588613
		"--color-primary-800": "70 107 15", // #466b0f
		"--color-primary-900": "57 87 12", // #39570c
		// secondary | #5d3848 
		"--color-secondary-50": "231 225 228", // #e7e1e4
		"--color-secondary-100": "223 215 218", // #dfd7da
		"--color-secondary-200": "215 205 209", // #d7cdd1
		"--color-secondary-300": "190 175 182", // #beafb6
		"--color-secondary-400": "142 116 127", // #8e747f
		"--color-secondary-500": "93 56 72", // #5d3848
		"--color-secondary-600": "84 50 65", // #543241
		"--color-secondary-700": "70 42 54", // #462a36
		"--color-secondary-800": "56 34 43", // #38222b
		"--color-secondary-900": "46 27 35", // #2e1b23
		// tertiary | #046016 
		"--color-tertiary-50": "217 231 220", // #d9e7dc
		"--color-tertiary-100": "205 223 208", // #cddfd0
		"--color-tertiary-200": "192 215 197", // #c0d7c5
		"--color-tertiary-300": "155 191 162", // #9bbfa2
		"--color-tertiary-400": "79 144 92", // #4f905c
		"--color-tertiary-500": "4 96 22", // #046016
		"--color-tertiary-600": "4 86 20", // #045614
		"--color-tertiary-700": "3 72 17", // #034811
		"--color-tertiary-800": "2 58 13", // #023a0d
		"--color-tertiary-900": "2 47 11", // #022f0b
		// success | #7f7d73 
		"--color-success-50": "236 236 234", // #ececea
		"--color-success-100": "229 229 227", // #e5e5e3
		"--color-success-200": "223 223 220", // #dfdfdc
		"--color-success-300": "204 203 199", // #cccbc7
		"--color-success-400": "165 164 157", // #a5a49d
		"--color-success-500": "127 125 115", // #7f7d73
		"--color-success-600": "114 113 104", // #727168
		"--color-success-700": "95 94 86", // #5f5e56
		"--color-success-800": "76 75 69", // #4c4b45
		"--color-success-900": "62 61 56", // #3e3d38
		// warning | #f18ef1 
		"--color-warning-50": "253 238 253", // #fdeefd
		"--color-warning-100": "252 232 252", // #fce8fc
		"--color-warning-200": "252 227 252", // #fce3fc
		"--color-warning-300": "249 210 249", // #f9d2f9
		"--color-warning-400": "245 176 245", // #f5b0f5
		"--color-warning-500": "241 142 241", // #f18ef1
		"--color-warning-600": "217 128 217", // #d980d9
		"--color-warning-700": "181 107 181", // #b56bb5
		"--color-warning-800": "145 85 145", // #915591
		"--color-warning-900": "118 70 118", // #764676
		// error | #a610d3 
		"--color-error-50": "242 219 248", // #f2dbf8
		"--color-error-100": "237 207 246", // #edcff6
		"--color-error-200": "233 195 244", // #e9c3f4
		"--color-error-300": "219 159 237", // #db9fed
		"--color-error-400": "193 88 224", // #c158e0
		"--color-error-500": "166 16 211", // #a610d3
		"--color-error-600": "149 14 190", // #950ebe
		"--color-error-700": "125 12 158", // #7d0c9e
		"--color-error-800": "100 10 127", // #640a7f
		"--color-error-900": "81 8 103", // #510867
		// surface | #0a0b18 
		"--color-surface-50": "218 218 220", // #dadadc
		"--color-surface-100": "206 206 209", // #ceced1
		"--color-surface-200": "194 194 197", // #c2c2c5
		"--color-surface-300": "157 157 163", // #9d9da3
		"--color-surface-400": "84 84 93", // #54545d
		"--color-surface-500": "10 11 24", // #0a0b18
		"--color-surface-600": "9 10 22", // #090a16
		"--color-surface-700": "8 8 18", // #080812
		"--color-surface-800": "6 7 14", // #06070e
		"--color-surface-900": "5 5 12", // #05050c
		
	}
}