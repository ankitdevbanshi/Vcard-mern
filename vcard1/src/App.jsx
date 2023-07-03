import styles from "./style";

import Hero from "./components/Hero";

import Resume from "./components/Resume";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import Portfolio from "./components/Portfolio";
import ContactPage from "./pages/ContactPage";
import Project from "./components/Project";
import NotificationContext from "./store/notification-context";

let router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <Hero /> },
      { path: "/home", element: <Hero /> },
      { path: "/resume", element: <Resume /> },
      { path: "/portfolio", element: <Portfolio /> },
      { path: "/portfolio/:projectname", element: <Project /> },
      { path: "/contactus", element: <ContactPage /> },
    ],
  },
]);

function App() {
  return (
    <NotificationContext.Provider
      value={{
        status: "",
        message: "",
        time: 0,
      }}
    >
      <RouterProvider router={router}></RouterProvider>;
    </NotificationContext.Provider>
  );
}

// function App() {
//   return (
//     <div className="bg-primary w-full overflow-hidden">
//       <div className={`${styles.paddingX} ${styles.flexCenter}`}>
//         <div className={`${styles.boxWidth}`}>
//           <Navbar />
//         </div>
//       </div>

//       <div className={`bg-primary ${styles.flexStart}`}>
//         <div className={`${styles.boxWidth}`}>
//           <Hero />
//         </div>
//       </div>

//       <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
//         <div className={`${styles.boxWidth}`}>
//           <Stats />
//           {/* <Business />
//         <Billing />
//         <CardDeal /> */}
//           <Testimonials />
//           <Clients />
//           {/* <CTA /> */}
//           <Footer />
//         </div>
//       </div>
//     </div>
//   );
// }
export default App;
