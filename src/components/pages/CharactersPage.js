import ErrorBoundary from "../errorBoundary/ErrorBoundary";
import { useState } from "react";
import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";

const CharacterPage = () => {
  const [selectedChar, setSelectedChar] = useState(null);

  const onCharSelect = (id) => {
    setSelectedChar(id);
  };
  return (
    <>
      <ErrorBoundary>
        <RandomChar />
      </ErrorBoundary>
      <div className="char__content">
        <ErrorBoundary>
          <CharList onCharSelect={onCharSelect} />
        </ErrorBoundary>
        <ErrorBoundary>
          <CharInfo selectedChar={selectedChar} />
        </ErrorBoundary>
      </div>
    </>
  );
};
export default CharacterPage;
