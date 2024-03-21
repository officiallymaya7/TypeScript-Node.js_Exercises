// Define the city_country function
function city_country(city: string, country: string): string {
    return `${city}, ${country}`;
  }
  
  // Call the function with at least three city-country pairs
  let location1 = city_country('Lahore', 'Pakistan');
  let location2 = city_country('Tokyo', 'Japan');
  let location3 = city_country('Sydney', 'Australia');
  
  // Print the values returned by the function
  console.log(location1);
  console.log(location2);
  console.log(location3);
  