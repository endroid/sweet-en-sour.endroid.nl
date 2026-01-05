import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Sweet en Sour" },
  ];
}

export default function Home() {
  return (
    <>
      <header className="text-center p-4">
        <h1>Sweet en Sour</h1>
        <nav aria-label="Hoofdnavigatie">
          <ul className="nav flex-column align-items-center button-container">
             <li className="nav-item"><a href="/snoepjes" className="btn custom-btn bounce-btn mb-2" aria-label="Bekijk onze producten">Producten</a></li>
             <li className="nav-item"><a href="/over-ons" className="btn custom-btn bounce-btn mb-2" aria-label="Lees over ons">Over ons</a></li>
             <li className="nav-item"><a href="/contact" className="btn custom-btn bounce-btn mb-2" aria-label="Plaats een bestelling">Bestelling plaatsen</a></li>
          <li className="nav-item"><a href="https://www.survio.com/survey/d/O5Z9K3T9R9Y6G1M2W" className="btn custom-btn bounce-btn mb-2" aria-label="vul een enquête in">Vul deze enquête in alleen als je snoep hebt besteld</a></li>

            <li className="nav-item"><hr className="divider"/></li>

            <li className="nav-item mt-4">
              <p className="section-label">Nog niet beschikbaar</p>
            </li>

            <li className="nav-item"><a href="#" className="btn custom-btn passive-btn mb-2">Winkelmandje</a></li>
            <li className="nav-item"><a href="#" className="btn custom-btn passive-btn mb-2">Acties (maak een account)</a></li>
            <li className="nav-item"><a href="#" className="btn custom-btn passive-btn mb-2">Aanmelden</a></li>
          </ul>
        </nav>
      </header>

      <footer className="text-center p-3">
        <p>&copy; 2025 Sweet en Sour</p>
      </footer>
    </>
  );
}
