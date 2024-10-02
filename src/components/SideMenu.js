import React, { useState } from "react";

const SideMenu = ({ pages, userProgress, className }) => {
  const [activePage, setActivePage] = useState(null);

  const togglePage = (pageId) => {
    setActivePage(activePage === pageId ? null : pageId);
  }
}
