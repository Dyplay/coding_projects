// Example from https://beta.reactjs.org/learn

import styles from './csgoapi.module.css'
// @ts-ignore
import {document} from 'micromark/lib/constructs';

function MyCsgoapi() {
  const apiKey = 'B2C5A30953672AB83AB15A62771CA4DA';
  const itemMarketName = 'Desert%20Eagle%20%7C%20Blaze%20(Souvenir)'; // Replace with the item name you want to search for

// Create a function to fetch CS:GO skin data
  async function fetchCSGOSkinData() {
    try {
      // Construct the URL for the API request
      const apiUrl = `https://api.steampowered.com/ISteamMarket/GetAssetPrices/v1/?appid=730&key=${apiKey}&currency=1&format=json`;

      // Make the API request
      const response = await fetch(apiUrl);
      const data = await response.json();

      // Find the item you're looking for
      const item = data.assets.find(asset => asset.market_hash_name === itemMarketName);

      if (item) {
        // Extract relevant information
        const itemName = item.name;
        const lowestPrice = item.lowest_price;
        const medianPrice = item.median_price;
        const imageURL = `https://steamcommunity.com/economy/image/${item.icon_url}`;

        // Print the results
        console.log(`Item Name: ${itemName}`);
        console.log(`Lowest Price: ${lowestPrice}`);
        console.log(`Median Price: ${medianPrice}`);
        console.log(`Image URL: ${imageURL}`);
        document.getElementById('skin-image').image.src = `${imageURL}`
        document.getElementById('skin-image').image.alt = `${itemName}`
        document.getElementById('ItemName').innerText.text = `${itemName}`
      } else {
        console.log(`Item not found: ${itemMarketName}`);

      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  return (
    <div>
      <img alt={'skin image'} id={'skin-image'} src={``} />
      <h3 id={'ItemName'}></h3>
    </div>
  )
}

export default function MyApp() {
  return <MyCsgoapi />
}
