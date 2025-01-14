import { Button, FormControl, TextField } from "@material-ui/core";
import { useContext } from "react";
import DatesSelect from "../components/form-inputs/DatesSelect";
import DestinationsSelect from "../components/form-inputs/DestinationsSelect";
import DurationsSelect from "../components/form-inputs/DurationsSelect";
import TransportsSelect from "../components/form-inputs/TransportsSelect";
import Trip from "../components/Trip";
import { useStyles } from "../styles";
import globalContext from "../context/global/globalContext";
import Details from "../components/Details";
import AdultsSelect from "../components/form-inputs/AdultsSelect";
import ChildrenSelect from "../components/form-inputs/ChildrenSelect";

const Home = () => {
  const classes = useStyles();
  const { destinations, handleSubmit, adults, dispatch, trips, currentTrip } =
    useContext(globalContext);

  return (
    <>
      {destinations && (
        <>
          <form
            onSubmit={handleSubmit}
            className="mt-6 flex flex-col md:flex-row md:flex-wrap mx-auto justify-center md:space-x-2"
          >
            <DestinationsSelect />
            <DurationsSelect />
            <TransportsSelect />
            <AdultsSelect />
            <ChildrenSelect />
            <DatesSelect />
            <FormControl className={classes.formControl}>
              <Button
                size="large"
                color="primary"
                type="submit"
                variant="contained"
                style={{ minHeight: "56px" }}
              >
                Find Rejse
              </Button>
            </FormControl>
          </form>

          {currentTrip && <Details />}

          {trips?.map((trip) => (
            <Trip key={trip.accomodation_code} trip={trip} />
          ))}

          {trips === undefined && (
            <div className="m-4 p-3 text-center shadow">
              <p className="font-bold">
                Vi kunne desværre ikke finde din rejse
              </p>
              <p className="italic">Tjek om din søgning er korrekt</p>
              <p className="">
                Eller kontakt os på <a href="tel:70100010">70 10 00 10</a>
              </p>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default Home;
