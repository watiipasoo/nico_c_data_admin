
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
		"--on-primary": "255 255 255",
		"--on-secondary": "0 0 0",
		"--on-tertiary": "0 0 0",
		"--on-success": "255 255 255",
		"--on-warning": "0 0 0",
		"--on-error": "0 0 0",
		"--on-surface": "255 255 255",
		// =~= Theme Colors  =~=
		// primary | #2b4f8f 
		"--color-primary-50": "223 229 238", // #dfe5ee
		"--color-primary-100": "213 220 233", // #d5dce9
		"--color-primary-200": "202 211 227", // #cad3e3
		"--color-primary-300": "170 185 210", // #aab9d2
		"--color-primary-400": "107 132 177", // #6b84b1
		"--color-primary-500": "43 79 143", // #2b4f8f
		"--color-primary-600": "39 71 129", // #274781
		"--color-primary-700": "32 59 107", // #203b6b
		"--color-primary-800": "26 47 86", // #1a2f56
		"--color-primary-900": "21 39 70", // #152746
		// secondary | #fa42cf 
		"--color-secondary-50": "254 227 248", // #fee3f8
		"--color-secondary-100": "254 217 245", // #fed9f5
		"--color-secondary-200": "254 208 243", // #fed0f3
		"--color-secondary-300": "253 179 236", // #fdb3ec
		"--color-secondary-400": "252 123 221", // #fc7bdd
		"--color-secondary-500": "250 66 207", // #fa42cf
		"--color-secondary-600": "225 59 186", // #e13bba
		"--color-secondary-700": "188 50 155", // #bc329b
		"--color-secondary-800": "150 40 124", // #96287c
		"--color-secondary-900": "123 32 101", // #7b2065
		// tertiary | #84b2d4 
		"--color-tertiary-50": "237 243 249", // #edf3f9
		"--color-tertiary-100": "230 240 246", // #e6f0f6
		"--color-tertiary-200": "224 236 244", // #e0ecf4
		"--color-tertiary-300": "206 224 238", // #cee0ee
		"--color-tertiary-400": "169 201 225", // #a9c9e1
		"--color-tertiary-500": "132 178 212", // #84b2d4
		"--color-tertiary-600": "119 160 191", // #77a0bf
		"--color-tertiary-700": "99 134 159", // #63869f
		"--color-tertiary-800": "79 107 127", // #4f6b7f
		"--color-tertiary-900": "65 87 104", // #415768
		// success | #272bbc 
		"--color-success-50": "223 223 245", // #dfdff5
		"--color-success-100": "212 213 242", // #d4d5f2
		"--color-success-200": "201 202 238", // #c9caee
		"--color-success-300": "169 170 228", // #a9aae4
		"--color-success-400": "104 107 208", // #686bd0
		"--color-success-500": "39 43 188", // #272bbc
		"--color-success-600": "35 39 169", // #2327a9
		"--color-success-700": "29 32 141", // #1d208d
		"--color-success-800": "23 26 113", // #171a71
		"--color-success-900": "19 21 92", // #13155c
		// warning | #248adc 
		"--color-warning-50": "222 237 250", // #deedfa
		"--color-warning-100": "211 232 248", // #d3e8f8
		"--color-warning-200": "200 226 246", // #c8e2f6
		"--color-warning-300": "167 208 241", // #a7d0f1
		"--color-warning-400": "102 173 231", // #66ade7
		"--color-warning-500": "36 138 220", // #248adc
		"--color-warning-600": "32 124 198", // #207cc6
		"--color-warning-700": "27 104 165", // #1b68a5
		"--color-warning-800": "22 83 132", // #165384
		"--color-warning-900": "18 68 108", // #12446c
		// error | #ee7d00 
		"--color-error-50": "252 236 217", // #fcecd9
		"--color-error-100": "252 229 204", // #fce5cc
		"--color-error-200": "251 223 191", // #fbdfbf
		"--color-error-300": "248 203 153", // #f8cb99
		"--color-error-400": "243 164 77", // #f3a44d
		"--color-error-500": "238 125 0", // #ee7d00
		"--color-error-600": "214 113 0", // #d67100
		"--color-error-700": "179 94 0", // #b35e00
		"--color-error-800": "143 75 0", // #8f4b00
		"--color-error-900": "117 61 0", // #753d00
		// surface | #1033b9 
		"--color-surface-50": "219 224 245", // #dbe0f5
		"--color-surface-100": "207 214 241", // #cfd6f1
		"--color-surface-200": "195 204 238", // #c3ccee
		"--color-surface-300": "159 173 227", // #9fade3
		"--color-surface-400": "88 112 206", // #5870ce
		"--color-surface-500": "16 51 185", // #1033b9
		"--color-surface-600": "14 46 167", // #0e2ea7
		"--color-surface-700": "12 38 139", // #0c268b
		"--color-surface-800": "10 31 111", // #0a1f6f
		"--color-surface-900": "8 25 91", // #08195b
		
	}
}