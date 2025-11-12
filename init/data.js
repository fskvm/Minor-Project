
const sampleListings = [
    {
        title: "Flat in jaipur",
        description:
            "Relax with the whole family at this peaceful place to stay. Location which are near by connected Patrika Gate , Airport , Fortis , EHCC Hospital, WTP Mall, GT Mall.",
        image: {
            url: "https://a0.muscache.com/im/pictures/hosting/Hosting-1529475802023754060/original/d031b903-9d48-4f5e-ace4-ad1c52af8bb9.jpeg?im_w=1200",
            filename: "listingimage",
        },
        price: 3650,
        location: "Jaipur",
        country: "India",
    },
    {
        title: "Hotel in Greater Noida",
        description:
            "Experience comfort and sophistication at Sandane Homes, located in the heart of Greater Noida. Perfect for both business and leisure travelers, our property offers a serene ambiance with modern amenities for a truly elegant stay.",
        image: {
            url: "https://a0.muscache.com/im/pictures/hosting/Hosting-1221588138730305175/original/89a63c70-5d30-4b84-bd69-6bbca5f454f2.jpeg?im_w=960",
            filename: "listingimage",
        },
        price: 3999,
        location: "Greater Noida",
        country: "India",
    },
    {
        title: "Flat in Candolim",
        description:
            "A stylish 2BHK flat just minutes from Candolim beach. Enjoy the shared pool and vibrant nightlife nearby. Perfect for a Goan getaway.",
        image: {
            url: "https://a0.muscache.com/im/pictures/hosting/Hosting-1064202134201603489/original/ae75844c-b6e9-4d84-a0b9-ffefbe3b9f1f.jpeg?im_w=960",
            filename: "listingimage",
        },
        price: 4500,
        location: "Goa",
        country: "India",
    },
    {
        title: "Palm paradise",
        description:
            "Welcome to our modern 1 BHK retreat for couples seeking relaxation. Spanning 700 sq ft, this apartment features a stylish living room with a sofa bed, dining table, and TV. Step out to the balcony to enjoy an outdoor dining area with views of lush palm trees. The kitchen is perfect for preparing meals, while the bedroom has a cute and cozy workspace . The apartment has a contemporary bathroom .",
        image: {
            url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
            filename: "listingimage",
        },
        price: 6848,
        location: "Mumbai",
        country: "India",
    },
    {
        title: "Flat in Raipur",
        description:
            "A cozy 2BHK home with a view straight out of a movie—watch sunsets, rainbows, and the Himalayas from your balcony overlooking a 9-hole golf course. Perfect for couples and families, it features a designated workspace with ergonomic chairs, handpicked furniture, and art. ",
        image: {
            url: "https://a0.muscache.com/im/pictures/hosting/Hosting-1162799689258938645/original/601233d6-7b04-430c-9359-12a4e5557641.jpeg?im_w=1200",
            filename: "listingimage",
        },
        price: 2500,
        location: "Raipur",
        country: "India",
    },
    {
        title: "Flat in Colva",
        description:
            "Relax with the whole family at this peaceful place to stay. The place is centrally located and is very easy to reach\n" +
            "\n" +
            "Enjoy scenic views while your stay as the property is located on the top floor in a gated society with all the amenities \n" +
            "\n" +
            "It’s a 5 min drive from helipad \n" +
            "11 min drive from Max hospital",
        image: {
            url: "https://a0.muscache.com/im/pictures/hosting/Hosting-32191897/original/89989941-7675-4d03-8e5a-690bb363a759.jpeg?im_w=960",
            filename: "listingimage",
        },
        price: 5000,
        location: "Goa",
        country: "India",
    },
    {
        title: "Home in Siddhi",
        description:
            "Relax and feel peace in you! \n" +
            "A perfect family getaway.\n" +
            "Come and stay with us to feel even better than at home.\n" +
            "Enjoy the uninterrupted wifi connectivity with a complete power back up..\n" +
            "Come in as guests & Leave as family.\n" +
            "Accommodating your peace of mind in the cozy AC apartment!Prepare a quick snack or head out to the beach shacks..Jump in the pool or have a dip in d sea",
        image: {
            url: "https://a0.muscache.com/im/pictures/hosting/Hosting-1416218658339451756/original/89d0d0f7-26fa-4a37-8410-53cc33d28b5b.jpeg?im_w=1200",
            filename: "listingimage",
        },
        price: 7050,
        location: "Varanasi",
        country: "India",
    },
    {
        title: "Trisha's House",
        description:
            "Relax with the whole family and friends at this peaceful private stay with a power back up.we prioritise in cleanliness and peace.",
        image: {
            url: "https://a0.muscache.com/im/pictures/hosting/Hosting-1483896254153157804/original/b74004ea-5b23-4d75-9875-72d0111b7b1e.jpeg?im_w=1200",
            filename: "listingimage",
        },
        price: 1500,
        location: "Varca",
        country: "India",
    },
    {
        title: "Urban Oasis",
        description:
            "A modern, stylish apartment in the heart of the city. Close to all major tech parks and restaurants. Includes high-speed Wi-Fi and a dedicated workspace.",
        image: {
            url: "https://a0.muscache.com/im/pictures/hosting/Hosting-1413858431883771385/original/1b106e35-1218-4e67-9f83-7d55e739c9ab.jpeg?im_w=1200",
            filename: "listingimage",
        },
        price: 4000,
        location: "Bangalore",
        country: "India",
    },
    {
        title: "Hilltop View Cottage",
        description:
            "Escape to this cozy cottage in the mountains. Enjoy breathtaking views of the Himalayas and serene nature walks. Perfect for a digital detox.",
        image: {
            url: "https://a0.muscache.com/im/pictures/hosting/Hosting-1501526053920514530/original/16527f80-ffc6-4735-888d-2ddf8d01e6ca.jpeg?im_w=1200",
            filename: "listingimage",
        },
        price: 6500,
        location: "Manali",
        country: "India",
    },
    {
        title: "Historic Haveli Stay",
        description:
            "Experience royalty in this restored heritage haveli. Centrally located near the city palace and lakes. A blend of traditional decor and modern amenities.",
        image: {
            url: "https://a0.muscache.com/im/pictures/hosting/Hosting-1270314768198309910/original/c389f712-5665-4b38-b83b-29f9b8fd73d0.jpeg?im_w=1200",
            filename: "listingimage",
        },
        price: 1800,
        location: "Udaipur",
        country: "India",
    },
    {
        title: "Riverside Retreat",
        description:
            "A peaceful retreat by the banks of the Ganges. Ideal for yoga and meditation. Listen to the river and find your inner peace.",
        image: {
            url: "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTA0MTI4OTcyMDUwMjI5Mjg3Nw%3D%3D/original/f5da9ddb-d67d-4074-8a4f-4bdcc8f4c1c0.jpeg?im_w=1200",
            filename: "listingimage",
        },
        price: 10000,
        location: "Rishikesh",
        country: "India",
    },
    {
        title: "Serene Beachside Villa",
        description:
            "Just steps away from the Arabian Sea. This villa offers a private garden and a quiet beach experience, away from the crowds.",
        image: {
            url: "https://images.unsplash.com/photo-1602088113235-229c19758e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmVhY2glMjB2YWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
            filename: "listingimage",
        },
        price: 9499,
        location: "Kochi",
        country: "India",
    },
    {
        title: "Cozy Studio in Capital",
        description:
            "A compact and comfortable studio in a safe, central neighborhood. Perfect for solo travelers or couples. Metro station is a 5-min walk.",
        image: {
            url: "https://a0.muscache.com/im/pictures/miso/Hosting-1324634048017973139/original/a0a50c97-837e-40e4-96bc-beff299d56d3.jpeg?im_w=1200",
            filename: "listingimage",
        },
        price: 2200,
        location: "New Delhi",
        country: "India",
    },
    {
        title: "Modern Pune Apartment",
        description:
            "Located in a bustling tech hub, this apartment is perfect for business travelers. Features a gym, pool, and 24/7 security.",
        image: {
            url: "https://a0.muscache.com/im/pictures/974fbc11-c5a7-405b-8557-94eb387aa15d.jpg?im_w=1200",
            filename: "listingimage",
        },
        price: 5049,
        location: "Pune",
        country: "India",
    },
    {
        title: "The Chennai Getaway",
        description:
            "Enjoy the sea breeze from this beautiful apartment near Marina Beach. Authentic South Indian breakfast included.",
        image: {
            url: "https://a0.muscache.com/im/pictures/hosting/Hosting-1461931001954381576/original/6973ded6-1a4e-43f6-acf6-6ed554ec46aa.jpeg?im_w=1200",
            filename: "listingimage",
        },
        price: 5000,
        location: "Chennai",
        country: "India",
    },
    {
        title: "Budget Stay near Taj",
        description:
            "A clean, simple, and affordable room with a private bath. Located just 1km from the Taj Mahal. Perfect for backpackers.",
        image: {
            url: "https://a0.muscache.com/im/pictures/hosting/Hosting-1096365467309628265/original/aa2f1eed-2157-4932-8be8-ebe60a697732.jpeg?im_w=1200",
            filename: "listingimage",
        },
        price: 1600,
        location: "Agra",
        country: "India",
    },
    {
        title: "Kolkata Heritage Home",
        description:
            "Step back in time in this colonial-era building. Enjoy the blend of history and comfort in the 'City of Joy'.",
        image: {
            url: "https://a0.muscache.com/im/pictures/miso/Hosting-9900374/original/8a3b4ce3-3b21-4194-b3d1-454d5cd3bbed.jpeg?im_w=1200",
            filename: "listingimage",
        },
        price: 3000,
        location: "Kolkata",
        country: "India",
    },
    {
        title: "Spacious Mountain Villa",
        description:
            "A large 4-bedroom villa perfect for families or groups. Features a fireplace, a large garden, and stunning views of the valley.",
        image: {
            url: "https://a0.muscache.com/im/pictures/hosting/Hosting-1259297390000577733/original/4a3a976e-8b25-4b16-9964-883fe30f84fe.jpeg?im_w=1200",
            filename: "listingimage",
        },
        price: 4030,
        location: "Shimla",
        country: "India",
    },
    {
        title: "Baga Beach Apartment",
        description:
            "Live right in the action. This apartment is on the main Baga-Calangute road, seconds from the beach, shacks, and nightlife.",
        image: {
            url: "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6OTgzMzE3Njc4OTg2NzM2OTE4/original/17ff1028-83fa-442a-b1d3-0392db2c24e8.jpeg?im_w=1200",
            filename: "listingimage",
        },
        price: 2000,
        location: "Goa",
        country: "India",
    },
];

module.exports = { data: sampleListings };
