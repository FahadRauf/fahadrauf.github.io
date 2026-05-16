export const projects = [
  {
    id: "bike-rental",
    title: "Bike Rental App",
    image: "/img/fs1.png",
    kind: "dev",
    kindLabel: "Web / App",
    blurb:
      "A MERN stack application managing bike-sharing operations and real-time inventory. A RESTful API automates bookings and station updates in MongoDB, syncing live availability across the React UI for a seamless experience.",
    tags: ["MERN Stack", "React.js", "Node.js", "MongoDB"],
    links: { repo: "https://github.com/FahadRauf/bike-rental-app" },
  },
  {
    id: "tarnished-archive",
    title: "Tarnished Archive",
    image: "/img/tarnished-archive.png",
    kind: "dev",
    kindLabel: "Web / App",
    blurb:
      "A React app for browsing Elden Ring–style bosses: areas, HP (including multi-phase fights), rune rewards, strengths, and weaknesses—with filters, per-boss notes, and persistent defeat progress in the browser so you always know how many you’ve cleared.",
    tags: ["React", "React Router", "CSS", "localStorage"],
    links: { repo: "https://github.com/FahadRauf/elden-ring-boss-project" },
  },
  {
    id: "ludo",
    title: "Ludo Desktop",
    image: "/img/screenshot42.png",
    kind: "dev",
    kindLabel: "Web / App",
    blurb:
      "A cross-platform desktop Ludo built with Electron + React for local multiplayer. A custom JS game engine drives turn logic and collision detection, while Vite powers a low-latency UI and the Web Audio API adds sound.",
    tags: ["Electron", "React", "Vite", "Web Audio", "CSS3"],
    links: { repo: "https://github.com/FahadRauf/Ludo" },
  },
  {
    id: "student-habits",
    title: "Student Habits vs Performance",
    image: "/img/screenshot88.png",
    kind: "viz",
    kindLabel: "Tableau",
    blurb:
      "An interactive Tableau dashboard analyzing how lifestyle and academic habits affect student exam performance — study time, parental education, gender, job status, internet quality.",
    tags: ["Tableau", "Data Analysis", "Education"],
    links: {
      live: "https://public.tableau.com/app/profile/fahad.rauf/viz/StudentHabitsvsPerformanceDashboard/StudentHabitsVsTheirPerformance",
    },
  },
  {
    id: "imdb-top-1000",
    title: "IMDB Top 1000 Movies",
    image: "/img/screenshot45.png",
    kind: "viz",
    kindLabel: "Tableau",
    blurb:
      "A Tableau dashboard exploring trends across IMDb's top 1000 — top-grossing films, most frequent directors, and dominant genres across the decades.",
    tags: ["Tableau", "Entertainment", "Analytics"],
    links: {
      live: "https://public.tableau.com/app/profile/fahad.rauf/viz/IMDB-Top1000/IMDB1000Dashboard",
    },
  },
  {
    id: "covid-19",
    title: "COVID-19 Global Impact",
    image: "/img/screenshot60.png",
    kind: "viz",
    kindLabel: "Tableau",
    blurb:
      "A Tableau dashboard visualizing the global impact of the COVID-19 pandemic through time-series case data — confirmed cases, death rates and country-wise trends.",
    tags: ["Tableau", "Healthcare", "Time Series"],
    links: {
      live: "https://public.tableau.com/app/profile/fahad.rauf/viz/COVID-19Stats_16421523908980/Dashboard",
    },
  },
  {
    id: "customer-churn",
    title: "Customer Churn Analysis",
    image: "/img/screenshot63.png",
    kind: "viz",
    kindLabel: "Tableau",
    blurb:
      "A Tableau dashboard analyzing customer churn for a telco using demographic segmentation to surface high-risk customer groups and behavior trends.",
    tags: ["Tableau", "Business Intelligence", "Analytics"],
    links: {
      live: "https://public.tableau.com/app/profile/fahad.rauf/viz/CustomerChurnRate_16439632988060/ChurnAnalysis",
    },
  },
];
