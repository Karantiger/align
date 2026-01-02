import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import HabitGuide from "@/pages/HabitGuide";
import ProductivityTips from "@/pages/ProductivityTips";
import Templates from "@/pages/Templates";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import Terms from "@/pages/Terms";
import NotFound from "@/pages/NotFound";

createRoot(document.getElementById("root")!).render(
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<App />} />
			<Route path="/habit-building-guide" element={<HabitGuide />} />
			<Route path="/daily-productivity-tips" element={<ProductivityTips />} />
			<Route path="/routine-templates" element={<Templates />} />
			<Route path="/privacy-policy" element={<PrivacyPolicy />} />
			<Route path="/terms" element={<Terms />} />
			<Route path="*" element={<NotFound />} />
		</Routes>
	</BrowserRouter>
);
