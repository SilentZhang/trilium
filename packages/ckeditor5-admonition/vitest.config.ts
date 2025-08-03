/**
 * @license Copyright (c) 2023-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */

import { defineConfig } from 'vitest/config';
import svg from 'vite-plugin-svgo';

export default defineConfig( {
	plugins: [
		svg()
	],
	test: {
		environment: "happy-dom",
		include: [
			'tests/**/*.[jt]s'
		],
		globals: true,
		watch: false,
		passWithNoTests: true
	}
} );
