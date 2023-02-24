import { RecommendedCardGroup } from "../components/molecules/recommended-card-group";
import { CategoryHomeBtnGroup } from "../components/molecules/category-home-btn-group";
import { BestSellerCardsGroup } from "../components/molecules/best-seller-cards-group";

export const sections = [
    { name: "Categories", content: <CategoryHomeBtnGroup /> },
    { name: "Recommended For You", content: <RecommendedCardGroup /> },
    { name: "Best Seller", content: <BestSellerCardsGroup /> },
]