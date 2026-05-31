import React from "react";
import { Link } from "react-router-dom";
import { Card } from "../ui/card";

export const Itinerary = ({ trip }) => {
    const itinerary = trip?.tripData?.travel_plan?.itinerary;

    // ✅ Safety check — handle both array and object
    const itineraryArray = Array.isArray(itinerary)
        ? itinerary
        : Object.values(itinerary || {});

    return (
        <Card className="border-y-2 p-5">
            <div className="mt-10">
                <h1 className="font-bold text-lg md:text-2xl mt-5 text-blue-800 dark:text-customGreen">
                    🏖️ Trip Itinerary 🏖️
                </h1>
                <div className="text-justify">
                    {itineraryArray.map((day, dayIndex) => (
                        <div key={dayIndex} className="text-sm lg:text-base">
                            <h2 className="font-semibold text-md m-4 text-blue-800 dark:text-customGreen">
                                🗓️ Day {day.Day || dayIndex + 1}
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 md:gap-6 xl:gap-5">
                                {(day.Activities || []).map((activity, activityIndex) => (
                                    <div
                                        key={activityIndex}
                                        className="mt-2 text-sm lg:text-base hover:scale-105 transition-all mb-2 border-[1px] md:border-2 dark:border-customGreen border-blue-700 rounded-lg px-2 cursor-pointer"
                                    >
                                        <Link
                                            to={
                                                "https://www.google.com/maps/search/?api=1&query=" +
                                                activity.PlaceName +
                                                trip?.userSelection?.location?.label
                                            }
                                            target="_blank"
                                        >
                                            <h3 className="font-semibold mt-1">
                                                📍 {activity.PlaceName}
                                            </h3>
                                            <p className="my-1">{activity.PlaceDetails}</p>
                                            <p className="my-1">
                                                <span className="font-bold">Best Time: </span>
                                                {activity.BestTimeToVisit}
                                            </p>
                                            <p className="my-1">
                                                <span className="font-bold">Ticket: </span>
                                                {activity.TicketPricing}
                                            </p>
                                            <p className="my-1">
                                                <span className="font-bold">Travel Time: </span>
                                                {activity.TravelTime}
                                            </p>
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Card>
    );
};