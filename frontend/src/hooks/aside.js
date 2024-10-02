import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const Aside = () => {
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState(location.pathname);

  useEffect(() => {
    switch (location.pathname) {
      case "/":
        setCurrentPage("/");
        break;
      case "/all-employees":
        setCurrentPage("/all-employees");
        break;
      case "/all-employees/add-new-employee":
        setCurrentPage("/all-employees/add-new-employee");
        break;
      case "/all-departments":
        setCurrentPage("/all-departments");
        break;
      case "/attendance":
        setCurrentPage("/attendance");
        break;
      case "/payroll":
        setCurrentPage("/payroll");
        break;
      case "/jobs":
        setCurrentPage("/jobs");
        break;
      case "/candidates":
        setCurrentPage("/candidates");
        break;
      case "/leaves":
        setCurrentPage("/leaves");
        break;
      case "/holidays":
        setCurrentPage("/holidays");
        break;
      case "/settings":
        setCurrentPage("/settings");
        break;
      case "/styleguide":
        setCurrentPage("/styleguide");
        break;
      case "/styleguide/button":
        setCurrentPage("/styleguide/button");
        break;
      case "/styleguide/input":
        setCurrentPage("/styleguide/input");
        break;
      case "/styleguide/checkbox":
        setCurrentPage("/styleguide/checkbox");
        break;
      case "/styleguide/modal":
        setCurrentPage("/styleguide/modal");
        break;
      case "/styleguide/table":
        setCurrentPage("/styleguide/table");
        break;
      case "/styleguide/tabs":
        setCurrentPage("/styleguide/tabs");
        break;
      case "/styleguide/tags":
        setCurrentPage("/styleguide/tags");
        break;
      case "/styleguide/icons":
        setCurrentPage("/styleguide/icons");
        break;
      default:
        break;
    }
  }, [location.pathname]);

  return { currentPage };
};
