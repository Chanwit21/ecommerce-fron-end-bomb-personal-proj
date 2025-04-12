"use client";
import React, { useRef, useState } from "react";
// import { useCartContext } from "../context/CartContext";
// import { useAuthContext } from "../context/AuthContext";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Logo from "../pic/icons/mmg-logo.svg";
import Image from "next/image";

function NavHeader() {
  // const {
  //   state: { countCart },
  // } = useCartContext();
  // const {
  //   state: { user },
  //   dispatch: dpAuth,
  // } = useAuthContext();
  // const role = user ? user.role : "GUEST";
  const role = "GUEST";

  const [search, setSearch] = useState("");
  const buttonSearchRef = useRef<HTMLButtonElement>(null);
  const router = useRouter();

  const handleChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleSubmitSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (buttonSearchRef.current) {
      buttonSearchRef.current.click();
    }
    router.push(`/allProduct/search/${encodeURIComponent(search)}`);
    setSearch("");
  };

  const handleClickSignOut = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    // dpAuth({ type: "LOGOUT" });
    router.push("/");
  };

  return (
    <>
      <div
        className="container-fluid text-center p-1"
      >
        FREE SHIPPING WITH ANY ORDER!
      </div>
      <nav className="navbar navbar-expand-lg navbar-light flex-grow-0 shadow-sm">
        <div className="container">
          <Link href="/" className="navbar-brand">
            <Image src={Logo} alt="Logo" width={150} height={50} />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navigation Links */}
          <div
            className="collapse navbar-collapse flex-grow-0"
            id="navbarNavDropdown"
          >
            <ul className="navbar-nav">
              {["All Product", "face", "sheek", "lips", "eyes", "body"].map(
                (item) => (
                  <li className="nav-item mx-1" key={item}>
                    <Link
                      className="nav-link active"
                      href={`/allProduct/${item.toLowerCase()}`}
                    >
                      {item.toUpperCase()}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Right Side Icons */}
          <div className="collapse navbar-collapse flex-grow-0">
            <ul className="navbar-nav">
              <li className="nav-item">
                <button type="button" className="btn px-0 position-relative">
                  <Link
                    className="nav-link active"
                    href={
                      role === "GUEST"
                        ? "/login"
                        : role === "ADMIN"
                        ? "/admin_profile"
                        : "/myProfile"
                    }
                  >
                    {/* {user?.imageUrl ? (
                      <Image
                        src={user.imageUrl}
                        alt="User"
                        className="rounded-circle"
                        width={30}
                        height={30}
                      />
                    ) : (
                      <i className="bi bi-person-circle"></i>
                    )} */}
                    {/* {user && (
                      <span className="ms-2" style={{ fontSize: "0.9vw" }}>
                        {user.firstName}
                      </span>
                    )} */}
                  </Link>
                </button>
              </li>
              <li className="nav-item">
                <button
                  type="button"
                  className="btn px-0 position-relative"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseExample"
                  ref={buttonSearchRef}
                >
                  <i className="bi bi-search"></i>
                </button>
              </li>
              {/* {role === "CUSTOMER" && (
                <>
                  <li className="nav-item">
                    <button
                      type="button"
                      className="btn px-0 position-relative"
                    >
                      <Link className="nav-link active" href="/favorite">
                        <i className="bi bi-heart"></i>
                      </Link>
                    </button>
                  </li>
                  <li className="nav-item">
                    <button
                      type="button"
                      className="btn px-0 position-relative"
                    >
                      <Link className="nav-link active" href="/shoppingCart">
                        <i className="bi bi-handbag"></i>
                        <span
                          className="position-absolute translate-middle badge rounded-pill bg-danger"
                          style={{ left: "85%", top: "30%" }}
                        >
                          {countCart}
                        </span>
                      </Link>
                    </button>
                  </li>
                </>
              )} */}
              {role !== "GUEST" && (
                <li className="nav-item">
                  <button
                    type="button"
                    className="btn px-0 position-relative"
                    onClick={handleClickSignOut}
                  >
                    <i className="bi bi-box-arrow-right"></i>
                  </button>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>

      {/* Search Bar */}
      <div className="collapse container border-0" id="collapseExample">
        <form onSubmit={handleSubmitSearch}>
          <div className="d-flex flex-row">
            <div className="input-group my-3">
              <span
                className="input-group-text border-end-0"
                style={{ backgroundColor: "#FEF3F5" }}
              >
                <i className="bi bi-search"></i>
              </span>
              <input
                type="text"
                className="form-control border-start-0 border-end-0"
                placeholder="Search"
                style={{ backgroundColor: "#FEF3F5" }}
                value={search}
                onChange={handleChangeSearch}
              />
              <span
                className="input-group-text"
                style={{ backgroundColor: "#FEF3F5", borderLeft: "none" }}
              >
                <button
                  type="button"
                  className="btn p-0"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseExample"
                >
                  <i className="bi bi-x-lg"></i>
                </button>
              </span>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default NavHeader;
