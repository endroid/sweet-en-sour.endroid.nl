import type { Route } from "./+types/contact";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Snoepjes.nl" },
  ];
}

export default function Contact() {
  return (
    <>
      <h1>Bestel een product(en) door het formulier in te vullen. </h1>
       <a>Geef aan wat je wil met de letters en getallen en gebruik een komma als je een volgend product wil toevoegen.</a>
       <a href="https://docs.google.com/forms/d/e/1FAIpQLScdTszcoG-brEV4xsuUf-sdfHJrhSsBqiR3jLmdjLEGMsJVUQ/viewform?usp=dialog"><button type="button" className="btn btn-danger">bestelling plaatsen (link google forms) </button></a>
<a href="/">Terug naar Home</a>
    </>
  );
}
