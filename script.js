

let customerName = "";

let customerMobile = "";

let currentCart = {};

let activeCategoryName = "";

let currentMode = "price";

let orderHistory = [];




const productData = {


    "વિમલ ": [

        {
            id: "vimal_5",
            name: "5 વાળી વિમલ પેકેટ",
            price: "₹123",
            numericPrice: 123
        },

        {
            id: "vimal_bachki",
            name: "વિમલ બચકી [52 પેકેટ]",
            price: "₹6350",
            numericPrice: 6350
        }

    ],



    "બાગબાન": [

        {
            id: "bagban_138",
            name: "બાગબાન ૧૩૮ ટીન વર્ક ",
            price: "₹350",
            numericPrice: 350
        },

        {
            id: "bagban_138_box",
            name: "બાગબાન ૧૩૮ ટીન વર્ક બોક્સ",
            price: "₹3440",
            numericPrice: 3440
        },

        {
            id: "bagban_138_without_tin",
            name: "બાગબાન ૧૩૮ વિધાઉટ ટીન",
            price: "₹325",
            numericPrice: 325
        },

        {
            id: "bagban_138_without_tin_box",
            name: "બાગબાન ૧૩૮ વિધાઉટ ટીન બોક્સ",
            price: "₹3190",
            numericPrice: 3190
        },

        {
            id: "bagban_138_mini_padi_box_5",
            name: "બાગબાન ૧૩૮ મિનિ પડી 5 વાળી બોક્સ",
            price: "₹2465",
            numericPrice: 2465
        },

        {
            id: "bagban_138_mini_padi_5_100",
            name: "બાગબાન ૧૩૮ મિનિ પડી 5 વાળી [100 પડી]",
            price: "₹500",
            numericPrice: 500
        },

        {
            id: "bagban_138_mini_padi_box_3",
            name: "બાગબાન ૧૩૮ મિનિ પડી 3 વાળી બોક્સ",
            price: "₹1485",
            numericPrice: 1485
        },

        {
            id: "bagban_138_mini_padi_3_100",
            name: "બાગબાન ૧૩૮ મિનિ પડી 3 વાળી [100 પડી]",
            price: "₹300",
            numericPrice: 300
        },

        {
            id: "bagban_93_mini_padi",
            name: "બાગબાન 93 મિનિ પડી બોક્સ",
            price: "₹240",
            numericPrice: 240
        },

        {
            id: "bagban_128_tin",
            name: "બાગબાન 128 ટીન [ 5 ડબ્બા ]",
            price: "₹168.5",
            numericPrice: 168.5
        },

        {
            id: "bagban_128_tin_box",
            name: "બાગબાન 128 ટીન બોક્સ",
            price: "₹1675",
            numericPrice: 1675
        },

        {
            id: "bagban_93_tin_without",
            name: "બાગબાન 93 વિધાઉટ ટીન",
            price: "₹180",
            numericPrice: 180
        },

        {
            id: "bagban_93_tin_work",
            name: "બાગબાન 93 વર્ક ટીન ",
            price: "₹200",
            numericPrice: 200
        },

        {
            id: "bagban_93_tin_work_box",
            name: "બાગબાન 93 વર્ક ટીન બોક્સ",
            price: "₹1965",
            numericPrice: 1965
        },

        {
            id: "bagban_93_tin_without_box",
            name: "બાગબાન 93 ટીન વિધાઉટ બોક્સ",
            price: "₹1772",
            numericPrice: 1772
        }

    ],



    "ઈગલ તમાકુ ": [

        {
            id: "eagle_tamaku_45",
            name: "ઈગલ તમાકુ 45 GM",
            price: "₹85",
            numericPrice: 85
        },

        {
            id: "eagle_tamaku_45_box",
            name: "ઈગલ તમાકુ 45 GM બોક્સ",
            price: "₹830",
            numericPrice: 830
        },

        {
            id: "eagle_tamaku_175_box",
            name: "ઈગલ તમાકુ 175 GM બોક્સ",
            price: "₹325",
            numericPrice: 325
        },

        {
            id: "eagle_padi",
            name: "ઈગલ પડી",
            price: "₹110",
            numericPrice: 110
        }

    ],



    "સુરેશ તમાકુ ": [

        {
            id: "suresh_tamaku",
            name: "સુરેશ તમાકુ",
            price: "₹170",
            numericPrice: 170
        },

        {
            id: "suresh_tamaku_katon",
            name: "સુરેશ તમાકુ કાટૂન",
            price: "₹8255",
            numericPrice: 8255
        }

    ],

    "બુધાલાલ ": [

        {
            id: "budhalal",
            name: "બુધાલાલ",
            price: "₹140",
            numericPrice: 140
        },

        {
            id: "budhalal_10",
            name: "બુધાલાલ [ 10 પેકેટ ]",
            price: "₹1370",
            numericPrice: 1370
        }

    ],



    "મીરાજ તમાકુ": [

        {
            id: "miraj_tamaku",
            name: "મીરાજ તમાકુ",
            price: "₹160",
            numericPrice: 160
        }

    ],



    "બીડી": [

        {
            id: "nani_charbhai",
            name: "નાની ચારભાઈ",
            price: "₹495",
            numericPrice: 495
        },

        {
            id: "moti_charbhai",
            name: "મોટી ચારભાઈ",
            price: "₹495",
            numericPrice: 495
        }

    ],



    "રિંગ 1 KG ": [

        {
            id: "ring_1KG",
            name: "રિંગ 1 KG",
            price: "₹250",
            numericPrice: 250
        }

    ],



    "શેમ્પૂ": [

        {
            id: "clinic_plus_shampoo",
            name: "ક્લિનિક + [ 1 પટ્ટી ]",
            price: "₹13",
            numericPrice: 13
        },

        {
            id: "dove_shempo",
            name: "ડવ શેમ્પૂ [ 1 પટ્ટી ]",
            price: "₹26",
            numericPrice: 26
        },

        {
            id: "dove_shempo_box",
            name: "ડવ શેમ્પૂ બોક્સ",
            price: "₹1430",
            numericPrice: 1430
        },

        {
            id: "clinic_plus_shempo_box",
            name: "ક્લિનિક + શેમ્પૂ બોક્સ",
            price: "₹720",
            numericPrice: 720
        }

    ],



    "સાબુ": [

        {
            id: "somnath_sabu",
            name: "સોમનાથ સાબુ ",
            price: "₹60",
            numericPrice: 60
        },

        {
            id: "dip_sabu",
            name: "દીપ સાબુ ",
            price: "₹50",
            numericPrice: 50
        },

        {
            id: "somnath_sabu_peti",
            name: "સોમનાથ સાબુ પેટી ",
            price: "₹340",
            numericPrice: 340
        },

        {
            id: "dip_sabu_peti",
            name: "દીપ સાબુ પેટી ",
            price: "₹470",
            numericPrice: 470
        }

    ],



    "રાજલક્ષ્મી": [

        {
            id: "rajlaxmi_200gm",
            name: "રાજલક્ષ્મી 200 GM પેકેટ",
            price: "₹45",
            numericPrice: 45
        },

        {
            id: "rajlaxmi_200gm_1kg",
            name: "રાજલક્ષ્મી 200 GM પેકેટ 1 kg",
            price: "₹220",
            numericPrice: 220
        },

        {
            id: "rajlaxmi_200gm_carton",
            name: "રાજલક્ષ્મી 200 GM પેકેટ કાટૂન [30 KG]",
            price: "₹6150",
            numericPrice: 6150
        }

    ],



    "બાકસ": [

        {
            id: "બાકસ_10",
            name: "બાકસ 10 વાળું બોક્સ",
            price: "₹470",
            numericPrice: 470
        },

        {
            id: "બાકસ_5",
            name: "બાકસ 5 વાળું બોક્સ",
            price: "₹470",
            numericPrice: 470
        }

    ],



    "ચુનો": [

        {
            id: "tufan_chuno_single",
            name: "તુફાન ચૂનો",
            price: "₹10",
            numericPrice: 10
        },

        {
            id: "tufan_chuno_bag",
            name: "તુફાન ચૂનો 1 થેલો [30 પેકેટ]",
            price: "₹230",
            numericPrice: 230
        },

        {
            id: "khodal_chuno_single",
            name: "ખોડલ ચૂનો",
            price: "₹20",
            numericPrice: 20
        },

        {
            id: "khodal_chuno_box",
            name: "ખોડલ ચૂનો 1 પેટી [20 પેકેટ]",
            price: "₹310",
            numericPrice: 310
        },

         {
            id: "babu_chuno_",
            name: "બાબુ ચૂનો ",
            price: "₹35",
            numericPrice: 35
        },


        {
            id: "bhagvati_chuno",
            name: "ભગવતી ચૂનો ",
            price: "₹10",
            numericPrice: 10
        },

        {
            id: "bhagvati_ટોટી_chuno",
            name: "ભગવતી ટોટી ચૂનો ",
            price: "₹10",
            numericPrice: 10
        },

        {
            id: "langar_chuno",
            name: "લંગર ચૂનો",
            price: "₹10",
            numericPrice: 10
        }


    ],



    "બિસ્કિટ": [

        {
            id: "biskit_20_20",
            name: "20-20",
            price: "₹55",
            numericPrice: 55
        },

        {
            id: "biskit_20_20_box",
            name: "20-20 બોક્સ",
            price: "₹640",
            numericPrice: 640
        },

        {
            id: "biskit_parle",
            name: "પાર્લે ",
            price: "₹110",
            numericPrice: 110
        },

        {
            id: "biskit_parle_box",
            name: "પાર્લે બોક્સ",
            price: "₹650",
            numericPrice: 650
        },


        {
            id: "biskit_magic",
            name: "મેજીક",
            price: "₹55",
            numericPrice: 55
        },

        {
            id: "biskit_magic_box",
            name: "મેજીક બોક્સ",
            price: "₹600",
            numericPrice: 600
        },

        {
            id: "biskit_crackjack",
            name: "ક્રેકજેક",
            price: "₹110",
            numericPrice: 110
        },

        {
            id: "biskit_crackjack_box",
            name: "ક્રેકજેક બોક્સ",
            price: "₹640",
            numericPrice: 640
        },

        {
            id: "biskit_happy_happy",
            name: "હેપી-હેપી",
            price: "₹110",
            numericPrice: 110
        },

        {
            id: "biskit_happy_happy_box",
            name: "હેપી-હેપી બોક્સ",
            price: "₹110",
            numericPrice: 110
        }

    ],



    "રજવાડી ચા": [

        {
            id: "rajvadi_250",
            name: "રજવાડી ચા 250 GM",
            price: "₹95",
            numericPrice: 95
        },

        {
            id: "rajvadi_500",
            name: "રજવાડી ચા 500 GM",
            price: "₹190",
            numericPrice: 190
        },

        {
            id: "rajvadi_1kg_from_250",
            name: "રજવાડી ચા 250 GM [1 KG]",
            price: "₹360",
            numericPrice: 360
        },

        {
            id: "rajvadi_1kg_from_500",
            name: "રજવાડી ચા 500 GM [1 KG]",
            price: "₹360",
            numericPrice: 360
        }

    ],



    "સીગરેટ": [

        {
            id: "fs_regular_64mm_1_pcs",
            name: "ફોર સ્કવેર રેગ્યુલર નાની [ MRP - 89 ]",
            price: "₹87",
            numericPrice: 87
        },

         {
            id: "fs_regular_64mm_1_box",
            name: "ફોર સ્કવેર રેગ્યુલર નાની બોક્સ [ MRP - 89 ]",
            price: "₹1635",
            numericPrice: 1635
        },

        {
            id: "fs_regular_69mm_1_pcs",
            name: "ફોર સ્કવેર રેગ્યુલર મોટી [ MRP - 115 ]",
            price: "₹110",
            numericPrice: 110
        },

        {
            id: "fs_regular_69mm_1_box",
            name: "ફોર સ્કવેર રેગ્યુલર મોટી બોક્સ [ MRP - 115 ]",
            price: "₹2100",
            numericPrice: 2100
        },

         {
            id: "fs_clove_69mm_1_pcs",
            name: "ફોર સ્કવેર કલોવે મોટી [ MRP - 90 ]",
            price: "₹82",
            numericPrice: 82
        },

        {
            id: "fs_clove_69mm_1_box",
            name: "ફોર સ્કવેર કલોવે મોટી બોક્સ [ MRP - 90 ]",
            price: "₹1560",
            numericPrice: 1560
        },

        

         {
            id: "fs_crush_64mm_1_pcs",
            name: "ફોર સ્કવેર ક્રશ નાની [ MRP - 85 ]",
            price: "₹83",
            numericPrice: 83
        },

         {
            id: "fs_crush_64mm_1_box",
            name: "ફોર સ્કવેર ક્રશ નાની બોક્સ [ MRP - 85 ]",
            price: "₹1635",
            numericPrice: 1635
        },

         {
            id: "fs_crush_69mm_1_pcs",
            name: "ફોર સ્કવેર ક્રશ મોટી [ MRP - 115 ]",
            price: "₹110",
            numericPrice: 110
        },

         {
            id: "fs_crush_69mm_1_box",
            name: "ફોર સ્કવેર ક્રશ મોટી બોક્સ  [ MRP - 115 ]",
            price: "₹2140",
            numericPrice: 2140
        }



    ],



    "અરગબત્તી": [

        {
            id: "agarbatti",
            name: "અગરબત્તી",
            price: "₹50",
            numericPrice: 50
        }

    ],



    "સોપારી": [

        {
            id: "સોપારી_1_kg",
            name: "સોપારી 1 kg",
            price: "₹640",
            numericPrice: 640
        },

        {
            id: "સોપારી_5_kg",
            name: "સોપારી 5 kg",
            price: "₹550",
            numericPrice: 550
        }

    ]

};




function saveLogin() {

    localStorage.setItem(
        "gautamSalesCustomer",
        JSON.stringify({
            name: customerName,
            mobile: customerMobile
        })
    );

}




function loadLogin() {

    const savedCustomer =
        localStorage.getItem(
            "gautamSalesCustomer"
        );


    if (!savedCustomer) {

        return false;

    }


    try {

        const customer =
            JSON.parse(savedCustomer);


        if (
            customer &&
            customer.name &&
            customer.mobile
        ) {

            customerName =
                customer.name;

            customerMobile =
                customer.mobile;

            return true;

        }

    } catch (error) {

        console.error(
            "Login data error:",
            error
        );

    }


    return false;

}



function loadOrderHistory() {

    const savedHistory =
        localStorage.getItem(
            "gautamSalesOrderHistory"
        );


    if (!savedHistory) {

        orderHistory = [];

        return;

    }


    try {

        orderHistory =
            JSON.parse(savedHistory) || [];

    } catch (error) {

        orderHistory = [];

        console.error(
            "Order history error:",
            error
        );

    }

}




function saveOrderHistory() {

    localStorage.setItem(
        "gautamSalesOrderHistory",
        JSON.stringify(orderHistory)
    );

}




function addOrderToHistory() {

    const items =
        getCartItems();


    if (items.length === 0) {

        return;

    }


    let grandTotal = 0;


    const orderItems =
        items.map(function (item) {

            grandTotal +=
                item.subtotal;


            return {

                category:
                    item.category,

                name:
                    item.product.name,

                price:
                    item.product.price,

                quantity:
                    item.quantity,

                subtotal:
                    item.subtotal

            };

        });


    const order = {

        id:
            Date.now(),

        date:
            new Date().toLocaleString(
                "en-IN"
            ),

        customerName:
            customerName,

        customerMobile:
            customerMobile,

        items:
            orderItems,

        total:
            grandTotal

    };


    orderHistory.unshift(
        order
    );


    saveOrderHistory();

}



function showWelcomePage() {

    const username =
        document
            .getElementById("username")
            .value
            .trim();


    if (!username) {

        document
            .getElementById("usernameError")
            .innerText =
            "⚠️ પહેલા તમારું નામ લખો.";

        return;

    }


    document
        .getElementById("usernameError")
        .innerText = "";


    customerName =
        username;


    document
        .getElementById("welcomeUserText")
        .innerText =
        "Welcome, " + username;


    document
        .getElementById("usernamePage")
        .style.display =
        "none";


    document
        .getElementById("welcomePage")
        .style.display =
        "block";

}




function showUsernamePage() {

    document
        .getElementById("welcomePage")
        .style.display =
        "none";


    document
        .getElementById("usernamePage")
        .style.display =
        "block";

}



function continueToWebsite() {

    const mobile =
        document
            .getElementById("mobile")
            .value
            .trim();


    if (
        !/^[6-9][0-9]{9}$/
            .test(mobile)
    ) {

        document
            .getElementById("loginError")
            .innerText =
            "⚠️ સાચો 10 digit mobile number નાખો.";

        return;

    }


    customerMobile =
        mobile;


    saveLogin();


    document
        .getElementById("loginError")
        .innerText = "";


    document
        .getElementById("loginScreen")
        .style.display =
        "none";


    document
        .getElementById("mainContent")
        .style.display =
        "block";


    updateCartCount();

}



function setMode(mode) {

    currentMode =
        mode === "estimate"
            ? "estimate"
            : "price";

    const priceButton =
        document.getElementById("priceModeBtn");

    const estimateButton =
        document.getElementById("estimateModeBtn");


    // ACTIVE BUTTON

    if (priceButton) {
        priceButton.classList.toggle(
            "active",
            currentMode === "price"
        );
    }

    if (estimateButton) {
        estimateButton.classList.toggle(
            "active",
            currentMode === "estimate"
        );
    }




    if (priceButton) {
        priceButton.style.setProperty(
            "color",
            currentMode === "price"
                ? "#ffffff"
                : "#000000",
            "important"
        );
    }

    if (estimateButton) {
        estimateButton.style.setProperty(
            "color",
            currentMode === "estimate"
                ? "#ffffff"
                : "#000000",
            "important"
        );
    }




    if (
        activeCategoryName &&
        document.getElementById("productPage") &&
        document.getElementById("productPage").style.display !== "none"
    ) {
        renderProducts(activeCategoryName);
    }

}





function openInsideCategory(
    categoryName
) {

    activeCategoryName =
        categoryName;


    history.pushState(
        {
            page:
                "product",

            category:
                categoryName
        },

        "",

        "#product"
    );


    document
        .getElementById("categoryPage")
        .style.display =
        "none";


    document
        .getElementById("productPage")
        .style.display =
        "block";


    document
        .getElementById(
            "productCategoryTitle"
        )
        .innerText =
        categoryName;


    renderProducts(
        categoryName
    );


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}




function backToCategories() {

    history.back();

}




window.addEventListener(
    "popstate",
    function () {

        document
            .getElementById("productPage")
            .style.display =
            "none";


        document
            .getElementById("categoryPage")
            .style.display =
            "block";


        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }
);




function renderProducts(
    categoryName
) {

    const grid =
        document
            .getElementById(
                "productGrid"
            );


    grid.innerHTML = "";


    const normalized =
        String(
            categoryName || ""
        )
            .normalize("NFC")
            .trim();


    const matchedCategory =
        Object.keys(
            productData
        )
            .find(function (key) {

                return (
                    key
                        .normalize("NFC")
                        .trim()
                    ===
                    normalized
                );

            });


    const products =
        matchedCategory
            ? productData[
            matchedCategory
            ]
            : [];


    if (
        products.length === 0
    ) {

        grid.innerHTML = `

            <div style="
                width:100%;
                text-align:center;
                padding:40px 20px;
                font-size:22px;
                font-weight:bold;
                color:#35104f;
            ">

                ⚠️ આ કેટેગરીમાં
                અત્યારે કોઈ Product નથી.

            </div>

        `;

        return;

    }


    products.forEach(
        function (product) {

            const quantity =
                currentCart[
                product.id
                ] || 0;


            const card =
                document.createElement(
                    "div"
                );


            card.className =
                "product-card";


            let quantityHTML =
                "";


            if (
                currentMode ===
                "estimate"
            ) {

                quantityHTML = `

                    <div class="quantity-row">

                        <button
                            class="qty-btn"
                            onclick="
                                changeQuantity(
                                    '${product.id}',
                                    -1
                                )
                            "
                        >
                            −
                        </button>


                        <span
                            class="qty-value"
                            id="qty-${product.id}"
                        >
                            ${quantity}
                        </span>


                        <button
                            class="qty-btn"
                            onclick="
                                changeQuantity(
                                    '${product.id}',
                                    1
                                )
                            "
                        >
                            +
                        </button>

                    </div>

                `;

            }


            card.innerHTML = `

                <div class="product-name">
                    ${product.name}
                </div>


                <div class="product-price">
                    ${product.price}
                </div>


                ${quantityHTML}

            `;


            grid.appendChild(
                card
            );

        }
    );

}



function changeQuantity(
    productId,
    change
) {

    if (
        currentMode !==
        "estimate"
    ) {

        return;

    }


    let quantity =
        currentCart[
        productId
        ] || 0;


    quantity +=
        change;


    if (
        quantity < 0
    ) {

        quantity = 0;

    }


    if (
        quantity === 0
    ) {

        delete currentCart[
            productId
        ];

    } else {

        currentCart[
            productId
        ] =
            quantity;

    }


    const quantityElement =
        document.getElementById(
            "qty-" + productId
        );


    if (quantityElement) {

        quantityElement.innerText =
            quantity;

    }


    updateCartCount();

}




function getCartItems() {

    const items = [];


    Object.keys(
        productData
    )
        .forEach(
            function (categoryName) {

                productData[
                    categoryName
                ]
                    .forEach(
                        function (product) {

                            const quantity =
                                currentCart[
                                product.id
                                ] || 0;


                            if (
                                quantity > 0
                            ) {

                                items.push({

                                    category:
                                        categoryName,

                                    product:
                                        product,

                                    quantity:
                                        quantity,

                                    subtotal:
                                        quantity *
                                        product.numericPrice

                                });

                            }

                        }
                    );

            }
        );


    return items;

}



function updateCartCount() {

    const cartCount =
        document
            .getElementById(
                "cartCount"
            );


    if (!cartCount) {

        return;

    }


    const items =
        getCartItems();


    const totalQuantity =
        items.reduce(
            function (
                total,
                item
            ) {

                return (
                    total +
                    item.quantity
                );

            },

            0
        );


    cartCount.innerText =
        totalQuantity;


    if (
        totalQuantity > 0
    ) {

        cartCount.classList.add(
            "show"
        );

    } else {

        cartCount.classList.remove(
            "show"
        );

    }

}




function openCart() {

    const overlay =
        document.getElementById(
            "cartOverlay"
        );

    if (!overlay) {

        return;

    }

    const nameElement =
        document.getElementById(
            "billCustomerName"
        );

    const mobileElement =
        document.getElementById(
            "billCustomerMobile"
        );

    if (nameElement) {

        nameElement.innerText =
            customerName ||
            "ગ્રાહક";

    }

    if (mobileElement) {

        mobileElement.innerText =
            customerMobile ||
            "-";

    }

    renderCart();

    overlay.classList.add(
        "show"
    );

    document.body.classList.add(
        "cart-open"
    );
}



function closeCart() {

    const overlay =
        document.getElementById(
            "cartOverlay"
        );


    if (!overlay) {

        return;

    }


    overlay.classList.remove(
        "show"
    );


    document.body.classList.remove(
        "cart-open"
    );

}




function closeCartOutside(
    event
) {

    if (
        event.target &&
        event.target.id ===
        "cartOverlay"
    ) {

        closeCart();

    }

}




function renderCart() {

    const container =
        document.getElementById(
            "cartItems"
        );


    const empty =
        document.getElementById(
            "cartEmpty"
        );


    const totalElement =
        document.getElementById(
            "cartGrandTotal"
        );


    const items =
        getCartItems();


    container.innerHTML =
        "";


    if (
        items.length === 0
    ) {

        empty.style.display =
            "block";


        totalElement.innerText =
            "₹0";


        return;

    }


    empty.style.display =
        "none";


    let grandTotal =
        0;


    items.forEach(
        function (item) {

            grandTotal +=
                item.subtotal;


            const row =
                document.createElement(
                    "div"
                );


            row.className =
                "cart-item";


            row.innerHTML = `

                <div>

                    <div class="cart-item-category">
                        ${item.category}
                    </div>


                    <div class="cart-item-name">
                        ${item.product.name}
                    </div>


                    <div class="cart-item-price">
                        ${item.product.price}
                        ×
                        ${item.quantity}
                    </div>

                </div>


                <div class="cart-item-right">

                    <strong>
                        ₹${item.subtotal.toFixed(2)}
                    </strong>


                    <div class="cart-controls">

                        <button
                            type="button"
                            onclick="
                                changeCartQuantity(
                                    '${item.product.id}',
                                    -1
                                )
                            "
                        >
                            −
                        </button>


                        <span>
                            ${item.quantity}
                        </span>


                        <button
                            type="button"
                            onclick="
                                changeCartQuantity(
                                    '${item.product.id}',
                                    1
                                )
                            "
                        >
                            +
                        </button>


                        <button
                            type="button"
                            onclick="
                                removeCartItem(
                                    '${item.product.id}'
                                )
                            "
                            title="Remove"
                            style="
                                margin-left:8px;
                                width:40px;
                                height:40px;
                                background:#fff1f1;
                                color:#e53935;
                                border:1px solid #ffd0d0;
                                border-radius:12px;
                                display:flex;
                                align-items:center;
                                justify-content:center;
                                cursor:pointer;
                                font-size:20px;
                                box-shadow:
                                    0 3px 8px
                                    rgba(
                                        229,
                                        57,
                                        53,
                                        .12
                                    );
                            "
                        >
                            🗑
                        </button>

                    </div>

                </div>

            `;


            container.appendChild(
                row
            );

        }
    );


    totalElement.innerText =
        "₹" +
        grandTotal.toFixed(2);

}




function changeCartQuantity(
    productId,
    change
) {

    let quantity =
        currentCart[
        productId
        ] || 0;


    quantity +=
        change;


    if (
        quantity <= 0
    ) {

        delete currentCart[
            productId
        ];

    } else {

        currentCart[
            productId
        ] =
            quantity;

    }


    updateCartCount();


    renderCart();


    if (
        activeCategoryName
    ) {

        renderProducts(
            activeCategoryName
        );

    }

}



function removeCartItem(
    productId
) {

    delete currentCart[
        productId
    ];


    updateCartCount();


    renderCart();


    if (
        activeCategoryName
    ) {

        renderProducts(
            activeCategoryName
        );

    }

}




function searchCategory() {

    const input =
        document.getElementById(
            "searchInput"
        );


    if (!input) {

        return;

    }


    const searchValue =
        input.value
            .toLowerCase()
            .trim();


    const cards =
        document.querySelectorAll(
            ".category-card"
        );


    cards.forEach(
        function (card) {

            const text =
                (
                    card.innerText +
                    " " +
                    (
                        card.dataset.search ||
                        ""
                    )
                )
                    .toLowerCase();


            if (
                !searchValue ||
                text.includes(
                    searchValue
                )
            ) {

                card.style.display =
                    "flex";

            } else {

                card.style.display =
                    "none";

            }

        }
    );

}




function sendBillToWhatsApp() {

    const items =
        getCartItems();


    if (
        items.length === 0
    ) {

        alert(
            "⚠️ પહેલા Cart માં વસ્તુ ઉમેરો."
        );

        return;

    }


    if (!customerName) {

        alert(
            "⚠️ Customer name મળ્યું નથી."
        );

        return;

    }


    if (
        !/^[6-9][0-9]{9}$/
            .test(
                customerMobile
            )
    ) {

        alert(
            "⚠️ Customer mobile number સાચો નથી."
        );

        return;

    }


    let bill =
        "";


    bill +=
        "🧾 *GAUTAM SALES ORDER* 🧾\n\n";


    bill +=
        "👤 *ગ્રાહકનું નામ:* " +
        customerName +
        "\n";


    bill +=
        "📱 *મોબાઇલ નંબર:* " +
        customerMobile +
        "\n\n";


    bill +=
        "━━━━━━━━━━━━━━━━━━\n";


    let grandTotal =
        0;


    items.forEach(
        function (
            item,
            index
        ) {

            grandTotal +=
                item.subtotal;


            bill +=
                "*" +
                (index + 1) +
                ". " +
                item.product.name +
                "*\n";


          


            bill +=
                "ભાવ: " +
                item.product.price +
                "\n";


            bill +=
                "જથ્થો: " +
                item.quantity +
                " નંગ\n";


            bill +=
                "કુલ: ₹" +
                item.subtotal.toFixed(2) +
                "\n";


            bill +=
                "━━━━━━━━━━━━━━━━━━\n";

        }
    );


    bill +=
        "\n💰 *કુલ બિલ: ₹" +
        grandTotal.toFixed(2) +
        "*\n\n";


    bill +=
        "🙏 કૃપા કરીને મારો Order confirm કરો.";




    addOrderToHistory();


    const shopNumber =
        "919328171804";


    const whatsappURL =
        "https://wa.me/" +
        shopNumber +
        "?text=" +
        encodeURIComponent(
            bill
        );


    window.open(
        whatsappURL,
        "_blank"
    );

}




function showOrderHistory() {

    loadOrderHistory();


    const oldOverlay =
        document.getElementById(
            "orderHistoryOverlay"
        );


    if (oldOverlay) {

        oldOverlay.remove();

    }


    const overlay =
        document.createElement(
            "div"
        );


    overlay.id =
        "orderHistoryOverlay";


    overlay.style.cssText = `

        position:fixed;

        inset:0;

        z-index:99999;

        background:
            rgba(0,0,0,.65);

        display:flex;

        align-items:center;

        justify-content:center;

        padding:15px;

    `;


    let html = `

        <div style="

            width:100%;

            max-width:650px;

            max-height:90vh;

            overflow-y:auto;

            background:#fff;

            border-radius:24px;

            padding:20px;

            box-shadow:
                0 20px 60px
                rgba(0,0,0,.35);

        ">


            <div style="

                display:flex;

                align-items:center;

                justify-content:space-between;

                margin-bottom:18px;

            ">


                <h2 style="

                    margin:0;

                    color:#35104f;

                    font-size:24px;

                ">

                    📜 Order History

                </h2>


                <button

                    onclick="
                        closeOrderHistory()
                    "

                    style="

                        width:42px;

                        height:42px;

                        border:none;

                        border-radius:50%;

                        background:#f1e8f7;

                        color:#35104f;

                        font-size:26px;

                        cursor:pointer;

                    "

                >

                    ×

                </button>


            </div>

    `;


    if (
        orderHistory.length === 0
    ) {

        html += `

            <div style="

                text-align:center;

                padding:45px 15px;

                color:#666;

            ">


                <div style="

                    font-size:50px;

                    margin-bottom:10px;

                ">

                    📜

                </div>


                <div style="

                    font-size:20px;

                    font-weight:bold;

                ">

                    હજુ કોઈ Order નથી

                </div>


            </div>

        `;

    } else {


        orderHistory.forEach(
            function (
                order,
                index
            ) {


                html += `

                    <div style="

                        background:#f8f4fb;

                        border:
                            1px solid
                            #eadcf2;

                        border-radius:18px;

                        padding:16px;

                        margin-bottom:14px;

                    ">


                        <div style="

                            display:flex;

                            justify-content:
                                space-between;

                            gap:10px;

                            margin-bottom:10px;

                        ">


                            <strong style="

                                color:#35104f;

                                font-size:18px;

                            ">

                                Order #
                                ${orderHistory.length -
                    index
                    }

                            </strong>


                            <span style="

                                color:#777;

                                font-size:13px;

                            ">

                                ${order.date}

                            </span>


                        </div>


                        <div style="

                            font-size:14px;

                            color:#555;

                            margin-bottom:12px;

                        ">

                            👤
                            ${order.customerName}

                            <br>

                            📱
                            ${order.customerMobile}

                        </div>

                `;


                order.items.forEach(
                    function (
                        item
                    ) {


                        html += `

                            <div style="

                                display:flex;

                                justify-content:
                                    space-between;

                                gap:10px;

                                padding:9px 0;

                                border-bottom:
                                    1px solid
                                    #e5dbe9;

                            ">


                                <div>


                                    <div style="

                                        font-weight:bold;

                                        color:#333;

                                    ">

                                        ${item.name}

                                    </div>


                                    <div style="

                                        font-size:13px;

                                        color:#777;

                                    ">

                                        ${item.price}
                                        ×
                                        ${item.quantity}

                                    </div>


                                </div>


                                <strong>

                                    ₹${Number(
                            item.subtotal
                        ).toFixed(2)
                            }

                                </strong>


                            </div>

                        `;

                    }
                );


                html += `

                        <div style="

                            display:flex;

                            justify-content:
                                space-between;

                            margin-top:14px;

                            font-size:19px;

                            font-weight:bold;

                            color:#35104f;

                        ">


                            <span>

                                કુલ Bill

                            </span>


                            <span>

                                ₹${Number(
                    order.total
                ).toFixed(2)
                    }

                            </span>


                        </div>


                    </div>

                `;

            }
        );

    }


    html += `

            <button

                onclick="
                    clearOrderHistory()
                "

                style="

                    width:100%;

                    padding:14px;

                    border:none;

                    border-radius:14px;

                    background:#ffeaea;

                    color:#d32f2f;

                    font-size:16px;

                    font-weight:bold;

                    cursor:pointer;

                "

            >

                🗑 Order History Clear કરો

            </button>


        </div>

    `;


    overlay.innerHTML =
        html;


    document.body.appendChild(
        overlay
    );

}



function closeOrderHistory() {

    const overlay =
        document.getElementById(
            "orderHistoryOverlay"
        );


    if (overlay) {

        overlay.remove();

    }

}




function clearOrderHistory() {

    const answer =
        confirm(
            "શું તમે આખી Order History delete કરવા માંગો છો?"
        );


    if (!answer) {

        return;

    }


    orderHistory =
        [];


    localStorage.removeItem(
        "gautamSalesOrderHistory"
    );


    showOrderHistory();

}




function logout() {

    const answer =
        confirm(
            "શું તમે Logout કરવા માંગો છો?"
        );


    if (!answer) {

        return;

    }




    localStorage.removeItem(
        "gautamSalesCustomer"
    );


    customerName =
        "";

    customerMobile =
        "";

    currentCart =
        {};

    activeCategoryName =
        "";


    document
        .getElementById(
            "mainContent"
        )
        .style.display =
        "none";


    document
        .getElementById(
            "loginScreen"
        )
        .style.display =
        "flex";


    document
        .getElementById(
            "usernamePage"
        )
        .style.display =
        "block";


    document
        .getElementById(
            "welcomePage"
        )
        .style.display =
        "none";


    document
        .getElementById(
            "username"
        )
        .value =
        "";


    document
        .getElementById(
            "mobile"
        )
        .value =
        "";


    updateCartCount();

}



document.addEventListener(
    "DOMContentLoaded",
    function () {




        loadOrderHistory();


        const alreadyLoggedIn =
            loadLogin();


        if (
            alreadyLoggedIn
        ) {


            document
                .getElementById(
                    "loginScreen"
                )
                .style.display =
                "none";


            document
                .getElementById(
                    "mainContent"
                )
                .style.display =
                "block";


        } else {


            document
                .getElementById(
                    "loginScreen"
                )
                .style.display =
                "flex";

        }




        const username =
            document.getElementById(
                "username"
            );


        if (username) {

            username.addEventListener(
                "keydown",
                function (event) {

                    if (
                        event.key ===
                        "Enter"
                    ) {

                        event.preventDefault();

                        showWelcomePage();

                    }

                }
            );

        }




        const mobile =
            document.getElementById(
                "mobile"
            );


        if (mobile) {

            mobile.addEventListener(
                "keydown",
                function (event) {

                    if (
                        event.key ===
                        "Enter"
                    ) {

                        event.preventDefault();

                        continueToWebsite();

                    }

                }
            );

        }




        setMode(
            "price"
        );


        updateCartCount();

    }
);
