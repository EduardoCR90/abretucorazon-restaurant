# Architecture

The package distributes Astro components, layouts, content contracts and pure adapters. It never owns restaurant content, credentials, schemas or account authorization. Each independent Astro instance supplies typed configuration, its content loader and public assets. Historical compositions remain available beside CMS blocks; neither requires a visual builder.

Versioned source is distributed with a pinned commit and a file integrity manifest. Instances consume a file dependency so private source access is not needed at build time. The update tool replaces generated distribution files; restaurant overrides stay outside the package.
