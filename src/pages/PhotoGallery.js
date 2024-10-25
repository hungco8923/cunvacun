import React from "react";
import Gallery from "../components/gallery";
import { slides } from "../dataJPG";

export default function PhotoGallery() {
  return (
    <div className="photoGallery">
      <Gallery slides={slides} />
    </div>
  );
}
