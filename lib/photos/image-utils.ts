/**
 * Get optimized image URL with sizing parameters if supported.
 *
 * @param url - Original image URL
 * @param width - Desired width in pixels
 * @param quality - Image quality (1-100), defaults to 80
 * @returns Optimized image URL
 */
export function getOptimizedImageUrl(
  url: string,
  width: number,
  quality: number = 80
): string {
  if (!url) return "";
  if (!url.includes("/storage/v1/object/public/")) {
    return url;
  }

  const transformedUrl = url.replace(
    "/storage/v1/object/public/",
    "/storage/v1/render/image/public/"
  );

  // Add transformation parameters
  const separator = transformedUrl.includes("?") ? "&" : "?";
  return `${transformedUrl}${separator}width=${width}&resize=contain&quality=${quality}`;
}

/**
 * Get thumbnail URL for grid display
 */
export function getThumbnailUrl(url: string): string {
  return getOptimizedImageUrl(url, 400, 75);
}

/**
 * Get viewer URL for full photo display
 */
export function getViewerUrl(url: string): string {
  return getOptimizedImageUrl(url, 1600, 85);
}
