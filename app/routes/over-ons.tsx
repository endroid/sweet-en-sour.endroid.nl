import type { Route } from "./+types/over-ons";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Snoepjes.nl" },
  ];
}

export default function OverOns() {
  return (
    <>
      <h1 style={{ color: "#0000FF" }}>Over ons</h1>
      <h4 style={{ color: "#FFFFFF" }}> Sweet en Sour is open sinds 1 januari 2025 dus al meer dan 1 jaar oud.</h4>
      <h4 style={{ color: "#FFFFFF" }}> Al het snoep en gebakjes dat je vindt in onze winkel bakken we zelf.</h4>
      <h4 style={{ color: "#FFFFFF" }}> Ons best verkochte product is karamelkoekjes.</h4>
      <h4 style={{ color: "#FFFFFF" }}> Website versie 3.0 (Er is een beetje gebruik gemaakt van ai maar niet te veel en meer voor een educatieve reden.
)</h4>
      <span style={{ color: "blue" }}></span>
      <a href="/">Terug naar Home</a>
    </>
  );
}
