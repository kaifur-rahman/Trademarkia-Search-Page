# Trademark Search Application

<p>This project is a replication of the <b>Trademarkia search page</b> built with <b>React.js</b> and powered by Vite. It allows users to search for trademarks using various filters like owner, law firm, attorney, and status. It provides users with persistent search states for easy sharing, debounced search functionality to minimize API calls, and a fully responsive design that adheres to the provided Figma design. The application ensures smooth performance and user-friendly navigation with dynamic filtering and detailed search results.</p>

---

## 🌐 <b>Live Demo</b>

<p>You can check out the live version of the application deployed here:</p>

<a href="https://21brs1147-frontend.vercel.app/" target="_blank"><b>Live Demo Link</b></a>

---

## ⚙️ <b>Deployment and CORS Instructions</b>

<h3>Running Locally</h3>
<p>If you'd like to run this project locally, follow the steps mentioned in the <b>Installation and Setup</b> section below. However, note that if you run the project locally, you may encounter <b>CORS (Cross-Origin Resource Sharing)</b> issues due to API restrictions.</p>

<p><b>To resolve this issue during local development:</b></p>
<ol>
  <li>Install the <b>CORS Unblock Chrome extension</b> from <a href="https://chrome.google.com/webstore/detail/cors-unblock/" target="_blank">this link</a>.</li>
  <li>After installing, make sure to <b>toggle the extension ON</b> while working on this project locally.</li>
  <li>This will temporarily bypass the CORS restrictions in your browser for testing purposes.</li>
</ol>

<p>⚠️ <b>Note:</b> You should not need this extension when using the live demo link as the app is configured correctly in production.</p>

---

## 🛠️ <b>Features</b>

<ul>
  <li><b>Search Bar:</b> Users can search for trademarks, and the search query is debounced to prevent excessive API calls.</li>
  <li><b>Filters:</b> Dynamic filtering for Owners, Law Firms, Attorneys, and Status of the trademarks.</li>
  <li><b>Loading States:</b> While fetching data, a loader is displayed.</li>
  <li><b>Dynamic Results:</b> Trademarks are displayed dynamically using MUI's DataGrid.</li>
  <li><b>Responsive Design:</b> The layout is fully responsive and adapts to different screen sizes.</li>
  <li><b>Persistent Sharing (Bonus*):</b> Users can share or bookmark search states with filters and query parameters for easy access.</li>
  <li><b>Search Suggestions:</b> Relevant suggestions are provided when no results are found, guiding the user for better searches.</li>
</ul>

---

## 🔧 <b>Tech Stack</b>

<ul>
  <li><b>Frontend:</b> React.js, Vite, MUI (Material UI)</li>
  <li><b>State Management:</b> React Context API</li>
  <li><b>API:</b> Axios for making HTTP requests</li>
  <li><b>CSS Framework:</b> Material UI</li>
  <li><b>Routing:</b> React Router Dom for handling routes (if applicable)</li>
</ul>

---

## 🧑‍💻 <b>Installation and Setup</b>

<p>To set up and run this project locally, follow these steps:</p>

<h3>Clone the repository:</h3>
<pre>
<code>
git clone https://github.com/your-repo-name.git
</code>
</pre>

<h3>Navigate to the project directory:</h3>
<pre>
<code>
cd your-repo-name
</code>
</pre>

<h3>Install dependencies:</h3>
<pre>
<code>
npm install
</code>
</pre>

<h3>Start the development server:</h3>
<pre>
<code>
npm run dev
</code>
</pre>

<p>After running <code>npm run dev</code>, the project will be available at <a href="http://localhost:3000" target="_blank">http://localhost:3000</a>. You can now view and test the application locally.</p>

<p>Make sure to use the <b>CORS Unblock</b> extension if you run into any CORS issues as mentioned above.</p>
