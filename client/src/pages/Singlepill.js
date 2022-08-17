// Information about a singel pill and displaying it.

import React from "react";
import List from "./components/List";

const pills = [
  {
    id: 1,
    name: "Hydrochlorothiazide",
    description: "treats high blood pressure",
    dosage: "1 tablet per day",
  },
  {
    id: 2,
    name: "Donepezil",
    description: " helps with some types of dementia.",
    dosage: "20mg a day maximum",
  },
  {
    id: 3,
    name: "Pantoprazole",
    description: "this is used for heartburn, acid reflux and gastro-oesophageal reflux disease",
    dosage: "1 tablet per day"
  },
  {
    id: 4,
    name: "Citalopram",
    description: "this medicine is used to treat depression.",
    dosage: "1 tablet per day"
  },
  { 
    id: 5,
    name: "Sertraline",
    description: "this can be used to treat posttraumatic stress disorder.",
    dosage: "25 mg a day not usually more than 200 mg per day."
  },
  {
    id: 6,
    name: "Levetiracetam",
    description: "This is used to treat seizures in people 4 years of age and older.",
    dosage: "once in the morning and once at night"
  }
];

function Singlepill() {
  return <List pills={pills} />;
}

export default Singlepill;