export const SelectBudgetOptions = [
    {
        id: 1,
        title: "Low-cost",
        des: "Stay conscious of costs",
        icon: "💵",
    },
    {
        id: 2,
        title: "Moderate",
        des: "Keep cost on the average side",
        icon: "💰",
    },
    {
        id: 3,
        title: "Luxury",
        des: "Don't worry about cost",
        icon: "💎",
    },
];

export const SelectTravelerList = [
    {
        id: 1,
        title: "Just Me",
        des: "A sole traveler in exploration",
        icon: "🧍",
        people: "1 Person",
    },
    {
        id: 2,
        title: "A Couple",
        des: "Two travelers in tandem",
        icon: "🧑‍🤝‍🧑",
        people: "2 People",
    },
    {
        id: 3,
        title: "Family",
        des: "A group of fun loving adventurers",
        icon: "🏠",
        people: "3 to 5 People",
    },
    {
        id: 4,
        title: "Friends",
        des: "A bunch of thrill-seekers",
        icon: "🫂",
        people: "5 to 10 People",
    },
];

export const AI_PROMPT = `Generate a {noOfDays}-day travel plan for {people} in {location} on a {budget} budget.

Return ONLY a valid JSON object with NO markdown, NO backticks, NO explanation.

Use EXACTLY this structure:
{
  "travel_plan": {
    "destination": "{location}",
    "duration": "{noOfDays} Days",
    "budget_level": "{budget}",
    "travelers": "{people}",
    "accommodation_options": [
      {
        "HotelName": "",
        "HotelAddress": "",
        "Price": "",
        "HotelImageURL": "",
        "GeoCoordinates": { "latitude": 0, "longitude": 0 },
        "Rating": 0,
        "Description": ""
      }
    ],
    "itinerary": [
      {
        "Day": 1,
        "Activities": [
          {
            "PlaceName": "",
            "PlaceDetails": "",
            "PlaceImageURL": "",
            "GeoCoordinates": { "latitude": 0, "longitude": 0 },
            "TicketPricing": "",
            "TravelTime": "",
            "BestTimeToVisit": ""
          }
        ]
      }
    ]
  }
}

Generate exactly {noOfDays} day objects in the itinerary array, each with 3 activities.`;