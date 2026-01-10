type EventName = "directions_click" | "timetable_view" | "email_click" | "form_submit" | "facebook_click";

export function track(event: EventName, params: Record<string, string | number | boolean> = {}) {
  // GA4 hook; no-op if gtag not available
  if (typeof window === "undefined") return;
  const gtag = (window as any).gtag;
  if (typeof gtag === "function") {
    gtag("event", event, params);
  }
}
