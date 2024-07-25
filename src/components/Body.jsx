import { createBrowserRouter } from "react-router-dom";
import { Browse } from "./Browse";
import {Login} from "./Login";
import { RouterProvider } from "react-router-dom";


export const Body = () =>{
    const appRouter = createBrowserRouter([
        {
            path: "/",
            element:<Login/>
        },
        {
            path: "/",
            element:<Browse/>
        },
       ]);
    return(
        <div>
            <RouterProvider router={appRouter} />
       
        
        </div>
    )
}