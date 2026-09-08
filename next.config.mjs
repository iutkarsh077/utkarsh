/**
 * @type {import('next').NextConfig}
 *
 * Routing behavior:
 * - /                    → shows desktop with saved session state (default layout for new visitors)
 * - /notes               → on desktop: notes focused (selection resolved client-side)
 *                          on mobile: shows sidebar (no redirect)
 * - /notes/{slug}        → shows the note (notes focused)
 * - /{app}               → shows default desktop with that app focused
 * - /notes/{invalid}     → redirects to /notes/error
 * - /{legacy-slug}       → redirects to /notes/{legacy-slug} (server-side, permanent)
 * - /{other}             → 404
 */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/**",
      },
      {
        protocol: "http",
        hostname: "res.cloudinary.com",
        pathname: "/**",
      },
    ],
  },
  async rewrites() {
    return [];
  },
  async redirects() {
    // Legacy note slugs that were publicly shared before /notes/* prefix was added.
    // These are permanent (308) redirects so browsers cache them.
    const legacyNoteSlugs = [
      'quick-links',
      'about-me',
      'experience',
      'projects',
      'skills',
      'credits',
    ];

    return [
      // Legacy note slugs redirect to /notes/*
      ...legacyNoteSlugs.map((slug) => ({
        source: `/${slug}`,
        destination: `/notes/${slug}`,
        permanent: true,
      })),
    ];
  },
};

export default nextConfig;
