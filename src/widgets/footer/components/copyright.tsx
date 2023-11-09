import React from "react";

export default function Copyright() {
  return (
    <div>
      <hr className="bg-footer-divider h-px" />
      <div className="flex flex-1 justify-center mt-8 mb-9">
        <span className="text-center text-default text-sm">
          © {new Date().getFullYear()} Copyright by Aulancer. All rights
          reserved.
        </span>
      </div>
    </div>
  );
}
