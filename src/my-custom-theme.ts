
import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const myCustomTheme: CustomThemeConfig = {
    name: 'my-custom-theme',
    properties: {
		// =~= Theme Properties =~=
		"--theme-font-family-base": `system-ui`,
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
		"--on-success": "255 255 255",
		"--on-warning": "0 0 0",
		"--on-error": "0 0 0",
		"--on-surface": "255 255 255",
		// =~= Theme Colors  =~=
		// primary | #feccac 
		"--color-primary-50": "255 247 243", // #fff7f3
		"--color-primary-100": "255 245 238", // #fff5ee
		"--color-primary-200": "255 242 234", // #fff2ea
		"--color-primary-300": "255 235 222", // #ffebde
		"--color-primary-400": "254 219 197", // #fedbc5
		"--color-primary-500": "254 204 172", // #feccac
		"--color-primary-600": "229 184 155", // #e5b89b
		"--color-primary-700": "191 153 129", // #bf9981
		"--color-primary-800": "152 122 103", // #987a67
		"--color-primary-900": "124 100 84", // #7c6454
		// secondary | #8a304c 
		"--color-secondary-50": "237 224 228", // #ede0e4
		"--color-secondary-100": "232 214 219", // #e8d6db
		"--color-secondary-200": "226 203 210", // #e2cbd2
		"--color-secondary-300": "208 172 183", // #d0acb7
		"--color-secondary-400": "173 110 130", // #ad6e82
		"--color-secondary-500": "138 48 76", // #8a304c
		"--color-secondary-600": "124 43 68", // #7c2b44
		"--color-secondary-700": "104 36 57", // #682439
		"--color-secondary-800": "83 29 46", // #531d2e
		"--color-secondary-900": "68 24 37", // #441825
		// tertiary | #db5142 
		"--color-tertiary-50": "250 229 227", // #fae5e3
		"--color-tertiary-100": "248 220 217", // #f8dcd9
		"--color-tertiary-200": "246 212 208", // #f6d4d0
		"--color-tertiary-300": "241 185 179", // #f1b9b3
		"--color-tertiary-400": "230 133 123", // #e6857b
		"--color-tertiary-500": "219 81 66", // #db5142
		"--color-tertiary-600": "197 73 59", // #c5493b
		"--color-tertiary-700": "164 61 50", // #a43d32
		"--color-tertiary-800": "131 49 40", // #833128
		"--color-tertiary-900": "107 40 32", // #6b2820
		// success | #2b599c 
		"--color-success-50": "223 230 240", // #dfe6f0
		"--color-success-100": "213 222 235", // #d5deeb
		"--color-success-200": "202 214 230", // #cad6e6
		"--color-success-300": "170 189 215", // #aabdd7
		"--color-success-400": "107 139 186", // #6b8bba
		"--color-success-500": "43 89 156", // #2b599c
		"--color-success-600": "39 80 140", // #27508c
		"--color-success-700": "32 67 117", // #204375
		"--color-success-800": "26 53 94", // #1a355e
		"--color-success-900": "21 44 76", // #152c4c
		// warning | #83999e 
		"--color-warning-50": "236 240 240", // #ecf0f0
		"--color-warning-100": "230 235 236", // #e6ebec
		"--color-warning-200": "224 230 231", // #e0e6e7
		"--color-warning-300": "205 214 216", // #cdd6d8
		"--color-warning-400": "168 184 187", // #a8b8bb
		"--color-warning-500": "131 153 158", // #83999e
		"--color-warning-600": "118 138 142", // #768a8e
		"--color-warning-700": "98 115 119", // #627377
		"--color-warning-800": "79 92 95", // #4f5c5f
		"--color-warning-900": "64 75 77", // #404b4d
		// error | #83f7f1 
		"--color-error-50": "236 254 253", // #ecfefd
		"--color-error-100": "230 253 252", // #e6fdfc
		"--color-error-200": "224 253 252", // #e0fdfc
		"--color-error-300": "205 252 249", // #cdfcf9
		"--color-error-400": "168 249 245", // #a8f9f5
		"--color-error-500": "131 247 241", // #83f7f1
		"--color-error-600": "118 222 217", // #76ded9
		"--color-error-700": "98 185 181", // #62b9b5
		"--color-error-800": "79 148 145", // #4f9491
		"--color-error-900": "64 121 118", // #407976
		// surface | #052726 
		"--color-surface-50": "218 223 222", // #dadfde
		"--color-surface-100": "205 212 212", // #cdd4d4
		"--color-surface-200": "193 201 201", // #c1c9c9
		"--color-surface-300": "155 169 168", // #9ba9a8
		"--color-surface-400": "80 104 103", // #506867
		"--color-surface-500": "5 39 38", // #052726
		"--color-surface-600": "5 35 34", // #052322
		"--color-surface-700": "4 29 29", // #041d1d
		"--color-surface-800": "3 23 23", // #031717
		"--color-surface-900": "2 19 19", // #021313
		
	}
}