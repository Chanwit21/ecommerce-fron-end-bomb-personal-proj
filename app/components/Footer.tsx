"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
// import { useAuthContext } from "../context/AuthContext";

// Icons
import visaIcon from "../pic/icons/294654_visa_icon.svg";
import masterCardIcon from "../pic/icons/380809_card_master_mastercard_icon.svg";
import facebookIcon from "../pic/icons/facebook.png";
import twitterIcon from "../pic/icons/twitter.png";
import pinterestIcon from "../pic/icons/pinterest.png";

function Footer() {
  // const {
  //   state: { user },
  // } = useAuthContext();
  // const role = user?.role || "GUEST";

  return (
    <footer className="bg-dark text-light py-4">
      <div className="container w-3/4">
        <hr className="border-white opacity-100" />

        <div className="row mb-3 px-3">
          {/* About Section */}
          <div className="col-md-5">
            <h4 className="mb-3">About the Shop</h4>
            <p className="text-sm leading-relaxed">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. It has been the industry's standard dummy text since the
              1500s, when an unknown printer scrambled type to make a specimen
              book.
            </p>
          </div>

          <div className="col-md-1"></div>

          {/* Help Section */}
          {/* {role !== "ADMIN" && (
            <div className="col-md-3">
              <h4 className="mb-3">Help</h4>
              <ul className="list-unstyled">
                <li>
                  <Link
                    href="/termCondition"
                    className="text-white hover:underline"
                  >
                    Terms of Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact_us"
                    className="text-white hover:underline"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          )} */}

          {/* Payment Section */}
          <div className="col-md-3">
            <h4 className="mb-3">We Accept</h4>
            <div className="flex items-center gap-3">
              <Image
                src={visaIcon}
                alt="Visa"
                width={50}
                height={30}
                className="bg-white rounded p-2"
              />
              <Image
                src={masterCardIcon}
                alt="MasterCard"
                width={50}
                height={30}
                className="bg-white rounded p-2"
              />
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="d-flex justify-content-between align-items-center mt-4">
          <div>&copy; MAKE ME GLOW Cosmetics</div>
          <div>
            <p className="mb-1">Follow Us</p>
            <div className="flex items-center gap-3">
              <Image
                src={facebookIcon}
                alt="Facebook"
                width={40}
                height={40}
                className="rounded"
              />
              <Image
                src={twitterIcon}
                alt="Twitter"
                width={40}
                height={40}
                className="rounded"
              />
              <Image
                src={pinterestIcon}
                alt="Pinterest"
                width={40}
                height={40}
                className="rounded"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
