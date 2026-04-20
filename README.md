📅 April 20: The Foundation
Goal: Get a rough version of the homepage visible.

Partner A (You): * Setup the BrowserRouter in main.jsx.

Create src/components/Navbar.jsx and src/components/Navbar.css.

Build a layout wrapper so the Navbar stays at the top of every page.

Partner B: * Create src/components/CategoryBar.jsx.

Find icons (or use text for now) for: Amazing Pools, Cabins, Tiny Houses, Surfing.

Make the bar scrollable horizontally (overflow-x: auto).

Partner C: * Create src/data/listings.json. (Include: id, title, price, rating, image).

Create src/components/ListingCard.jsx. Style the image to have border-radius: 12px.

📅 April 21: Data & Routing
Goal: Clickable cards and a grid layout.

Partner A: * Set up Routes: / for Home and /listing/:id for the details.

Create a placeholder pages/ListingDetail.jsx.

Partner B: * Create src/components/ListingGrid.jsx.

Use CSS Grid: display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px;.

Partner C: * "Map" the data: In ListingGrid, use .map() to turn each item in your JSON into a <ListingCard />.

📅 April 22: The Detail Page
Goal: Show specific information when a card is clicked.

Partner A: * Use useParams() from React Router to grab the ID from the URL.

Create the Image Gallery (one big image on the left, four small on the right).

Partner B: * Build the "Reservation Widget" (the box on the right that shows price, dates, and the "Reserve" button).

Make it position: sticky; top: 100px;.

Partner C: * Create the "Host Information" and "Amenities" list sections.

Add a "Star Rating" display component.

📅 April 23: Interactivity
Goal: Make it feel like a real app.

Partner A: * Add a Search Filter. When someone types in the Navbar, the Grid should update.

Partner B: * Add Category Filtering. Clicking "Cabins" should filter the JSON data to show only cabins.

Partner C: * Implement the "Favorite" heart. Use useState to toggle the heart color from white to red.

Build the site Footer.

📅 April 24 - 25: Polish & Deploy
Goal: Zero bugs and a live URL.

All Partners:

Responsiveness: Use Media Queries so it looks good on iPhones. (2 cards per row instead of 4).

Cleanup: Remove any console.log and fix CSS overlaps.

Merge: Merge all 3 branches into main.

Deploy: Connect your GitHub to Vercel for an instant live link.