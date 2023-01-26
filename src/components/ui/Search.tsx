import { useState } from "react";
import axios from "axios";
import logo from "../../assests/images/logo.png";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Flex,
} from "@chakra-ui/react";

function Search() {
  const URL = import.meta.env.VITE_API_URL;
  const API_KEY = import.meta.env.VITE_API_KEY;
  const API_HOST = import.meta.env.VITE_API_HOST;

  const [getCountry, setCountry] = useState("");
  const [getCountryStats, setCountryStats] = useState<{ [key: string]: any }>([]);
  const [isFetch, setIsFetch] = useState(false);


  const options = {
    params: { country: getCountry },
    headers: {
      "X-RapidAPI-Key": API_KEY,
      "X-RapidAPI-Host": API_HOST,
    },
  };

  const getCountryStatistics = async () => {
    try {

      const res = await axios.get(URL, options);
      if (res.status === 200) {
        res.data.response[0] === undefined ? window.alert("Country not found") : setCountryStats(res.data.response[0]);
        setIsFetch(true);
      }
      else {
        window.alert("Something went wrong");
      }
    }
    catch (err) {
      window.alert(`Something went wrong: ${err}`);
    }
  };

  const { cases, deaths, tests, population } = getCountryStats;

  return (
    <>
      {/* Cards */}
      <div className="flexColCenter gap-3 h-80 bg-gradient-to-b from-[color:var(--card-linear-1)] to-[color:var(--card-linear-2)] m-5 rounded shadow-2xl">
        <img src={logo} alt="Covid" className="w-20 animate-rotate" />
        <h1 className="text-white text-2xl">Statistics</h1>
        <span className="text-gray-300">Search Country Covid Stats</span>
        <input
          type="search"
          name="search"
          id="search-country"
          value={getCountry}
          onChange={(e) => setCountry(e.target.value)}
          className="bg-[color:var(--light-box)] rounded p-2 text-white placeholder:text-gray-300 outline-none"
          placeholder="Search Country"
        />
        <button
          type="submit"
          className="bg-[color:var(--darker-box)] px-3 py-1 my-1 text-white rounded"
          onClick={getCountryStatistics}
        >
          Search
        </button>
      </div>
      {/* Cases Cards */}
      {isFetch ? (

        <div className="m-5">
          <span>Population: {population}</span>
          <Accordion allowToggle className="grid gap-5">
            <AccordionItem className="grid gap-5 bg-[color:var(--darker-box)] text-white border-none" >
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    Cases
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} className="flex flex-col" >
                <Flex flexDirection="column" >
                  <span>Active Cases: {cases.active}</span>
                  <span>Critical Cases: {cases.critical}</span>
                  <span>Recovered Cases: {cases.recovered}</span>
                </Flex>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem className="grid gap-5 bg-[color:var(--darker-box)] text-white border-none" >
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    Tests
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Flex flexDirection="column" >
                  <span>New: {tests?.new ? tests.new : "N/A"}</span>
                  <span>Total: {tests.total}</span>
                </Flex>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem className="grid gap-5 bg-[color:var(--darker-box)] text-white border-none" >
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    Deaths
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Flex flexDirection="column" >
                  <span>New: {deaths?.new ? deaths.new : "N/A"}</span>
                  <span>Total: {deaths.total}</span>
                </Flex>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </div>
      ) : null
      }

    </>
  )
}

export default Search;
