import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import userContext from "../../utils/UserContext";
import { mockProps } from "../mocks/mockrestaurant";
import "@testing-library/jest-dom";
import { withVegLabel } from "../RestaurantCard";

const DummyInfo = {
  cloudinaryImageId: "test-img",
  name: "Veg Delight",
  cuisines: ["Indian", "Vegan"],
  avgRating: 4.5,
  sla: { lastMileTravel: 2.5 },
};

test("RestaurantCard renders props and user name correctly", () => {
  render(
    <userContext.Provider value={{ loggedInUser: "Likan" }}>
      <RestaurantCard {...mockProps} />
    </userContext.Provider>
  );

  // Check name
  expect(screen.getByText("Test Restaurant")).toBeInTheDocument();

  // Check cuisines
  expect(screen.getByText("Italian, Mexican")).toBeInTheDocument();

  // Check avg rating
  expect(screen.getByText(/4.3 Star/i)).toBeInTheDocument();

  // Check distance
  expect(screen.getByText(/3.7 km away/i)).toBeInTheDocument();

  // Check user name from context
  expect(screen.getByText("Likan")).toBeInTheDocument();
});

test('renders the PureVeg label and restaurant card', () => {

  const VegRestaurantCard = withVegLabel(RestaurantCard);

  render(<VegRestaurantCard resData={{ info: DummyInfo }} />); // props?.resData?.info is the DummyInfo object (simulated restaurant data)

  // Check label
  expect(screen.getByText(/PureVeg/i)).toBeInTheDocument();

  // Check name
  expect(screen.getByText(/Veg Delight/i)).toBeInTheDocument();

  // Check rating
  expect(screen.getByText(/⭐ 4.5 Star/i)).toBeInTheDocument();
});


// HOC -

// function withVegLabel(RestaurantCard) {
//   return (props) => {
//     return (
//       <div>
//         <label className="absolute bg-green-800 text-white m-2 p-2 rounded-lg">PureVeg💚</label>
//         <RestaurantCard {...props?.resData?.info} />
//       </div>
//     )
//   }
// }