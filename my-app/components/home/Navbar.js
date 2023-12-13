import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [selectedOption, setSelectedOption] = useState(""); // State to store the selected option

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    //responsivity lg:hidden
    <div className="lg:hidden" >
      <div className="flex w-fit mx-auto font-medium py-4 text-blackish">
        <Link className="navbar__link relative" href="#">
          Accueil
        </Link>
        <Link className="navbar__link relative" href="#">
          Question d'actu
        </Link>
        <div className="relative">
          <select
            className="border-none bg-transparent text-blackish"
            value={selectedOption}
            onChange={handleSelectChange}
          >
            <option value="" disabled>
              Santé TV
            </option>
            <option value="sante-tv-live">L'invité santé</option>
            <option value="sante-tv-shows">c'est notre santé</option>
            <option value="sante-tv-shows">Gestes santés</option>
            <option value="sante-tv-shows">Santé TV</option>
          </select>
        </div>
        <Link className="navbar__link relative" href="#">
          Mieux vivre
        </Link>
      </div>

      {/* Add more components for larger screens if necessary */}
    </div>
  );
};

export default Navbar;
