import { sentrySvelteKit } from "@sentry/sveltekit";
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		sentrySvelteKit({
		sourceMapsUploadOptions: {
		  org: "vajehdan",
		  project: "sample",
		  authToken: "7bc32200bfbb4729ae4458b6b68c76b5202b7be264694926886aa0e97e3f4ed2",
		  url: "https://sentry.io"		  
		},
	  }),
  , sveltekit()]
});