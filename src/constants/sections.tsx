import { RecommendedCardGroup } from "../components/atoms/recommended-card";
import { CategoryHomeBtnGroup } from "../components/molecules/category-home-btn-group";

export const sections = [
    { name: "Categories", className: "categories", content: <CategoryHomeBtnGroup />, id: "sec1" },
    { name: "Recommended For You", className: "recommended", content: <RecommendedCardGroup />, id: "sec2" },
]