import React, { useState } from "react";
import Meta from "../componet/Meta";
import BrechCrum from "../componet/BrechCrum";
import { Link } from "react-router-dom";
import ReactStars from "react-stars";
import ProductCart from "../componet/ProductCart";
import ReactPaginate from "react-paginate";
const items = [
  {
    image: "images/images/watch.jpg",
    title: "Havels",
    content: "Kids headphones bulk 10 pack multi colored for students",
    start: 4,
    pricce: 100,
  },
  {
    image: "images/images/watch.jpg",
    title: "Havels",
    content: "Kids headphones bulk 10 pack multi colored for students",
    start: 4,
    pricce: 100,
  },
  {
    image: "images/images/watch.jpg",
    title: "Havels",
    content: "Kids headphones bulk 10 pack multi colored for students",
    start: 4,
    pricce: 200,
  },
  {
    image: "images/images/speaker.jpg",
    title: "Havels",
    content: "Kids headphones bulk 10 pack multi colored for students",
    start: 4,
    pricce: 200,
  },
  {
    image: "images/images/tab.jpg",
    title: "Havels",
    content: "Kids headphones bulk 10 pack multi colored for students",
    start: 4,
    pricce: 200,
  },
  {
    image: "images/images/watch.jpg",
    title: "Havels",
    content: "Kids headphones bulk 10 pack multi colored for students",
    start: 4,
    pricce: 300,
  },
  {
    image: "images/images/watch.jpg",
    title: "Havels",
    content: "Kids headphones bulk 10 pack multi colored for students",
    start: 4,
    pricce: 300,
  },
  {
    image: "images/images/watch.jpg",
    title: "Havels",
    content: "Kids headphones bulk 10 pack multi colored for students",
    start: 4,
    pricce: 100,
  },
  {
    image: "images/images/watch.jpg",
    title: "Havels",
    content: "Kids headphones bulk 10 pack multi colored for students",
    start: 4,
    pricce: 100,
  },
  {
    image: "images/images/watch.jpg",
    title: "Havels",
    content: "Kids headphones bulk 10 pack multi colored for students",
    start: 4,
    pricce: 100,
  },
  {
    image: "images/images/watch.jpg",
    title: "Havels",
    content: "Kids headphones bulk 10 pack multi colored for students",
    start: 4,
    pricce: 100,
  },
  {
    image: "images/images/watch.jpg",
    title: "Havels",
    content: "Kids headphones bulk 10 pack multi colored for students",
    start: 4,
    pricce: 100,
  },
  {
    image: "images/images/watch.jpg",
    title: "Havels",
    content: "Kids headphones bulk 10 pack multi colored for students",
    start: 4,
    pricce: 100,
  },
  {
    image: "images/images/watch.jpg",
    title: "Havels",
    content: "Kids headphones bulk 10 pack multi colored for students",
    start: 4,
    pricce: 100,
  },
  {
    image: "images/images/watch.jpg",
    title: "Havels",
    content: "Kids headphones bulk 10 pack multi colored for students",
    start: 4,
    pricce: 100,
  },
  {
    image: "images/images/watch.jpg",
    title: "Havels",
    content: "Kids headphones bulk 10 pack multi colored for students",
    start: 4,
    pricce: 100,
  },
  {
    image: "images/images/watch.jpg",
    title: "Havels",
    content: "Kids headphones bulk 10 pack multi colored for students",
    start: 4,
    pricce: 100,
  },
  {
    image: "images/images/watch.jpg",
    title: "Havels",
    content: "Kids headphones bulk 10 pack multi colored for students",
    start: 4,
    pricce: 100,
  },
];

function Items({ currentItems ,colswap}) {
  return (
    <>
      {currentItems &&
        currentItems.map((item) => (
          <div className={`col-${colswap}`}>
            <ProductCart
              image={item.image}
              title={item.title}
              content={item.content}
              start={item.start}
              pricce={item.pricce}
            />
          </div>
        ))}
    </>
  );
}

function PaginatedItems({ itemsPerPage,colswap }) {
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <Items currentItems={currentItems} colswap={colswap} />
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
    </>
  );
}

const OurStore = () => {
  const [colswap, setColSwap] = useState(4);

  return (
    <>
      <Meta title="outstore1" />
      <BrechCrum name="outstore" />

      <div className="outstore-content">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="bg-white p-3 mt-4">
                <h4>Shop By Categories</h4>
                <div>
                  <Link className="text-dark d-block pb-2 ps-2">Watch</Link>
                  <Link className="text-dark d-block pb-2 ps-2">TV</Link>
                  <Link className="text-dark d-block pb-2 ps-2">Camera</Link>
                  <Link className="text-dark d-block pb-2 ps-2">Laptop</Link>
                </div>
              </div>
              <div className="bg-white p-3 mt-4">
                <h4>Filter By</h4>
                <div>
                  <h5 className="mb-3">Availablity</h5>
                  <div className="form-check">
                    <input
                      className="bg-cam form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label
                      className="form-check-label color-xam"
                      for="flexCheckDefault"
                    >
                      Default checkbox
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="bg-cam form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label
                      className="form-check-label color-xam"
                      for="flexCheckDefault"
                    >
                      Default checkbox
                    </label>
                  </div>
                </div>
                <div className="mt-3">
                  <h5>Price</h5>
                  <div className="row">
                    <div className="col-6">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="From"
                        aria-label="From"
                        aria-describedby="basic-addon1"
                      />
                    </div>
                    <div className="col-6">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="To"
                        aria-label="To"
                        aria-describedby="basic-addon1"
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-3">
                  <h5>Color</h5>
                  <div className="d-flex gap-10">
                    <p className="wh-50"></p>
                    <p className="wh-50"></p>
                    <p className="wh-50"></p>
                    <p className="wh-50"></p>
                    <p className="wh-50"></p>
                  </div>
                </div>
                <div className="mt-3">
                  <h5 className="mb-3">Size</h5>
                  <div className="form-check">
                    <input
                      className="bg-cam form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label
                      className="form-check-label color-xam"
                      for="flexCheckDefault"
                    >
                      S [2]
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="bg-cam form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label
                      className="form-check-label color-xam"
                      for="flexCheckDefault"
                    >
                      M[2]
                    </label>
                  </div>
                </div>
              </div>
              <div className="bg-white p-3 mt-4">
                <h4>Product Tags</h4>
                <div className="mt-3 d-flex gap-10 flex-wrap">
                  <p className="p-2 bg-xam">HeadPhone</p>
                  <p className="p-2 bg-xam">Laptop</p>
                  <p className="p-2 bg-xam">Mobile</p>
                  <p className="p-2 bg-xam">Wire</p>
                </div>
              </div>
              <div className="bg-white p-3 mt-4">
                <h4>Random Product</h4>
                <div className="mt-3 border-bottom">
                  <div className="product-random d-flex  ">
                    <div className="w-50">
                      <img className="w-100" src="images/images/watch.jpg" />
                    </div>
                    <div className="w-50">
                      <h5 className="fs-8">
                        Kids headphones bulk 10 pack multi colored for students
                      </h5>
                      <ReactStars
                        count={5}
                        size={20}
                        activeColor="#ffd700"
                        value={4}
                        edit={false}
                      />

                      <p className="fw-bold">$300</p>
                    </div>
                  </div>
                </div>
                <div className="mt-3 border-bottom">
                  <div className="product-random d-flex  ">
                    <div className="w-50">
                      <img className="w-100" src="images/images/watch.jpg" />
                    </div>
                    <div className="w-50">
                      <h5 className="fs-8">
                        Kids headphones bulk 10 pack multi colored for students
                      </h5>
                      <ReactStars
                        count={5}
                        size={20}
                        activeColor="#ffd700"
                        value={4}
                        edit={false}
                      />

                      <p className="fw-bold">$300</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-9 mt-3">
              <div className="container-xxl">
                <div className="row">
                  <div className="col-12">
                    <div className="sort-outstore d-flex justify-content-between bg-white p-2 align-items-center">
                      <div className="sort-left d-flex justify-content-between gap-10 align-items-center">
                        <span className="px-2 w-25 h-20">sort: </span>
                        <select
                          class="form-select form-select-lg m-0 ms-3"
                          aria-label=".form-select-lg example"
                        >
                          <option selected>chon</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                      </div>
                      <div className="sort-right d-flex">
                        <span> 21 producdt :</span>
                        <div>
                          <img
                            onClick={() => setColSwap(12)}
                            className="w-25i px-2"
                            src="images/images/gr.svg"
                          />
                          <img
                            onClick={() => setColSwap(6)}
                            className="w-25i px-2"
                            src="images/images/gr2.svg"
                          />
                          <img
                            onClick={() => setColSwap(4)}
                            className="w-25i px-2"
                            src="images/images/gr3.svg"
                          />
                          <img
                            onClick={() => setColSwap(3)}
                            className="w-25i px-2"
                            src="images/images/gr4.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  {/* <div className={`col-${colswap}`}>
                    <ProductCart
                      
                        image="images/images/watch.jpg" 
                        title= "Havels"
                        content=
                          "Kids headphones bulk 10 pack multi colored for students"
                        start= {4}
                        pricce= {100}
                      
                    />
                  </div> */}
                  <PaginatedItems itemsPerPage={8} colswap={colswap} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurStore;
