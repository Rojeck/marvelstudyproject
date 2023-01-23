import ComicsList from "../comicsList/ComicsList";
import ErrorBoundary from "../errorBoundary/ErrorBoundary";
import Banner from "../banner/Banner";

const ComicsPage = () => {
  return (
    <>
      <Banner />
      <ErrorBoundary>
        <ComicsList />
      </ErrorBoundary>
    </>
  );
};
export default ComicsPage;
