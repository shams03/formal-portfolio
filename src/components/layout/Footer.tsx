
import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border">
      <div className="container-section py-8 md:py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div>
            <h3 className="font-bold text-xl text-primary mb-1">Portfolio</h3>
            <p className="text-muted-foreground">
              Building beautiful web experiences
            </p>
          </div>

          <div className="mt-6 md:mt-0">
            <p className="text-muted-foreground">
              © {currentYear} Shams Zaman. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
