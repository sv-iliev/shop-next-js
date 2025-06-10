"use client";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "@/app/pages/HomePage";
import LoginPage from "@/app/pages/LoginPage";
import ProductsPage from "@/app/pages/ProductsPage";
import Cart from "@/app/pages/Cart";
import Profile from "@/app/pages/Profile";
import NotFoundPage from "@/app/pages/NotFoundPage";
import { usePathname } from "next/navigation";
import {
  LOGIN_ROUTE,
  PRODUCTS_ROUTE,
  PROFILE_ROUTE,
  HOME_ROUTE,
} from "@/app/helpers/constants";
import styles from "@/app/styles/routes.module.scss";
import Link from "next/link";

const AppRouter: React.FC = () => {
  const route: string = usePathname();
  const isNotLoginRoute: boolean = route !== LOGIN_ROUTE;
  const isLogedIn: boolean = true;

  return (
    <Router>
      {isNotLoginRoute && (
        <div className={styles["nav-bar"]}>
          <Link href={HOME_ROUTE}>Home</Link>
          <Link href={PRODUCTS_ROUTE}>Products</Link>
          {isLogedIn ? (
            <Link href={PROFILE_ROUTE}>Profile</Link>
          ) : (
            <Link href={LOGIN_ROUTE}>Login</Link>
          )}
        </div>
      )}

      <div
        className={
          isNotLoginRoute ? styles["not-full-height"] : styles["full-height"]
        }
      >
        <Routes>
          <Route path={HOME_ROUTE} element={<HomePage />} />
          <Route path={LOGIN_ROUTE} element={<LoginPage />} />
          <Route path={PRODUCTS_ROUTE} element={<ProductsPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path={PROFILE_ROUTE} element={<Profile />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default AppRouter;
