import React, { useState } from "react";
import Header from "./Components/Header";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import Cards from "./Components/Cards";

const App = () => {
  const [cartData, setCartData] = useState([]);
  const [btnText, setBtnText] = useState([]);

  for (let i = 1; i <= 8; i++) {
    let obj = { id: i, txt: "Add to Cart" };
    btnText.push(obj);
  }
  let cardDetails = [
    {
      id: 1,
      TopSale: true,
      cardImg:
        "https://m.media-amazon.com/images/I/61+r3+JstZL._AC_UF1000,1000_QL80_.jpg",

      productName: "laptop",

      mrp: 120.5,

      btnTxt: btnText[0].txt,
    },
    {
      id: 2,
      TopSale: false,
      cardImg:
        "https://www.stuff.tv/wp-content/uploads/sites/2/2022/11/Stuff-Best-Smartphone-Lead.png",
      productName: "Smartphone",

      mrp: 70.62,

      btnTxt: btnText[1].txt,
    },
    {
      id: 3,
      TopSale: true,
      cardImg:
        "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/og-airpods-max-202011?wid=1200&hei=630&fmt=jpeg&qlt=95&.v=1603996970000",

      productName: "Headphone",

      mrp: 184.75,

      btnTxt: btnText[2].txt,
    },
    {
      id: 4,
      TopSale: false,
      cardImg:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKPlKN-BKqcJL22Aw-CdG6Or15aVbWEPrVbw&usqp=CAU",
      productName: "Coffee Maker",

      mrp: 45.25,

      btnTxt: btnText[3].txt,
    },
    {
      id: 5,
      TopSale: true,
      cardImg:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8fDA%3D",
      productName: "Running Shoes",

      mrp: 67.12,

      btnTxt: btnText[4].txt,
    },
    {
      id: 6,
      TopSale: true,
      cardImg:
        "https://cdn.thewirecutter.com/wp-content/media/2022/09/backpacks-2048px-9904.jpg",
      productName: "Backpack",

      mrp: 50.25,

      btnTxt: btnText[5].txt,
    },
    {
      id: 7,
      TopSale: true,
      cardImg:
        "https://wakefitdev.gumlet.io/img/study_lamps/new/Euclid/1.jpg?w=732",
      productName: "Desk Lamp",
      mrp: 32.55,

      btnTxt: btnText[6].txt,
    },
    {
      id: 8,
      TopSale: false,
      cardImg:
        "https://i.rtings.com/assets/products/ykNvre4M/steelseries-prime-wireless/design-medium.jpg",

      productName: "wireless Mouse",

      mrp: 70.81,

      btnTxt: btnText[7].txt,
    },
  ];
  let press = (product) => {
    let foundButton = btnText.find((ele) => product.id === ele.id);

    if (foundButton.txt === "Add to Cart") {
      setCartData([...cartData, product]);

      setBtnText((prevBtnText) => {
        return prevBtnText.map((btn) => {
          if (btn.id === product.id) {
            // console.log({ ...btn, txt: "Remove from Cart" });
            return { ...btn, txt: "Remove from Cart" };
          } else {
            return btn;
          }
        });
      });
    } else if (foundButton.txt === "Remove from Cart") {
      setCartData(cartData.filter((ele) => ele.id != product.id));
      setBtnText((prevBtnText) => {
        return prevBtnText.map((btn) => {
          if (btn.id === product.id) {
            return { ...btn, txt: "Add to Cart" };
          } else {
            return btn;
          }
        });
      });
    }
  };

  return (
    <div>
      <Nav navDetails={cartData} />
      <Header />
      <section className="content-section py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {cardDetails.map((card, index) => {
              return <Cards key={index++} props={card} press={press} />;
            })}
          </div>
        </div>
      </section>
      {/* {status? <ConditionalRendering cartCount={cartCount} SetCartCount={SetCartCount} />:''} */}
      <Footer />
    </div>
  );
};

export default App;
