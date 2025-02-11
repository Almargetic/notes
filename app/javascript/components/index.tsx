import React from "react"
import { createRoot } from "react-dom/client"
import App from "./App";

document.addEventListener("turbo:load", () => {
  const root = createRoot(
    document.body.appendChild(document.getElementById("react")!)
  )

  root.render(<App />)
})
