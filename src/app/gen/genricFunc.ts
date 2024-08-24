export const redirectLink = () => {
  const playStoreLink =
    "https://play.google.com/store/apps/details?id=com.blissy";

  const isMobile = /Mobi|Android/i.test(navigator.userAgent);

  if (isMobile) {
    window.open(`market://details?id=com.blissy`, "_blank");
  } else {
    window.open(playStoreLink, "_blank");
  }
};
