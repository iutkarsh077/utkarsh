import type { PodcastNotificationPayload } from "@/types/desktop-notification";

export const PODCAST_TWEET_URL =
  "https://x.com/iutkarsh077/status/2005839981424570474";

const PODCAST_TWEET_ID = "2005839981424570474";
const PODCAST_TWEET_TEXT = `“What if I just tried harder?”`;

export function getPodcastNotificationPayload(): PodcastNotificationPayload {
  return {
    id: `podcast-x-${PODCAST_TWEET_ID}`,
    type: "podcast",
    tweetUrl: PODCAST_TWEET_URL,
    authorName: "Utkarsh",
    authorHandle: "@iutkarsh077",
    authorAvatarSrc: "https://res.cloudinary.com/dakddv1pm/image/upload/v1771603459/posts/lfrj0rpsgxob5cfiobmr.png",
    authorAvatarAlt: "Utkarsh",
    authorVerified: true,
    tweetText: PODCAST_TWEET_TEXT,
    postedAtLabel: "Jun 12",
    mediaThumbnailSrc: "https://res.cloudinary.com/dakddv1pm/image/upload/v1788855616/posts/xrriwnbmxizha0ykunpk.jpg",
    mediaAlt: "Still from the Show Me Your Stack episode with Utkarsh Singh",
  };
}
