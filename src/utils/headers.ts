export function isMobileUserAgent(ua?: string) {
  if (ua) {
    return Boolean(
      ua.match(
        /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
      )
    );
  }
  return false;
}
