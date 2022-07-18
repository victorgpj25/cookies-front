import { Routes, Route } from "react-router-dom";

import Cookie from "./Cookie.js"
import GetCookie from "./GetCookie.js"
import DeleteCookie from "./DeleteCookie.js"

export default function App () {

    return (
        <Routes>
            <Route path="/" element={<GetCookie />} />
            <Route path="/checkcookie" element={<Cookie />} />
            <Route path="/deletecookie" element={<DeleteCookie />} />
        </Routes>
    )
}