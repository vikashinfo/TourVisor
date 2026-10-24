import BookingCard from "../../Section/Destinatos/BookingCaerd";
import DiseonCard from "../../Section/Destinatos/cards";
import DestinationsCard from "../../Section/Destinatos/Destinatos";
import PopularTours from "../../Section/Destinatos/PopulerTures";

function DestinationScren() {
  return (
    <>
      <div>
        <DestinationsCard />
      </div>
      <div>
        <DiseonCard />
      </div>
      <div>
        <PopularTours />
      </div>
      <div>
        <BookingCard />
      </div>
    </>
  );
}
export default DestinationScren;
