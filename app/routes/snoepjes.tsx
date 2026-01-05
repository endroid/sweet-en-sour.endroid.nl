import type { Route } from "./+types/snoepjes";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Snoepjes.nl" },
  ];
}

export default function Snoepjes() {
  return (
    <>
      <div className="container products-container">
        <h1 style={{ color: "red" }}>Onze snoepjes</h1>
        <a style={{ color: "red" }}>hier kun je zien welke snoepjes we allemaal verkopen klein= 100 gram middel= 250 gram groot=500 gram (we maken de snoepjes zelf)</a>

        <a href="/" className="back-link">Terug naar home</a>

        <div className="products-grid">
          <div className="product">
            <div className="product-image">
              <img src="/images/kruidnoten.png" width="200" alt="Pepernoten" />
            </div>
            <h3>pepernoten</h3>
            <p>Eigenlijk heten ze kruidnoten maar we noemen ze meestal pepernoten.</p>
            <p className="prices">Klein:1,50
            Middel:2,50
            Groot:5,00 </p>
          </div>

          <div className="product">
            <div className="product-image">
              <img src="/images/speculaas.png" width="200" alt="Speculaas" />
            </div>
            <h3>Speculaas</h3>
            <p>In de 17e eeuw was speculaas een product alleen voor rijke mensen.</p>
            <p className="prices">Klein:1,50
            Middel:2,50
            Groot:5,00 </p>
          </div>

          <div className="product">
            <div className="product-image">
              <img src="/images/karamelkoekjes.png" width="200" alt="Karamelkoekjes" />
            </div>
            <h3>Karamelkoekjes</h3>
            <p>Met echte stukjes karamel.</p>
            <p className="prices">Klein:1,50
            Middel:3,00
            Groot:5,50 </p>
          </div>

          <div className="product">
            <div className="product-image">
              <img src="/images/cookiedeeg.png" width="200" alt="Eetbaar koekdeeg" />
            </div>
            <h3>Eetbaar koekdeeg met chocolade stukjes</h3>
            <p>Bewaar dit niet te lang buiten de koelkast.</p>
            <p className="prices">Klein:1,50
            Middel:2,50
            Groot:5,00 </p>
          </div>

          <div className="product">
            <div className="product-image">
              <img src="/images/bananenbrood.png" width="200" alt="Bananenbrood" />
            </div>
            <h3>Banenbrood</h3>
            <p>Voor bananenbrood zijn er heel veel topings.</p>
            <p className="prices">Heel brood 6,00
            2 cm plakjes 6,00
            2 cm plakjes 6,00 </p>
          </div>

          <div className="product">
            <div className="product-image">
              <img src="/images/kokos-chocolade-fudge.png" width="200" alt="Fudge" />
            </div>
            <h3>Chocola kokos fudge</h3>
            <p>Oorspronkelijk wou ik karamel fudge maken maar dat is te moeilijk.</p>
            <p className="prices">450-600 gram 8,00</p>
          </div>

          <div className="product">
            <div className="product-image">
              <img src="/images/popcorn.png" width="200" alt="Popcorn" />
            </div>
            <h3>Popcorn</h3>
            <p>We zijn van plan om meer smaken toe te voegen.</p>
            <p className="prices">1 bakje 3,00</p>
          </div>

          <div className="product">
            <div className="product-image">
              <img src="/images/suikerspin.png" width="200" alt="Suikerspin" />
            </div>
            <h3>Suikerspin</h3>
            <p>We zijn van plan om meer smaken toe te voegen.</p>
            <p className="prices">1 bakje 3,00</p>
          </div>
        </div>
      </div>
    </>
  );
}
