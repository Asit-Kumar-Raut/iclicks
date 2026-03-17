// Complete Tourism Data with multiple images and hotel location links
const tourismData = {
    odisha: {
        image: "images/odisha.jpg",
        districts: {
              "Angul": {
                image: "anugull.jpg",
                touristPlaces: {
                    "Tikarpada nature camp,satakosia": {
                        images: ["anugulll.jpg", "anugul1.jpg", "anugul2.jpg", "anugul5.jpg" , "anugul6.jpg", "anugul4.jpg","anugul7.jpg"  ],
                         videos: ["https://youtube.com/watch?v=yRB85u8Akx0&si=Dykvy5Xzb7JdE2p0", "https://www.youtube.com/watch?v=8fHx3Xrseng"],
                        description: "Tikarpada Nature Camp is located on the banks of the Mahanadi River within the Satkosia Tiger Reserve in Odisha and offers a serene retreat for nature enthusiasts. This eco-tourism initiative is managed by the Odisha Forest Department in collaboration with local communities, promoting sustainable Odisha tourism and conservation efforts. The Nature Camp provides AC and non-AC Double-bed tented accommodations with essential amenities. Each tent offers a comfortable stay. The camp serves both vegetarian and non-vegetarian meals featuring local Odia cuisine. Meals are typically included in the accommodation package, offering guests a taste of regional flavours. Tikarpada is a tourist attraction in Angul District, Odisha..",
                        location: "https://maps.app.goo.gl/Ab8g5caAZ1WD2tLNA",
                        foods: [
                            { 
                                name: "Odia Biryani", 
                                images: ["Screenshot 2025-05-20 170749.png"],
                                description: "A flavorful and aromatic dish, commonly featuring chicken, rice, and various spices. "
                            },
                            { 
                                name: "Veg Thali", 
                                images: ["Screenshot 2025-05-20 170736.png"],
                                description: "A platter of various vegetable dishes, often served with rice and lentils. ."
                            },
                             { 
                                name: "VADA", 
                                images: ["Screenshot 2025-05-20 170743.png",],
                                description: " Deep-fried, savory snacks made from lentils."
                            },
                             { 
                                name: "Freshwater Fish",
                                images: ["anugul8.jpeg"],
                                description: "Local restaurants and kiosks in the area often offer fresh, locally caught fish."
                            }
                        ],
                        hotels: [
                            { 
                                name: "TIKARAPADA NATURE CAMP", 
                                images: ["images/mayfair1.jpg", "images/mayfair2.jpg"],
                                rating: 4.3,
                                price: "₹0-₹10K",
                                location: "https://maps.app.goo.gl/Md9VuwFmyJd3YaJU8",
                                address: "Tikarapada nature camp,satakosia"
                            }, { 
                                name: "Satakosia hill resort", 
                                images: ["images/mayfair1.jpg", "images/mayfair2.jpg"],
                                rating: 4.6,
                                price: "₹3,239",
                                location: "https://maps.app.goo.gl/cyeeXnuYWe6KS9W28",
                                address: "resert hotel,satkosia"
                            },
                             { 
                                name: "Green point-Hotel and resorts", 
                                images: ["images/mayfair1.jpg", "images/mayfair2.jpg"],
                                rating: 4.6,
                                price: "₹0-₹10K",
                                location: "https://maps.app.goo.gl/PknDEvrLXXqpdreb8",
                                address: "resort hotel,anugul"
                            },
                             { 
                                name: "Satakosia eco resort", 
                                images: ["images/mayfair1.jpg", "images/mayfair2.jpg"],
                                rating: 4.2,
                                price: "₹4,301",
                                location: "https://maps.app.goo.gl/jFu72MsfjhyYQF8w8",
                                address: ""
                            },
                             { 
                                name: "purnakote nature camp satkosia", 
                                images: ["images/mayfair1.jpg", "images/mayfair2.jpg"],
                                rating: 4.4,
                                price: "₹0-₹10K",
                                location: "https://maps.app.goo.gl/aBLpGfgQuoMMLBub8",
                                address: "Tikarapada nature camp,satakosia"
                            }, { 
                                name: "Satakosia Sand resort", 
                                images: ["images/mayfair1.jpg", "images/mayfair2.jpg"],
                                rating: 4.5,
                                price: "₹0-₹10K",
                                location: "https://maps.app.goo.gl/haJmGrPHkzPm9tQN7",
                                address: "Tikarapada nature camp,satakosia"
                            }, { 
                                name: "Kamlesh continental", 
                                images: ["images/mayfair1.jpg", "images/mayfair2.jpg"],
                                rating: 4.0,
                                price: "₹3,331",
                                location: "https://maps.app.goo.gl/sqBfH5sqSn41P1t3A",
                                address: "Tikarapada nature camp,satakosia"
                            }, { 
                                name: "hotelimagein", 
                                images: ["images/mayfair1.jpg", "images/mayfair2.jpg"],
                                rating: 3.6,
                                price: "₹0-₹10K",
                                location: "https://maps.app.goo.gl/N9qvZxKBWcqq9Y6L9",
                                address: "Tikarapada nature camp,satakosia"
                            }, { 
                                name: "chhotkei nature camp ,satkosia", 
                                images: ["images/mayfair1.jpg", "images/mayfair2.jpg"],
                                rating: 3.6,
                                price: "₹0-₹10K",
                                location: "https://maps.app.goo.gl/vmZi5Nn5DcwPgcdp9",
                                address: "Tikarapada nature camp,satakosia"
                            }, { 
                                name: "ashiana hill view hotel", 
                                images: ["images/mayfair1.jpg", "images/mayfair2.jpg"],
                                rating: 4.1,
                                price: "₹3,161",
                                location: "https://maps.app.goo.gl/XjhaQY5btm68WHHM8",
                                address: "Tikarapada nature camp,satakosia"
                            },
                             { 
                                name: "Hotel Shakti continental", 
                                images: ["images/mayfair1.jpg", "images/mayfair2.jpg"],
                                rating: 4.3,
                                price: "₹4,133",
                                location: "https://maps.app.goo.gl/g9osMEtmqVLD7BxZ7",
                                address: "Tikarapada nature camp,satakosia"
                            }
                        ]
                    },
                    "Satakosia ECO Retreat": {
                        images: ["nature11.jpg", "nature11.jpg","nature11.jpg", "nature11.jpg","nature11.jpg", "nature11.jpg"],
                        videos: ["https://www.youtube.com/embed/example5", "https://www.youtube.com/embed/example6"],
                        description: "Satkosia Eco Retreat is organized near the Satkosia Gorge, a breathtakingly scenic area located along the Mahanadi River in the Satkosia Tiger Reserve. It is 120 km distance from Cuttack and 81 km from Angul. The Eco Retreat is a unique luxury camping and nature experience in Odisha. Held annually, it is part of the Eco Retreat Odisha initiative by the Odisha Tourism Department to promote eco-tourism while offering a luxurious stay in pristine natural settings. Satkosia Eco Retreat will run from 01 December 2024 to 1 March 2024, and 25 temporary Swiss tent cottages have been set up to enjoy the beauty of the Mahanadi River Site. There is Baliput Satkosia Mahanadi Eco Village near the Eco Resort. You can also stay there..",
                        location: "https://goo.gl/maps/def",
                        foods: [
                            { 
                                name: "Mahaprasad", 
                                images: ["images/mahaprasad1.jpg", "images/mahaprasad2.jpg"],
                                description: "Sacred temple food offered to Lord Jagannath."
                            }
                        ],
                        hotels: [
                            { 
                                name: "Mayfair Heritage", 
                                images: ["images/mayfair-heritage1.jpg", "images/mayfair-heritage2.jpg"],
                                rating: 4.7,
                                price: "₹5,200/night",
                                location: "https://goo.gl/maps/mayfair-heritage",
                                address: "Chakratirtha Road, Puri"
                            }
                        ]
                    },
                    "Purnakote Nature Camp": {
            images: ["images/purnakote1.jpg", "images/purnakote2.jpg", "images/purnakote3.jpg"],
            videos: ["https://www.youtube.com/embed/ihYGX0i7aNw"],
            description: "Purnakote Nature Camp lies within the buffer zone of the Satkosia Tiger Reserve. The camp offers tented accommodation surrounded by dense forests and hilly terrain. This site is ideal for birdwatching, nature photography, and eco-friendly tourism.",
            location: "https://maps.app.goo.gl/purnakote",
            foods: [
                {
                    name: "Macha Besara",
                    images: ["images/macha1.jpg", "images/macha2.jpg"],
                    description: "Fish cooked with mustard paste, garlic and spices."
                }
            ],
            hotels: [
                {
                    name: "Purnakote Jungle Camp",
                    images: ["images/hotel1.jpg", "images/hotel2.jpg"],
                    rating: 4.5,
                    price: "₹3,000",
                    location: "https://maps.app.goo.gl/PurnakoteHotel",
                    address: "Near Satkosia Forest, Purnakote, Angul"
                }
            ]
        },
              "Chhotkei Nature Camp": {
            images: ["images/chhotkei1.jpg", "images/chhotkei2.jpg", "images/chhotkei3.jpg"],
            videos: ["https://www.youtube.com/embed/EYMg1vhfOvs"],
            description: "Located deep in Satkosia, Chhotkei Nature Camp offers a peaceful stay with cottages surrounded by forested hills. A perfect escape for nature lovers, this site is known for its scenic views and eco-tourism setup. The area supports wildlife like elephants, leopards, and a variety of birds.",
            location: "https://maps.app.goo.gl/chhotkei",
            foods: [
                {
                    name: "Dalma",
                    images: ["images/dalma1.jpg", "images/dalma2.jpg"],
                    description: "A wholesome Odia dish made of lentils and vegetables cooked together."
                }
            ],
            hotels: [
                {
                    name: "Chhotkei Forest Stay",
                    images: ["images/hotel3.jpg", "images/hotel4.jpg"],
                    rating: 4.2,
                    price: "₹2,500",
                    location: "https://maps.app.goo.gl/ChhotkeiHotel",
                    address: "Chhotkei Nature Camp, Satkosia"
                }
            ]
        },
            "Tarava Nature Camp": {
            images: ["images/tarava1.jpg", "images/tarava2.jpg"],
            videos: ["https://www.youtube.com/embed/tarava_video"],
            description: "Tarava Nature Camp is situated approximately 45 km from Angul and 170 km from Bhubaneswar. Perched about fifty feet above the Mahanadi River, it offers breathtaking views of the river gorging through the Eastern Ghats. The camp provides Swiss tent accommodations and is ideal for nature lovers seeking tranquility.",
            location: "https://maps.app.goo.gl/tarava_location",
            foods: [
                {
                    name: "Pakhala Bhata",
                    images: ["images/pakhala1.jpg", "images/pakhala2.jpg"],
                    description: "Traditional Odia fermented rice dish served with curd and seasonings."
                }
            ],
            hotels: [
                {
                    name: "Tarava Eco Resort",
                    images: ["images/tarava_resort1.jpg", "images/tarava_resort2.jpg"],
                    rating: 4.5,
                    price: "₹3,500",
                    location: "https://maps.app.goo.gl/tarava_resort",
                    address: "Tarava Nature Camp, Satkosia"
                }
            ]
        },
        "Baghamunda Nature Camp": {
            images: ["images/baghamunda1.jpg", "images/baghamunda2.jpg"],
            videos: ["https://www.youtube.com/embed/baghamunda_video"],
            description: "Baghamunda Nature Camp offers cottage accommodations amidst dense forests. It's a haven for wildlife enthusiasts and bird watchers, providing opportunities for jungle treks and nature walks.",
            location: "https://maps.app.goo.gl/baghamunda_location",
            foods: [
                {
                    name: "Chhena Poda",
                    images: ["images/chhena_poda1.jpg", "images/chhena_poda2.jpg"],
                    description: "Delicious cheese dessert baked with sugar and cardamom."
                }
            ],
            hotels: [
                {
                    name: "Baghamunda Forest Lodge",
                    images: ["images/baghamunda_lodge1.jpg", "images/baghamunda_lodge2.jpg"],
                    rating: 4.3,
                    price: "₹3,200",
                    location: "https://maps.app.goo.gl/baghamunda_lodge",
                    address: "Baghamunda Nature Camp, Satkosia"
                }
            ]
        },
        "Baliput Nature Camp": {
            images: ["images/baliput1.jpg", "images/baliput2.jpg"],
            videos: ["https://www.youtube.com/embed/baliput_video"],
            description: "Baliput Nature Camp is located along the banks of the Mahanadi River, offering Swiss tent accommodations. Visitors can enjoy boating, bird watching, and panoramic views of the river and surrounding forests.",
            location: "https://maps.app.goo.gl/baliput_location",
            foods: [
                {
                    name: "Mahaprasad",
                    images: ["images/mahaprasad1.jpg", "images/mahaprasad2.jpg"],
                    description: "Sacred temple food offered to Lord Jagannath."
                }
            ],
            hotels: [
                {
                    name: "Baliput Riverside Camp",
                    images: ["images/baliput_camp1.jpg", "images/baliput_camp2.jpg"],
                    rating: 4.4,
                    price: "₹3,800",
                    location: "https://maps.app.goo.gl/baliput_camp",
                    address: "Baliput Nature Camp, Satkosia"
                }
            ]
        }
      }
 },
            "Balangir": {
    image: "images/balangir-banner.jpg",
    touristPlaces: {
        "Harishankar Nature Camp": {
            images: ["images/harishankar1.jpg", "images/harishankar2.jpg"],
            videos: ["https://www.youtube.com/embed/ysM5AsTlGO0"],
            description: "Harishankar Nature Camp is located on the southern slopes of the Gandhamardhan Hills. It offers a serene environment ideal for nature lovers.",
            location: "https://maps.app.goo.gl/HarishankarLocation",
            foods: [
                {
                    name: "Pakhala Bhata",
                    images: ["images/pakhala1.jpg", "images/pakhala2.jpg"],
                    description: "Traditional Odia fermented rice dish served with curd and seasonings."
                }
            ],
            hotels: [
                {
                    name: "Harishankar Eco Resort",
                    images: ["images/harishankar_resort1.jpg", "images/harishankar_resort2.jpg"],
                    rating: 4.5,
                    price: "₹3,500",
                    location: "https://maps.app.goo.gl/HarishankarResort",
                    address: "Harishankar Nature Camp, Balangir"
                }
            ]
        },
        "Nrusinghanath Nature Camp": {
            images: ["images/nrusinghanath1.jpg", "images/nrusinghanath2.jpg"],
            videos: ["https://www.youtube.com/embed/NrusinghanathVideo"],
            description: "Nrusinghanath Nature Camp is located on the northern slopes of the Gandhamardhan Hills, near the historic Nrusinghanath Temple. It offers opportunities for trekking, bird watching, and exploring ancient sites.",
            location: "https://maps.app.goo.gl/NrusinghanathLocation",
            foods: [
                {
                    name: "Chhena Poda",
                    images: ["images/chhena_poda1.jpg", "images/chhena_poda2.jpg"],
                    description: "Delicious cheese dessert baked with sugar and cardamom."
                }
            ],
            hotels: [
                {
                    name: "Nrusinghanath Forest Lodge",
                    images: ["images/nrusinghanath_lodge1.jpg", "images/nrusinghanath_lodge2.jpg"],
                    rating: 4.3,
                    price: "₹3,200",
                    location: "https://maps.app.goo.gl/NrusinghanathLodge",
                    address: "Nrusinghanath Nature Camp, Balangir"
                }
            ]
        },
        "Patora Nature Camp": {
            images: ["images/patora1.jpg", "images/patora2.jpg"],
            videos: ["https://www.youtube.com/embed/PatoraVideo"],
            description: "Patora Nature Camp is situated near the Patora Dam, offering picturesque views and a tranquil setting for visitors.",
            location: "https://maps.app.goo.gl/PatoraLocation",
            foods: [
                {
                    name: "Mahaprasad",
                    images: ["images/mahaprasad1.jpg", "images/mahaprasad2.jpg"],
                    description: "Sacred temple food offered to Lord Jagannath."
                }
            ],
            hotels: [
                {
                    name: "Patora Riverside Camp",
                    images: ["images/patora_camp1.jpg", "images/patora_camp2.jpg"],
                    rating: 4.4,
                    price: "₹3,800",
                    location: "https://maps.app.goo.gl/PatoraCamp",
                    address: "Patora Nature Camp, Balangir"
                }
            ]
        },
        "Sarafgarh Nature Camp": {
            images: ["images/sarafgarh1.jpg", "images/sarafgarh2.jpg"],
            videos: ["https://www.youtube.com/embed/SarafgarhVideo"],
            description: "Sarafgarh Nature Camp is located near the Sarafgarh Dam, providing a peaceful environment amidst nature.",
            location: "https://maps.app.goo.gl/SarafgarhLocation",
            foods: [
                {
                    name: "Dalma",
                    images: ["images/dalma1.jpg", "images/dalma2.jpg"],
                    description: "A traditional Odia dish made with lentils and vegetables."
                }
            ],
            hotels: [
                {
                    name: "Sarafgarh Eco Lodge",
                    images: ["images/sarafgarh_lodge1.jpg", "images/sarafgarh_lodge2.jpg"],
                    rating: 4.2,
                    price: "₹3,600",
                    location: "https://maps.app.goo.gl/SarafgarhLodge",
                    address: "Sarafgarh Nature Camp, Balangir"
                }
            ]
        }
    }
},

               "Balasore": {
    image: "images/balasore.jpg",
    touristPlaces: {
        "Kuldiha Rissia Nature Camp": {
            images: ["images/kuldiha1.jpg", "images/kuldiha2.jpg", "images/kuldiha3.jpg", "images/kuldiha1.jpg", "images/kuldiha2.jpg", "images/kuldiha3.jpg"],
            videos: ["https://www.youtube.com/embed/kuldiha_video1", "https://www.youtube.com/embed/kuldiha_video2"],
            description: "Located in Kuldiha Wildlife Sanctuary, this nature camp offers forest experiences, wildlife sightings, and bird watching.",
            location: "https://maps.app.goo.gl/xyzKuldiha",
            foods: [
                { 
                    name: "Dalma", 
                    images: ["images/dalma1.jpg", "images/dalma2.jpg"],
                    description: "A traditional Odia dish made with lentils and vegetables."
                }
            ],
            hotels: [
                { 
                    name: "Kuldiha Forest Resort", 
                    images: ["images/kuldiha_resort1.jpg", "images/kuldiha_resort2.jpg"],
                    rating: 4.5,
                    price: "₹2,500/night",
                    location: "https://maps.app.goo.gl/kuldihaResort",
                    address: "Kuldiha, Balasore, Odisha"
                }
            ]
        },
        "Bichitrapur Nature Camp": {
            images: ["images/bichitrapur1.jpg", "images/bichitrapur2.jpg", "images/bichitrapur3.jpg", "images/bichitrapur1.jpg", "images/bichitrapur2.jpg", "images/bichitrapur3.jpg"],
            videos: ["https://www.youtube.com/embed/bichitrapur_video1", "https://www.youtube.com/embed/bichitrapur_video2"],
            description: "Located near the Subarnarekha River mouth, this camp is famous for mangroves, mudflats, and bird watching.",
            location: "https://maps.app.goo.gl/xyzBichitrapur",
            foods: [
                { 
                    name: "Crab Curry", 
                    images: ["images/crab_curry1.jpg", "images/crab_curry2.jpg"],
                    description: "A spicy seafood delicacy popular in coastal Odisha."
                }
            ],
            hotels: [
                { 
                    name: "Bichitrapur Eco Resort", 
                    images: ["images/bichitrapur_resort1.jpg", "images/bichitrapur_resort2.jpg"],
                    rating: 4.6,
                    price: "₹3,000/night",
                    location: "https://maps.app.goo.gl/bichitrapurResort",
                    address: "Bichitrapur, Balasore, Odisha"
                }
            ]
        },
        "Chandipur Nature Camp": {
            images: ["images/chandipur1.jpg", "images/chandipur2.jpg", "images/chandipur3.jpg", "images/chandipur1.jpg", "images/chandipur2.jpg", "images/chandipur3.jpg"],
            videos: ["https://www.youtube.com/embed/chandipur_video1", "https://www.youtube.com/embed/chandipur_video2"],
            description: "Famous for its receding sea beach, Chandipur Nature Camp offers scenic views, calm tides, and eco-friendly stays.",
            location: "https://maps.app.goo.gl/xyzChandipur",
            foods: [
                { 
                    name: "Fish Fry", 
                    images: ["images/fish_fry1.jpg", "images/fish_fry2.jpg"],
                    description: "Freshly caught and fried fish, a staple in coastal Odisha."
                }
            ],
            hotels: [
                { 
                    name: "Chandipur Sea View Resort", 
                    images: ["images/chandipur_resort1.jpg", "images/chandipur_resort2.jpg"],
                    rating: 4.4,
                    price: "₹2,800/night",
                    location: "https://maps.app.goo.gl/chandipurResort",
                    address: "Chandipur, Balasore, Odisha"
                }
            ]
        },
        "Galaxy Nature Camp": {
            images: ["images/galaxy1.jpg", "images/galaxy2.jpg", "images/galaxy3.jpg", "images/galaxy1.jpg", "images/galaxy2.jpg", "images/galaxy3.jpg"],
            videos: ["https://www.youtube.com/embed/galaxy_video1", "https://www.youtube.com/embed/galaxy_video2"],
            description: "Situated on Dublagadi Beach, this beachside camp offers tents/cottages amidst casuarina forests and peaceful surroundings.",
            location: "https://maps.app.goo.gl/xyzGalaxy",
            foods: [
                { 
                    name: "Prawn Curry", 
                    images: ["images/prawn_curry1.jpg", "images/prawn_curry2.jpg"],
                    description: "A flavorful dish made with fresh prawns and local spices."
                }
            ],
            hotels: [
                { 
                    name: "Galaxy Beach Resort", 
                    images: ["images/galaxy_resort1.jpg", "images/galaxy_resort2.jpg"],
                    rating: 4.7,
                    price: "₹3,200/night",
                    location: "https://maps.app.goo.gl/galaxyResort",
                    address: "Dublagadi, Balasore, Odisha"
                }
            ]
        },
        "My Eco Camp": {
            images: ["images/myeco1.jpg", "images/myeco2.jpg", "images/myeco3.jpg", "images/myeco1.jpg", "images/myeco2.jpg", "images/myeco3.jpg"],
            videos: ["https://www.youtube.com/embed/myeco_video1", "https://www.youtube.com/embed/myeco_video2"],
            description: "Located at Bagda Beach, this nature camp is ideal for those seeking solitude and ocean breeze in eco-friendly setups.",
            location: "https://maps.app.goo.gl/xyzMyEco",
            foods: [
                { 
                    name: "Chingudi Malai Curry", 
                    images: ["images/chingudi1.jpg", "images/chingudi2.jpg"],
                    description: "A creamy prawn curry cooked with coconut milk, a delicacy in Odisha."
                }
            ],
            hotels: [
                { 
                    name: "My Eco Beach Resort", 
                    images: ["images/myeco_resort1.jpg", "images/myeco_resort2.jpg"],
                    rating: 4.5,
                    price: "₹2,900/night",
                    location: "https://maps.app.goo.gl/myecoResort",
                    address: "Bagda Beach, Balasore, Odisha"
                }
            ]
        }
    }
},

  "Bargarh": {
    image: "images/bargarh.jpg",
    touristPlaces: {
        "Gandhamardan Nature Camp": {
            images: [
                "images/gandhamardan1.jpg", "images/gandhamardan2.jpg", "images/gandhamardan3.jpg",
                "images/gandhamardan1.jpg", "images/gandhamardan2.jpg", "images/gandhamardan3.jpg"
            ],
            videos: [
                "https://www.youtube.com/embed/gandhamardan_video1",
                "https://www.youtube.com/embed/gandhamardan_video2"
            ],
            description: "Nestled in the Gandhamardan Hills, this nature camp offers spiritual serenity, rich biodiversity, and a connection to the Ramayana legend.",
            location: "https://maps.app.goo.gl/GandhamardanHills",
            foods: [
                {
                    name: "Pakhal Bhata",
                    images: ["images/pakhal1.jpg", "images/pakhal2.jpg"],
                    description: "A fermented rice dish served cold, popular across Odisha especially during summer."
                }
            ],
            hotels: [
                {
                    name: "Gandhamardan Eco Stay",
                    images: ["images/gandhamardan_resort1.jpg", "images/gandhamardan_resort2.jpg"],
                    rating: 4.6,
                    price: "₹2,400/night",
                    location: "https://maps.app.goo.gl/gandhamardanResort",
                    address: "Nrusinghanath, Gandhamardan Hills, Bargarh, Odisha"
                }
            ]
        },
        "Debrigarh Nature Camp": {
            images: [
                "images/debrigarh1.jpg", "images/debrigarh2.jpg", "images/debrigarh3.jpg",
                "images/debrigarh1.jpg", "images/debrigarh2.jpg", "images/debrigarh3.jpg"
            ],
            videos: [
                "https://www.youtube.com/embed/debrigarh_video1",
                "https://www.youtube.com/embed/debrigarh_video2"
            ],
            description: "Located within the Debrigarh Wildlife Sanctuary, this nature camp is ideal for spotting wildlife, enjoying the scenic Hirakud reservoir, and relaxing in eco-cottages.",
            location: "https://maps.app.goo.gl/DebrigarhNatureCamp",
            foods: [
                {
                    name: "Macha Besara",
                    images: ["images/macha_besara1.jpg", "images/macha_besara2.jpg"],
                    description: "Traditional Odia fish curry cooked with mustard paste and local spices."
                }
            ],
            hotels: [
                {
                    name: "Debrigarh Nature Camp Cottages",
                    images: ["images/debrigarh_resort1.jpg", "images/debrigarh_resort2.jpg"],
                    rating: 4.4,
                    price: "₹3,000/night",
                    location: "https://maps.app.goo.gl/debrigarhResort",
                    address: "Debrigarh Wildlife Sanctuary, Bargarh, Odisha"
                }
            ]
        }
    }
},


              "Bhadrak": {
    image: "images/bhadrak.jpg",
    touristPlaces: {
        "Aradi Nature Camp": {
            images: [
                "images/aradi1.jpg", "images/aradi2.jpg", "images/aradi3.jpg",
                "images/aradi1.jpg", "images/aradi2.jpg", "images/aradi3.jpg"
            ],
            videos: [
                "https://www.youtube.com/embed/aradi_video1",
                "https://www.youtube.com/embed/aradi_video2"
            ],
            description: "Located near the banks of the Baitarani River, Aradi Nature Camp is known for its proximity to the sacred Akhandalamani Temple and its peaceful riverside environment rich in natural beauty.",
            location: "https://maps.app.goo.gl/AradiNatureCamp",
            foods: [
                {
                    name: "Chhatu Besara",
                    images: ["images/chhatu1.jpg", "images/chhatu2.jpg"],
                    description: "A spicy and tangy mushroom curry made with mustard paste, a local delicacy in Bhadrak."
                }
            ],
            hotels: [
                {
                    name: "Aradi Eco Retreat",
                    images: ["images/aradi_resort1.jpg", "images/aradi_resort2.jpg"],
                    rating: 4.5,
                    price: "₹2,800/night",
                    location: "https://maps.app.goo.gl/aradiecoretreat",
                    address: "Near Akhandalamani Temple, Aradi, Bhadrak, Odisha"
                }
            ]
        }
    }
},

"Boudh": {
    image: "images/boudh.jpg",
    touristPlaces: {
        "Purunakatak Nature Camp": {
            images: [
                "images/purunakatak1.jpg", "images/purunakatak2.jpg", "images/purunakatak3.jpg",
                "images/purunakatak1.jpg", "images/purunakatak2.jpg", "images/purunakatak3.jpg"
            ],
            videos: [
                "https://www.youtube.com/embed/purunakatak_video1",
                "https://www.youtube.com/embed/purunakatak_video2"
            ],
            description: "Surrounded by lush forests and the Satkosia range, Purunakatak Nature Camp in Boudh offers eco-cottages, birdwatching, and an immersive forest experience in the heart of Odisha.",
            location: "https://maps.app.goo.gl/PurunakatakNatureCamp",
            foods: [
                {
                    name: "Chhena Jhili",
                    images: ["images/chhena_jhili1.jpg", "images/chhena_jhili2.jpg"],
                    description: "A sweet dish made from fresh cheese soaked in sugar syrup, popular in Boudh and neighboring regions."
                }
            ],
            hotels: [
                {
                    name: "Purunakatak Eco Camp Cottages",
                    images: ["images/purunakatak_resort1.jpg", "images/purunakatak_resort2.jpg"],
                    rating: 4.3,
                    price: "₹2,200/night",
                    location: "https://maps.app.goo.gl/purunakatakResort",
                    address: "Purunakatak Forest Area, Boudh, Odisha"
                }
            ]
        }
    }
},

"Cuttack": {
    image: "images/cuttack.jpg",
    touristPlaces: {
        "Ansupa Nature Camp": {
            images: [
                "images/ansupa1.jpg", "images/ansupa2.jpg", "images/ansupa3.jpg",
                "images/ansupa1.jpg", "images/ansupa2.jpg", "images/ansupa3.jpg"
            ],
            videos: [
                "https://www.youtube.com/embed/ansupa_video1",
                "https://www.youtube.com/embed/ansupa_video2"
            ],
            description: "Located beside the serene Ansupa Lake and surrounded by the Saranda Hills, Ansupa Nature Camp is perfect for birdwatching, boating, and eco-friendly stays close to nature.",
            location: "https://maps.app.goo.gl/AnsupaNatureCamp",
            foods: [
                {
                    name: "Dahi Pakhala",
                    images: ["images/dahi_pakhala1.jpg", "images/dahi_pakhala2.jpg"],
                    description: "A traditional Odia dish made with fermented rice and curd, served with fried or mashed vegetables."
                }
            ],
            hotels: [
                {
                    name: "Ansupa Eco Retreat",
                    images: ["images/ansupa_resort1.jpg", "images/ansupa_resort2.jpg"],
                    rating: 4.5,
                    price: "₹3,000/night",
                    location: "https://maps.app.goo.gl/ansuparetreat",
                    address: "Ansupa Lake, Banki, Cuttack, Odisha"
                }
            ]
        },

        "Dhabaleswar Island Retreat": {
            images: [
                "images/dhabaleswar1.jpg", "images/dhabaleswar2.jpg", "images/dhabaleswar3.jpg",
                "images/dhabaleswar1.jpg", "images/dhabaleswar2.jpg", "images/dhabaleswar3.jpg"
            ],
            videos: [
                "https://www.youtube.com/embed/dhabaleswar_video1",
                "https://www.youtube.com/embed/dhabaleswar_video2"
            ],
            description: "Located on an island in the Mahanadi River, Dhabaleswar offers spiritual tranquility, riverfront views, and a hanging bridge connecting to nature.",
            location: "https://maps.app.goo.gl/DhabaleswarIsland",
            foods: [
                {
                    name: "Santula",
                    images: ["images/santula1.jpg", "images/santula2.jpg"],
                    description: "A healthy, boiled vegetable dish with mild seasoning, common in Odia households."
                }
            ],
            hotels: [
                {
                    name: "Dhabaleswar River Lodge",
                    images: ["images/dhabaleswar_resort1.jpg", "images/dhabaleswar_resort2.jpg"],
                    rating: 4.2,
                    price: "₹2,000/night",
                    location: "https://maps.app.goo.gl/dhabaleswarresort",
                    address: "Near Hanging Bridge, Dhabaleswar Island, Cuttack, Odisha"
                }
            ]
        },

        "Naraj Barrage Riverside Camp": {
            images: [
                "images/naraj1.jpg", "images/naraj2.jpg", "images/naraj3.jpg",
                "images/naraj1.jpg", "images/naraj2.jpg", "images/naraj3.jpg"
            ],
            videos: [
                "https://www.youtube.com/embed/naraj_video1",
                "https://www.youtube.com/embed/naraj_video2"
            ],
            description: "A scenic location where Mahanadi splits into distributaries, Naraj is popular for its sunrise and riverside views—ideal for informal picnics and nature photography.",
            location: "https://maps.app.goo.gl/NarajBarrage",
            foods: [
                {
                    name: "Dalma",
                    images: ["images/dalma1.jpg", "images/dalma2.jpg"],
                    description: "A nutritious dish made of lentils and vegetables, seasoned with roasted cumin and ghee."
                }
            ],
            hotels: [
                {
                    name: "Naraj River View Cottage",
                    images: ["images/naraj_resort1.jpg", "images/naraj_resort2.jpg"],
                    rating: 4.0,
                    price: "₹1,800/night",
                    location: "https://maps.app.goo.gl/narajresort",
                    address: "Naraj Dam Road, Cuttack, Odisha"
                }
            ]
        }
    }
},

 "Deogarh": {
    image: "images/deogarh.jpg",
    touristPlaces: {
        "Pradhanpat Nature Camp": {
            images: [
                "images/pradhanpat1.jpg", "images/pradhanpat2.jpg", "images/pradhanpat3.jpg",
                "images/pradhanpat1.jpg", "images/pradhanpat2.jpg", "images/pradhanpat3.jpg"
            ],
            videos: [
                "https://www.youtube.com/embed/pradhanpat_video1",
                "https://www.youtube.com/embed/pradhanpat_video2"
            ],
            description: "Located beside the enchanting Pradhanpat Waterfall, this nature camp offers scenic beauty, tranquil forest trails, and eco-friendly stays.",
            location: "https://maps.app.goo.gl/PradhanpatNatureCamp",
            foods: [
                {
                    name: "Chhatu Besara",
                    images: ["images/chhatu_besara1.jpg", "images/chhatu_besara2.jpg"],
                    description: "A flavorful mushroom dish cooked in mustard paste, a delicacy in western Odisha."
                }
            ],
            hotels: [
                {
                    name: "Pradhanpat Eco Retreat",
                    images: ["images/pradhanpat_resort1.jpg", "images/pradhanpat_resort2.jpg"],
                    rating: 4.4,
                    price: "₹2,500/night",
                    location: "https://maps.app.goo.gl/pradhanpatresort",
                    address: "Near Pradhanpat Waterfall, Deogarh, Odisha"
                }
            ]
        },

        "Kurudkut Waterfall Retreat": {
            images: [
                "images/kurudkut1.jpg", "images/kurudkut2.jpg", "images/kurudkut3.jpg",
                "images/kurudkut1.jpg", "images/kurudkut2.jpg", "images/kurudkut3.jpg"
            ],
            videos: [
                "https://www.youtube.com/embed/kurudkut_video1",
                "https://www.youtube.com/embed/kurudkut_video2"
            ],
            description: "A historic site featuring Odisha's first hydroelectric plant and lush greenery, Kurudkut Waterfall is perfect for nature lovers and trekkers.",
            location: "https://maps.app.goo.gl/KurudkutWaterfall",
            foods: [
                {
                    name: "Besi Pakhala",
                    images: ["images/besi_pakhala1.jpg", "images/besi_pakhala2.jpg"],
                    description: "A dry version of fermented rice, served with roasted vegetables and mashed potatoes."
                }
            ],
            hotels: [
                {
                    name: "Kurudkut Forest Cottage",
                    images: ["images/kurudkut_resort1.jpg", "images/kurudkut_resort2.jpg"],
                    rating: 4.2,
                    price: "₹2,200/night",
                    location: "https://maps.app.goo.gl/kurudkutresort",
                    address: "Kurudkut Falls Area, Deogarh, Odisha"
                }
            ]
        },

        "Darjing Hills & Picnic Spot": {
            images: [
                "images/darjing1.jpg", "images/darjing2.jpg", "images/darjing3.jpg",
                "images/darjing1.jpg", "images/darjing2.jpg", "images/darjing3.jpg"
            ],
            videos: [
                "https://www.youtube.com/embed/darjing_video1",
                "https://www.youtube.com/embed/darjing_video2"
            ],
            description: "Set beside the Brahmani River, Darjing is a peaceful picnic and nature getaway surrounded by rolling hills and thick forests.",
            location: "https://maps.app.goo.gl/DarjingHills",
            foods: [
                {
                    name: "Saaga Bhaja",
                    images: ["images/saaga1.jpg", "images/saaga2.jpg"],
                    description: "Fried leafy greens, a healthy and delicious side dish in Odia cuisine."
                }
            ],
            hotels: [
                {
                    name: "Darjing River Resort",
                    images: ["images/darjing_resort1.jpg", "images/darjing_resort2.jpg"],
                    rating: 4.1,
                    price: "₹2,000/night",
                    location: "https://maps.app.goo.gl/darjingresort",
                    address: "Near Darjing Picnic Ground, Deogarh, Odisha"
                }
            ]
        }
    }
},

              "Dhenkanal": {
    image: "images/dhenkanal.jpg",
    touristPlaces: {
        "Sapua Dam Nature Spot": {
            images: [
                "images/sapua1.jpg", "images/sapua2.jpg", "images/sapua3.jpg",
                "images/sapua1.jpg", "images/sapua2.jpg", "images/sapua3.jpg"
            ],
            videos: [
                "https://www.youtube.com/embed/sapua_video1",
                "https://www.youtube.com/embed/sapua_video2"
            ],
            description: "Shaped like a coiled snake when viewed from above, Sapua Dam is a hidden gem surrounded by forested hills and known for its scenic beauty.",
            location: "https://maps.app.goo.gl/SapuaDamDhenkanal",
            foods: [
                {
                    name: "Chenna Poda",
                    images: ["images/chenna_poda1.jpg", "images/chenna_poda2.jpg"],
                    description: "A signature dessert of Dhenkanal made of roasted cheese and sugar."
                }
            ],
            hotels: [
                {
                    name: "Sapua Forest View Stay",
                    images: ["images/sapua_stay1.jpg", "images/sapua_stay2.jpg"],
                    rating: 4.3,
                    price: "₹2,200/night",
                    location: "https://maps.app.goo.gl/sapuaforeststay",
                    address: "Near Sapua Dam, Hindol Block, Dhenkanal, Odisha"
                }
            ]
        },

        "Kapilash Forest Retreat": {
            images: [
                "images/kapilash1.jpg", "images/kapilash2.jpg", "images/kapilash3.jpg",
                "images/kapilash1.jpg", "images/kapilash2.jpg", "images/kapilash3.jpg"
            ],
            videos: [
                "https://www.youtube.com/embed/kapilash_video1",
                "https://www.youtube.com/embed/kapilash_video2"
            ],
            description: "Nestled in the Kapilash hills, this retreat is close to the famous Kapilash Temple and surrounded by thick sal forests perfect for nature walks and meditation.",
            location: "https://maps.app.goo.gl/KapilashTempleAndForest",
            foods: [
                {
                    name: "Dalma",
                    images: ["images/dalma1.jpg", "images/dalma2.jpg"],
                    description: "A nourishing lentil and vegetable stew that’s an Odia staple."
                }
            ],
            hotels: [
                {
                    name: "Kapilash Eco Lodge",
                    images: ["images/kapilash_lodge1.jpg", "images/kapilash_lodge2.jpg"],
                    rating: 4.5,
                    price: "₹2,800/night",
                    location: "https://maps.app.goo.gl/kapilashecostay",
                    address: "Near Kapilash Temple, Dhenkanal, Odisha"
                }
            ]
        },

        "Saptasajya Nature Camp": {
            images: [
                "images/saptasajya1.jpg", "images/saptasajya2.jpg", "images/saptasajya3.jpg",
                "images/saptasajya1.jpg", "images/saptasajya2.jpg", "images/saptasajya3.jpg"
            ],
            videos: [
                "https://www.youtube.com/embed/saptasajya_video1",
                "https://www.youtube.com/embed/saptasajya_video2"
            ],
            description: "Surrounded by hills and dense forest, Saptasajya is a sacred and serene site believed to be connected to the Ramayana. Ideal for eco-tourism and hiking.",
            location: "https://maps.app.goo.gl/SaptasajyaDhenkanal",
            foods: [
                {
                    name: "Pakhala Bhata",
                    images: ["images/pakhala1.jpg", "images/pakhala2.jpg"],
                    description: "A cooling dish of fermented rice, served with mashed vegetables and fried sides."
                }
            ],
            hotels: [
                {
                    name: "Saptasajya Nature Camp Cottages",
                    images: ["images/saptasajya_resort1.jpg", "images/saptasajya_resort2.jpg"],
                    rating: 4.6,
                    price: "₹2,600/night",
                    location: "https://maps.app.goo.gl/saptasajyacamp",
                    address: "Saptasajya Hills, Dhenkanal, Odisha"
                }
            ]
        }
    }
},

"Gajapati": {
    image: "images/gajapati.jpg",
    touristPlaces: {
        "Gandahati Nature Camp": {
            images: ["images/gandahati1.jpg", "images/gandahati2.jpg", "images/gandahati3.jpg", "images/gandahati4.jpg", "images/gandahati5.jpg", "images/gandahati6.jpg"],
            videos: ["https://www.youtube.com/embed/example1", "https://www.youtube.com/embed/example2"],
            description: "Located near the Gandahati Waterfall, this eco-tourism site is known for its lush greenery, serene environment, and elephant sightings.",
            location: "https://goo.gl/maps/gandahati",
            foods: [
                { 
                    name: "Odisha Thali", 
                    images: ["images/odisha-thali1.jpg", "images/odisha-thali2.jpg"],
                    description: "A traditional Odia meal featuring rice, dal, mixed vegetables, and sweet dishes."
                }
            ],
            hotels: [
                { 
                    name: "Gandahati Eco Retreat", 
                    images: ["images/gandahati-hotel1.jpg", "images/gandahati-hotel2.jpg"],
                    rating: 4.5,
                    price: "₹3,000/night",
                    location: "https://goo.gl/maps/gandahati-eco-retreat",
                    address: "Near Gandahati Waterfall, Gajapati"
                }
            ]
        },
        "Mahendragiri Nature Camp": {
            images: ["images/mahendragiri1.jpg", "images/mahendragiri2.jpg", "images/mahendragiri3.jpg", "images/mahendragiri4.jpg", "images/mahendragiri5.jpg", "images/mahendragiri6.jpg"],
            videos: ["https://www.youtube.com/embed/example3", "https://www.youtube.com/embed/example4"],
            description: "Nestled in the Eastern Ghats, Mahendragiri is rich in biodiversity and mythology, offering trekking, panoramic views, and historic temples.",
            location: "https://goo.gl/maps/mahendragiri",
            foods: [
                { 
                    name: "Mudhi Mansa", 
                    images: ["images/mudhi-mansa1.jpg", "images/mudhi-mansa2.jpg"],
                    description: "A popular Odia dish made with puffed rice and spicy mutton curry."
                }
            ],
            hotels: [
                { 
                    name: "Mahendragiri Hill Camp", 
                    images: ["images/mahendragiri-hotel1.jpg", "images/mahendragiri-hotel2.jpg"],
                    rating: 4.3,
                    price: "₹2,500/night",
                    location: "https://goo.gl/maps/mahendragiri-hill-camp",
                    address: "Base of Mahendragiri Hills, Gajapati"
                }
            ]
        }
    }
},

            "Ganjam": {
    image: "images/ganjam.jpg",
    touristPlaces: {
        "Taptapani Nature Camp": {
            images: ["images/taptapani1.jpg", "images/taptapani2.jpg", "images/taptapani3.jpg", "images/taptapani4.jpg", "images/taptapani5.jpg", "images/taptapani6.jpg"],
            videos: ["https://www.youtube.com/embed/example7", "https://www.youtube.com/embed/example8"],
            description: "Known for its hot sulfur springs and lush forest surroundings, Taptapani is a peaceful retreat with cultural and tribal significance.",
            location: "https://goo.gl/maps/taptapani",
            foods: [
                {
                    name: "Pakhal Bhata",
                    images: ["images/pakhal1.jpg", "images/pakhal2.jpg"],
                    description: "A traditional Odia dish made of fermented rice served with fried or mashed vegetables."
                }
            ],
            hotels: [
                {
                    name: "Taptapani Panthanivas",
                    images: ["images/taptapani-hotel1.jpg", "images/taptapani-hotel2.jpg"],
                    rating: 4.4,
                    price: "₹2,800/night",
                    location: "https://goo.gl/maps/taptapani-panthanivas",
                    address: "Near Hot Spring, Taptapani, Ganjam"
                }
            ]
        },
        "Chilika Nature Camp (Rambha Bay)": {
            images: ["images/chilika1.jpg", "images/chilika2.jpg", "images/chilika3.jpg", "images/chilika4.jpg", "images/chilika5.jpg", "images/chilika6.jpg"],
            videos: ["https://www.youtube.com/embed/example9", "https://www.youtube.com/embed/example10"],
            description: "Located on the banks of Chilika Lake, Rambha Nature Camp is famous for birdwatching, boating, and scenic lake views.",
            location: "https://goo.gl/maps/chilika-rambha",
            foods: [
                {
                    name: "Chilika Crab Curry",
                    images: ["images/crab-curry1.jpg", "images/crab-curry2.jpg"],
                    description: "Local delicacy made from freshly caught crabs from Chilika Lake."
                }
            ],
            hotels: [
                {
                    name: "Eco Retreat Chilika (Rambha)",
                    images: ["images/chilika-hotel1.jpg", "images/chilika-hotel2.jpg"],
                    rating: 4.6,
                    price: "₹6,500/night",
                    location: "https://goo.gl/maps/eco-retreat-chilika",
                    address: "Rambha Bay, Chilika Lake, Ganjam"
                }
            ]
        },
        "Tampara Nature Camp": {
            images: ["images/tampara1.jpg", "images/tampara2.jpg", "images/tampara3.jpg", "images/tampara4.jpg", "images/tampara5.jpg", "images/tampara6.jpg"],
            videos: ["https://www.youtube.com/embed/example11", "https://www.youtube.com/embed/example12"],
            description: "Situated on the banks of the Tampara freshwater lake, this camp offers pedal boating, speed boating, and a relaxing lakeside environment.",
            location: "https://goo.gl/maps/tampara",
            foods: [
                {
                    name: "Fish Curry & Rice",
                    images: ["images/fish-curry1.jpg", "images/fish-curry2.jpg"],
                    description: "Fresh fish from the lake prepared in traditional Odia style."
                }
            ],
            hotels: [
                {
                    name: "Tampara Lake View Resort",
                    images: ["images/tampara-hotel1.jpg", "images/tampara-hotel2.jpg"],
                    rating: 4.2,
                    price: "₹2,200/night",
                    location: "https://goo.gl/maps/tampara-resort",
                    address: "Tampara Lake Road, Chatrapur, Ganjam"
                }
            ]
        },
        "Narayani Nature Camp": {
            images: ["images/narayani1.jpg", "images/narayani2.jpg", "images/narayani3.jpg", "images/narayani4.jpg", "images/narayani5.jpg", "images/narayani6.jpg"],
            videos: ["https://www.youtube.com/embed/example13", "https://www.youtube.com/embed/example14"],
            description: "Located near the Narayani Temple and forest, this nature camp offers forest trails, birdwatching, and spiritual retreats.",
            location: "https://goo.gl/maps/narayani",
            foods: [
                {
                    name: "Dalma",
                    images: ["images/dalma1.jpg", "images/dalma2.jpg"],
                    description: "A healthy Odia dish made of lentils and vegetables cooked together with minimal spices."
                }
            ],
            hotels: [
                {
                    name: "Narayani Eco Retreat",
                    images: ["images/narayani-hotel1.jpg", "images/narayani-hotel2.jpg"],
                    rating: 4.3,
                    price: "₹2,400/night",
                    location: "https://goo.gl/maps/narayani-eco",
                    address: "Narayani Forest Area, Ganjam"
                }
            ]
        }
    }
},

"Jagatsinghapur": {
    "image": "images/jagatsinghpur.jpg",
    "touristPlaces": {
        "Siali Sea Beach": {
            "images": ["images/siali1.jpg", "images/siali2.jpg", "images/siali3.jpg", "images/siali4.jpg", "images/siali5.jpg", "images/siali6.jpg"],
            "videos": ["https://www.youtube.com/embed/RPTAN_JSRa4"],
            "description": "Siali Sea Beach is a serene and clean beach located approximately 46 km from Jagatsinghpur. Known for its golden sands, casuarina vegetation, and tranquil environment, it's an ideal spot for relaxation and picnics.",
            "location": "https://goo.gl/maps/SialiSeaBeach",
            "foods": [
                {
                    "name": "Fresh Seafood",
                    "images": ["images/seafood1.jpg", "images/seafood2.jpg"],
                    "description": "Local delicacies featuring freshly caught fish and crabs, prepared in traditional Odia style."
                }
            ],
            "hotels": [
                {
                    "name": "Anvy Beach Resort",
                    "images": ["images/anvy1.jpg", "images/anvy2.jpg"],
                    "rating": 4.5,
                    "price": "₹3,500/night",
                    "location": "https://goo.gl/maps/AnvyBeachResort",
                    "address": "Siali Sea Beach, Jagatsinghpur, Odisha"
                }
            ]
        }
    }
},

 "Jajpur": {
    "image": "images/jajpur.jpg",
    "touristPlaces": {
        "Olasuni Nature Camp": {
            "images": [
                "images/olasuni1.jpg",
                "images/olasuni2.jpg",
                "images/olasuni3.jpg",
                "images/olasuni4.jpg",
                "images/olasuni5.jpg",
                "images/olasuni6.jpg"
            ],
            "videos": [
                "https://www.youtube.com/embed/vSBUd9YHVzs"
            ],
            "description": "Olasuni Nature Camp is situated on the scenic slopes of Olasuni Hill, near the ashram of Saint Arakhita Das. This location is renowned for its spiritual significance and natural beauty, offering visitors a serene environment for relaxation and exploration.",
            "location": "https://goo.gl/maps/OlasuniNatureCamp",
            "foods": [
                {
                    "name": "Podapitha",
                    "images": [
                        "images/podapitha1.jpg",
                        "images/podapitha2.jpg"
                    ],
                    "description": "A traditional Odia baked rice cake, often prepared during festivals and special occasions."
                }
            ],
            "hotels": [
                {
                    "name": "Olasuni Nature Camp Cottages",
                    "images": [
                        "images/olasuni-cottage1.jpg",
                        "images/olasuni-cottage2.jpg"
                    ],
                    "rating": 4.5,
                    "price": "₹1,500/night",
                    "location": "https://goo.gl/maps/OlasuniNatureCamp",
                    "address": "Olasuni Hill, Jajpur, Odisha"
                }
            ]
        },
        "Mahavinayak Nature Camp": {
            "images": [
                "images/mahavinayak1.jpg",
                "images/mahavinayak2.jpg",
                "images/mahavinayak3.jpg",
                "images/mahavinayak4.jpg",
                "images/mahavinayak5.jpg",
                "images/mahavinayak6.jpg"
            ],
            "videos": [
                "https://www.youtube.com/embed/5U3y0l_jurY"
            ],
            "description": "Located near the Mahavinayak Shiva Temple in Chandikhol, Mahavinayak Nature Camp offers a tranquil retreat amidst lush greenery and rolling hills. It's an ideal spot for nature enthusiasts and spiritual seekers alike.",
            "location": "https://goo.gl/maps/MahavinayakNatureCamp",
            "foods": [
                {
                    "name": "Dalma",
                    "images": [
                        "images/dalma1.jpg",
                        "images/dalma2.jpg"
                    ],
                    "description": "A wholesome Odia dish made with lentils and vegetables, seasoned with traditional spices."
                }
            ],
            "hotels": [
                {
                    "name": "Mahavinayak Nature Camp Cottages",
                    "images": [
                        "images/mahavinayak-cottage1.jpg",
                        "images/mahavinayak-cottage2.jpg"
                    ],
                    "rating": 4.3,
                    "price": "₹1,200/night",
                    "location": "https://goo.gl/maps/MahavinayakNatureCamp",
                    "address": "Chandikhol, Jajpur, Odisha"
                }
            ]
        }
    }
},

 "Jharsuguda": {
    "image": "images/jharsuguda.jpg",
    "touristPlaces": {
        "Sarafgarh Nature Camp": {
            "images": [
                "images/sarafgarh1.jpg",
                "images/sarafgarh2.jpg",
                "images/sarafgarh3.jpg",
                "images/sarafgarh4.jpg",
                "images/sarafgarh5.jpg",
                "images/sarafgarh6.jpg"
            ],
            "videos": [
                "https://www.youtube.com/embed/sarafgarh_video1",
                "https://www.youtube.com/embed/sarafgarh_video2"
            ],
            "description": "Sarafgarh Nature Camp is nestled on the banks of the Sarafgarh Dam and Reservoir, surrounded by pristine forests. It offers a serene environment for nature enthusiasts, with opportunities for bird watching, boating, and exploring nearby attractions like the Ushakothi caves and Koili Ghughar waterfall.",
            "location": "https://goo.gl/maps/sarafgarh",
            "foods": [
                {
                    "name": "Traditional Odia Cuisine",
                    "images": [
                        "images/odia_food1.jpg",
                        "images/odia_food2.jpg"
                    ],
                    "description": "Experience authentic Odia flavors with dishes prepared using local ingredients, offering a taste of the region's rich culinary heritage."
                }
            ],
            "hotels": [
                {
                    "name": "Sarafgarh Nature Camp Cottages",
                    "images": [
                        "images/sarafgarh_cottage1.jpg",
                        "images/sarafgarh_cottage2.jpg"
                    ],
                    "rating": 4.5,
                    "price": "₹4,952/night",
                    "location": "https://goo.gl/maps/sarafgarh_cottages",
                    "address": "Sarafgarh Dam, Jharsuguda, Odisha"
                }
            ]
        },
        "Koilighugar Waterfall": {
            "images": [
                "images/koilighugar1.jpg",
                "images/koilighugar2.jpg",
                "images/koilighugar3.jpg",
                "images/koilighugar4.jpg",
                "images/koilighugar5.jpg",
                "images/koilighugar6.jpg"
            ],
            "videos": [
                "https://www.youtube.com/embed/koilighugar_video1",
                "https://www.youtube.com/embed/koilighugar_video2"
            ],
            "description": "Koilighugar Waterfall, located near the village of Kushmelbahal in Lakhanpur, is a picturesque 200-foot cascade formed by the Ahiraj rivulet. The site is not only a natural wonder but also holds religious significance due to the submerged Shivalingam known as Maheswarnath.",
            "location": "https://goo.gl/maps/koilighugar",
            "foods": [
                {
                    "name": "Local Snacks",
                    "images": [
                        "images/local_snack1.jpg",
                        "images/local_snack2.jpg"
                    ],
                    "description": "Enjoy local snacks and refreshments available near the waterfall, offering a quick bite amidst nature."
                }
            ],
            "hotels": [
                {
                    "name": "Nearby Lodges",
                    "images": [
                        "images/lodge1.jpg",
                        "images/lodge2.jpg"
                    ],
                    "rating": 4.0,
                    "price": "₹1,200/night",
                    "location": "https://goo.gl/maps/nearby_lodges",
                    "address": "Lakhanpur, Jharsuguda, Odisha"
                }
            ]
        }
    }
},

"Kalahandi": {
    "image": "images/kalahandi.jpg",
    "touristPlaces": {
        "Rabandhara Nature Camp": {
            "images": [
                "images/rabandhara1.jpg",
                "images/rabandhara2.jpg",
                "images/rabandhara3.jpg",
                "images/rabandhara4.jpg",
                "images/rabandhara5.jpg",
                "images/rabandhara6.jpg"
            ],
            "videos": [
                "https://www.youtube.com/embed/33a0_7P-Sgs"
            ],
            "description": "Rabandhara Nature Camp is located approximately 10 km from Bhawanipatna, nestled amidst dense forests. The camp offers eco-friendly accommodations and provides opportunities for nature walks, bird watching, and exploring nearby attractions like the Rabandhara Waterfall and Manikeswari Temple.",
            "location": "https://goo.gl/maps/rabandhara",
            "foods": [
                {
                    "name": "Local Odia Cuisine",
                    "images": [
                        "images/odia_food1.jpg",
                        "images/odia_food2.jpg"
                    ],
                    "description": "Experience traditional Odia dishes prepared with locally sourced ingredients, offering a taste of the region's rich culinary heritage."
                }
            ],
            "hotels": [
                {
                    "name": "Rabandhara Eco Cottages",
                    "images": [
                        "images/rabandhara_cottage1.jpg",
                        "images/rabandhara_cottage2.jpg"
                    ],
                    "rating": 4.5,
                    "price": "₹4,952/night",
                    "location": "https://goo.gl/maps/rabandhara_cottages",
                    "address": "Rabandhara, Bhawanipatna, Kalahandi, Odisha"
                }
            ]
        },
        "Jakam Nature Camp": {
            "images": [
                "images/jakam1.jpg",
                "images/jakam2.jpg",
                "images/jakam3.jpg",
                "images/jakam4.jpg",
                "images/jakam5.jpg",
                "images/jakam6.jpg"
            ],
            "videos": [
                "https://www.youtube.com/embed/jakam_video1"
            ],
            "description": "Situated within the Karlapat Wildlife Sanctuary, Jakam Nature Camp offers visitors an immersive experience in nature. The camp is surrounded by lush forests and is in close proximity to attractions like the Phurlijharan Waterfall and Manikeswari Temple.",
            "location": "https://goo.gl/maps/jakam",
            "foods": [
                {
                    "name": "Traditional Odia Meals",
                    "images": [
                        "images/odia_meal1.jpg",
                        "images/odia_meal2.jpg"
                    ],
                    "description": "Savor authentic Odia meals prepared with fresh, local ingredients, reflecting the culinary traditions of the region."
                }
            ],
            "hotels": [
                {
                    "name": "Jakam Eco Cottages",
                    "images": [
                        "images/jakam_cottage1.jpg",
                        "images/jakam_cottage2.jpg"
                    ],
                    "rating": 4.3,
                    "price": "₹4,500/night",
                    "location": "https://goo.gl/maps/jakam_cottages",
                    "address": "Jakam, Karlapat Wildlife Sanctuary, Kalahandi, Odisha"
                }
            ]
        }
    }
},

"Kandhamal": {
    "image": "images/kandhamal.jpg",
    "touristPlaces": {
        "Belghar Nature Camp": {
            "images": [
                "images/belghar1.jpg",
                "images/belghar2.jpg",
                "images/belghar3.jpg",
                "images/belghar4.jpg",
                "images/belghar5.jpg",
                "images/belghar6.jpg"
            ],
            "videos": [
                "https://www.youtube.com/embed/belghar_video1",
                "https://www.youtube.com/embed/belghar_video2"
            ],
            "description": "Belghar Nature Camp is situated at an altitude of 2,555 feet above sea level in Kandhamal district. Surrounded by dense forests and hillocks, it is inhabited by the Kutia Kandha tribe. The area is rich in biodiversity, including elephants, wild boars, bears, and various bird species. The camp offers tent accommodations with modern facilities, providing a serene environment for nature enthusiasts.",
            "location": "https://goo.gl/maps/belghar",
            "foods": [
                {
                    "name": "Traditional Odia Cuisine",
                    "images": [
                        "images/odia_food1.jpg",
                        "images/odia_food2.jpg"
                    ],
                    "description": "Experience authentic Odia flavors with dishes prepared using local ingredients, offering a taste of the region's rich culinary heritage."
                }
            ],
            "hotels": [
                {
                    "name": "Belghar Nature Camp Tents",
                    "images": [
                        "images/belghar_tent1.jpg",
                        "images/belghar_tent2.jpg"
                    ],
                    "rating": 4.5,
                    "price": "₹4,500/night",
                    "location": "https://goo.gl/maps/belghar_camp",
                    "address": "Belghar, Kandhamal, Odisha"
                }
            ]
        },
        "Mandasaru Valley Nature Camp": {
            "images": [
                "images/mandasaru1.jpg",
                "images/mandasaru2.jpg",
                "images/mandasaru3.jpg",
                "images/mandasaru4.jpg",
                "images/mandasaru5.jpg",
                "images/mandasaru6.jpg"
            ],
            "videos": [
                "https://www.youtube.com/embed/mandasaru_video1",
                "https://www.youtube.com/embed/mandasaru_video2"
            ],
            "description": "Mandasaru Valley Nature Camp is located atop the Mandasaru Gorge, often referred to as the 'Silent Valley of Odisha'. The area is characterized by dense tropical moist deciduous forests, six waterfalls, and a rich variety of flora and fauna. The camp offers wooden cottages and a watchtower room, providing panoramic views of the valley.",
            "location": "https://goo.gl/maps/mandasaru",
            "foods": [
                {
                    "name": "Local Tribal Dishes",
                    "images": [
                        "images/tribal_food1.jpg",
                        "images/tribal_food2.jpg"
                    ],
                    "description": "Savor traditional tribal dishes prepared by local communities, offering a unique culinary experience."
                }
            ],
            "hotels": [
                {
                    "name": "Mandasaru Valley Cottages",
                    "images": [
                        "images/mandasaru_cottage1.jpg",
                        "images/mandasaru_cottage2.jpg"
                    ],
                    "rating": 4.7,
                    "price": "₹3,714/night",
                    "location": "https://goo.gl/maps/mandasaru_camp",
                    "address": "Mandasaru, Kandhamal, Odisha"
                }
            ]
        },
        "Phulbani Nature Camp": {
            "images": [
                "images/phulbani1.jpg",
                "images/phulbani2.jpg",
                "images/phulbani3.jpg",
                "images/phulbani4.jpg",
                "images/phulbani5.jpg",
                "images/phulbani6.jpg"
            ],
            "videos": [
                "https://www.youtube.com/embed/phulbani_video1",
                "https://www.youtube.com/embed/phulbani_video2"
            ],
            "description": "Phulbani Nature Camp is located just 4 km from Phulbani town, nestled amidst green forests. The camp offers well-furnished AC and non-AC rooms with modern amenities. It serves as a gateway to explore the natural beauty and tribal culture of Kandhamal district.",
            "location": "https://goo.gl/maps/phulbani",
            "foods": [
                {
                    "name": "Odia Delicacies",
                    "images": [
                        "images/odia_dish1.jpg",
                        "images/odia_dish2.jpg"
                    ],
                    "description": "Enjoy a variety of Odia dishes, both vegetarian and non-vegetarian, prepared with traditional recipes."
                }
            ],
            "hotels": [
                {
                    "name": "Phulbani Nature Camp Rooms",
                    "images": [
                        "images/phulbani_room1.jpg",
                        "images/phulbani_room2.jpg"
                    ],
                    "rating": 4.6,
                    "price": "₹3,714/night",
                    "location": "https://goo.gl/maps/phulbani_camp",
                    "address": "Phulbani, Kandhamal, Odisha"
                }
            ]
        }
    }
},
"Kendrapara": {
    "image": "images/kendrapara.jpg",
    "touristPlaces": {
        "Bhitarkanika Nature Camp": {
            "images": [
                "images/bhitarkanika1.jpg",
                "images/bhitarkanika2.jpg",
                "images/bhitarkanika3.jpg",
                "images/bhitarkanika4.jpg",
                "images/bhitarkanika5.jpg",
                "images/bhitarkanika6.jpg"
            ],
            "videos": [
                "https://www.youtube.com/embed/bhitarkanika_video1",
                "https://www.youtube.com/embed/bhitarkanika_video2"
            ],
            "description": "Bhitarkanika Nature Camp is situated within the Bhitarkanika National Park, India's second-largest mangrove ecosystem. The park is home to the largest congregation of saltwater crocodiles in the country, as well as numerous other wildlife species including deer, wild boars, and various migratory birds. Visitors can enjoy boat rides through the network of creeks and canals, bird watching, and exploring the rich biodiversity of the region.",
            "location": "https://goo.gl/maps/bhitarkanika",
            "foods": [
                {
                    "name": "Local Odia Cuisine",
                    "images": [
                        "images/odia_food1.jpg",
                        "images/odia_food2.jpg"
                    ],
                    "description": "Experience traditional Odia dishes prepared with locally sourced ingredients, offering a taste of the region's rich culinary heritage."
                }
            ],
            "hotels": [
                {
                    "name": "Nature Camp Bhitarkanika Retreat",
                    "images": [
                        "images/bhitarkanika_retreat1.jpg",
                        "images/bhitarkanika_retreat2.jpg"
                    ],
                    "rating": 4.5,
                    "price": "₹4,500/night",
                    "location": "https://goo.gl/maps/bhitarkanika_retreat",
                    "address": "Bankual, Kendrapara, Odisha"
                }
            ]
        },
        "Habalikhati Nature Camp": {
            "images": [
                "images/habalikhati1.jpg",
                "images/habalikhati2.jpg",
                "images/habalikhati3.jpg",
                "images/habalikhati4.jpg",
                "images/habalikhati5.jpg",
                "images/habalikhati6.jpg"
            ],
            "videos": [
                "https://www.youtube.com/embed/habalikhati_video1",
                "https://www.youtube.com/embed/habalikhati_video2"
            ],
            "description": "Habalikhati Nature Camp is located along the pristine Habalikhati Sea Beach, approximately 86 km from Kendrapara town. The camp is renowned for its serene beach, the Olive Ridley Sea Turtles Research Centre, and opportunities for bird watching. Accessible by boat from Gupti or Chandbali, the camp offers a tranquil retreat amidst nature.",
            "location": "https://goo.gl/maps/habalikhati",
            "foods": [
                {
                    "name": "Seafood Delicacies",
                    "images": [
                        "images/seafood1.jpg",
                        "images/seafood2.jpg"
                    ],
                    "description": "Savor fresh seafood dishes prepared in traditional Odia style, offering a delightful culinary experience by the sea."
                }
            ],
            "hotels": [
                {
                    "name": "Habalikhati Eco Cottages",
                    "images": [
                        "images/habalikhati_cottage1.jpg",
                        "images/habalikhati_cottage2.jpg"
                    ],
                    "rating": 4.3,
                    "price": "₹4,000/night",
                    "location": "https://goo.gl/maps/habalikhati_cottages",
                    "address": "Habalikhati, Kendrapara, Odisha"
                }
            ]
        }
    }
},

                "Kendujhar": {
                image: "images/puri.jpg",
                touristPlaces: {
                    "Jagannath Temple": {
                        images: ["nature11.jpg", "nature11.jpg","nature11.jpg", "nature11.jpg","nature11.jpg", "nature11.jpg"],
                        videos: ["https://www.youtube.com/embed/example5", "https://www.youtube.com/embed/example6"],
                        description: "An important Hindu temple dedicated to Lord Jagannath, famous for its annual Rath Yatra festival.",
                        location: "https://goo.gl/maps/def",
                        foods: [
                            { 
                                name: "Mahaprasad", 
                                images: ["images/mahaprasad1.jpg", "images/mahaprasad2.jpg"],
                                description: "Sacred temple food offered to Lord Jagannath."
                            }
                        ],
                        hotels: [
                            { 
                                name: "Mayfair Heritage", 
                                images: ["images/mayfair-heritage1.jpg", "images/mayfair-heritage2.jpg"],
                                rating: 4.7,
                                price: "₹5,200/night",
                                location: "https://goo.gl/maps/mayfair-heritage",
                                address: "Chakratirtha Road, Puri"
                            }
                        ]
                    }
                }
            },
                "Khordha": {
                image: "images/puri.jpg",
                touristPlaces: {
                    "Jagannath Temple": {
                        images: ["nature11.jpg", "nature11.jpg","nature11.jpg", "nature11.jpg","nature11.jpg", "nature11.jpg"],
                        videos: ["https://www.youtube.com/embed/example5", "https://www.youtube.com/embed/example6"],
                        description: "An important Hindu temple dedicated to Lord Jagannath, famous for its annual Rath Yatra festival.",
                        location: "https://goo.gl/maps/def",
                        foods: [
                            { 
                                name: "Mahaprasad", 
                                images: ["images/mahaprasad1.jpg", "images/mahaprasad2.jpg"],
                                description: "Sacred temple food offered to Lord Jagannath."
                            }
                        ],
                        hotels: [
                            { 
                                name: "Mayfair Heritage", 
                                images: ["images/mayfair-heritage1.jpg", "images/mayfair-heritage2.jpg"],
                                rating: 4.7,
                                price: "₹5,200/night",
                                location: "https://goo.gl/maps/mayfair-heritage",
                                address: "Chakratirtha Road, Puri"
                            }
                        ]
                    }
                }
            },
                "Koraput": {
                image: "images/puri.jpg",
                touristPlaces: {
                    "Jagannath Temple": {
                        images: ["nature11.jpg", "nature11.jpg","nature11.jpg", "nature11.jpg","nature11.jpg", "nature11.jpg"],
                        videos: ["https://www.youtube.com/embed/example5", "https://www.youtube.com/embed/example6"],
                        description: "An important Hindu temple dedicated to Lord Jagannath, famous for its annual Rath Yatra festival.",
                        location: "https://goo.gl/maps/def",
                        foods: [
                            { 
                                name: "Mahaprasad", 
                                images: ["images/mahaprasad1.jpg", "images/mahaprasad2.jpg"],
                                description: "Sacred temple food offered to Lord Jagannath."
                            }
                        ],
                        hotels: [
                            { 
                                name: "Mayfair Heritage", 
                                images: ["images/mayfair-heritage1.jpg", "images/mayfair-heritage2.jpg"],
                                rating: 4.7,
                                price: "₹5,200/night",
                                location: "https://goo.gl/maps/mayfair-heritage",
                                address: "Chakratirtha Road, Puri"
                            }
                        ]
                    }
                }
            },
                "Malkangiri": {
                image: "images/puri.jpg",
                touristPlaces: {
                    "Jagannath Temple": {
                        images: ["nature11.jpg", "nature11.jpg","nature11.jpg", "nature11.jpg","nature11.jpg", "nature11.jpg"],
                        videos: ["https://www.youtube.com/embed/example5", "https://www.youtube.com/embed/example6"],
                        description: "An important Hindu temple dedicated to Lord Jagannath, famous for its annual Rath Yatra festival.",
                        location: "https://goo.gl/maps/def",
                        foods: [
                            { 
                                name: "Mahaprasad", 
                                images: ["images/mahaprasad1.jpg", "images/mahaprasad2.jpg"],
                                description: "Sacred temple food offered to Lord Jagannath."
                            }
                        ],
                        hotels: [
                            { 
                                name: "Mayfair Heritage", 
                                images: ["images/mayfair-heritage1.jpg", "images/mayfair-heritage2.jpg"],
                                rating: 4.7,
                                price: "₹5,200/night",
                                location: "https://goo.gl/maps/mayfair-heritage",
                                address: "Chakratirtha Road, Puri"
                            }
                        ]
                    }
                }
            },
                "Mayurbhanj": {
                image: "images/puri.jpg",
                touristPlaces: {
                    "Jagannath Temple": {
                        images: ["nature11.jpg", "nature11.jpg","nature11.jpg", "nature11.jpg","nature11.jpg", "nature11.jpg"],
                        videos: ["https://www.youtube.com/embed/example5", "https://www.youtube.com/embed/example6"],
                        description: "An important Hindu temple dedicated to Lord Jagannath, famous for its annual Rath Yatra festival.",
                        location: "https://goo.gl/maps/def",
                        foods: [
                            { 
                                name: "Mahaprasad", 
                                images: ["images/mahaprasad1.jpg", "images/mahaprasad2.jpg"],
                                description: "Sacred temple food offered to Lord Jagannath."
                            }
                        ],
                        hotels: [
                            { 
                                name: "Mayfair Heritage", 
                                images: ["images/mayfair-heritage1.jpg", "images/mayfair-heritage2.jpg"],
                                rating: 4.7,
                                price: "₹5,200/night",
                                location: "https://goo.gl/maps/mayfair-heritage",
                                address: "Chakratirtha Road, Puri"
                            }
                        ]
                    }
                }
            },
                "Nabarangpur": {
                image: "images/puri.jpg",
                touristPlaces: {
                    "Jagannath Temple": {
                        images: ["nature11.jpg", "nature11.jpg","nature11.jpg", "nature11.jpg","nature11.jpg", "nature11.jpg"],
                        videos: ["https://www.youtube.com/embed/example5", "https://www.youtube.com/embed/example6"],
                        description: "An important Hindu temple dedicated to Lord Jagannath, famous for its annual Rath Yatra festival.",
                        location: "https://goo.gl/maps/def",
                        foods: [
                            { 
                                name: "Mahaprasad", 
                                images: ["images/mahaprasad1.jpg", "images/mahaprasad2.jpg"],
                                description: "Sacred temple food offered to Lord Jagannath."
                            }
                        ],
                        hotels: [
                            { 
                                name: "Mayfair Heritage", 
                                images: ["images/mayfair-heritage1.jpg", "images/mayfair-heritage2.jpg"],
                                rating: 4.7,
                                price: "₹5,200/night",
                                location: "https://goo.gl/maps/mayfair-heritage",
                                address: "Chakratirtha Road, Puri"
                            }
                        ]
                    }
                }
            },
                "Nuapada": {
                image: "images/puri.jpg",
                touristPlaces: {
                    "Jagannath Temple": {
                        images: ["nature11.jpg", "nature11.jpg","nature11.jpg", "nature11.jpg","nature11.jpg", "nature11.jpg"],
                        videos: ["https://www.youtube.com/embed/example5", "https://www.youtube.com/embed/example6"],
                        description: "An important Hindu temple dedicated to Lord Jagannath, famous for its annual Rath Yatra festival.",
                        location: "https://goo.gl/maps/def",
                        foods: [
                            { 
                                name: "Mahaprasad", 
                                images: ["images/mahaprasad1.jpg", "images/mahaprasad2.jpg"],
                                description: "Sacred temple food offered to Lord Jagannath."
                            }
                        ],
                        hotels: [
                            { 
                                name: "Mayfair Heritage", 
                                images: ["images/mayfair-heritage1.jpg", "images/mayfair-heritage2.jpg"],
                                rating: 4.7,
                                price: "₹5,200/night",
                                location: "https://goo.gl/maps/mayfair-heritage",
                                address: "Chakratirtha Road, Puri"
                            }
                        ]
                    }
                }
            },
                "Nayagarh": {
                image: "images/puri.jpg",
                touristPlaces: {
                    "Jagannath Temple": {
                        images: ["nature11.jpg", "nature11.jpg","nature11.jpg", "nature11.jpg","nature11.jpg", "nature11.jpg"],
                        videos: ["https://www.youtube.com/embed/example5", "https://www.youtube.com/embed/example6"],
                        description: "An important Hindu temple dedicated to Lord Jagannath, famous for its annual Rath Yatra festival.",
                        location: "https://goo.gl/maps/def",
                        foods: [
                            { 
                                name: "Mahaprasad", 
                                images: ["images/mahaprasad1.jpg", "images/mahaprasad2.jpg"],
                                description: "Sacred temple food offered to Lord Jagannath."
                            }
                        ],
                        hotels: [
                            { 
                                name: "Mayfair Heritage", 
                                images: ["images/mayfair-heritage1.jpg", "images/mayfair-heritage2.jpg"],
                                rating: 4.7,
                                price: "₹5,200/night",
                                location: "https://goo.gl/maps/mayfair-heritage",
                                address: "Chakratirtha Road, Puri"
                            }
                        ]
                    }
                }
            },
                "Puri": {
                image: "images/puri.jpg",
                touristPlaces: {
                    "Jagannath Temple": {
                        images: ["nature11.jpg", "nature11.jpg","nature11.jpg", "nature11.jpg","nature11.jpg", "nature11.jpg"],
                        videos: ["https://www.youtube.com/embed/example5", "https://www.youtube.com/embed/example6"],
                        description: "An important Hindu temple dedicated to Lord Jagannath, famous for its annual Rath Yatra festival.",
                        location: "https://goo.gl/maps/def",
                        foods: [
                            { 
                                name: "Mahaprasad", 
                                images: ["images/mahaprasad1.jpg", "images/mahaprasad2.jpg"],
                                description: "Sacred temple food offered to Lord Jagannath."
                            }
                        ],
                        hotels: [
                            { 
                                name: "Mayfair Heritage", 
                                images: ["images/mayfair-heritage1.jpg", "images/mayfair-heritage2.jpg"],
                                rating: 4.7,
                                price: "₹5,200/night",
                                location: "https://goo.gl/maps/mayfair-heritage",
                                address: "Chakratirtha Road, Puri"
                            }
                        ]
                    }
                }
            },
                "Rayagada": {
                image: "images/puri.jpg",
                touristPlaces: {
                    "Jagannath Temple": {
                        images: ["nature11.jpg", "nature11.jpg","nature11.jpg", "nature11.jpg","nature11.jpg", "nature11.jpg"],
                        videos: ["https://www.youtube.com/embed/example5", "https://www.youtube.com/embed/example6"],
                        description: "An important Hindu temple dedicated to Lord Jagannath, famous for its annual Rath Yatra festival.",
                        location: "https://goo.gl/maps/def",
                        foods: [
                            { 
                                name: "Mahaprasad", 
                                images: ["images/mahaprasad1.jpg", "images/mahaprasad2.jpg"],
                                description: "Sacred temple food offered to Lord Jagannath."
                            }
                        ],
                        hotels: [
                            { 
                                name: "Mayfair Heritage", 
                                images: ["images/mayfair-heritage1.jpg", "images/mayfair-heritage2.jpg"],
                                rating: 4.7,
                                price: "₹5,200/night",
                                location: "https://goo.gl/maps/mayfair-heritage",
                                address: "Chakratirtha Road, Puri"
                            }
                        ]
                    }
                }
            },
                "Sambalpur": {
                image: "images/puri.jpg",
                touristPlaces: {
                    "Jagannath Temple": {
                        images: ["nature11.jpg", "nature11.jpg","nature11.jpg", "nature11.jpg","nature11.jpg", "nature11.jpg"],
                        videos: ["https://www.youtube.com/embed/example5", "https://www.youtube.com/embed/example6"],
                        description: "An important Hindu temple dedicated to Lord Jagannath, famous for its annual Rath Yatra festival.",
                        location: "https://goo.gl/maps/def",
                        foods: [
                            { 
                                name: "Mahaprasad", 
                                images: ["images/mahaprasad1.jpg", "images/mahaprasad2.jpg"],
                                description: "Sacred temple food offered to Lord Jagannath."
                            }
                        ],
                        hotels: [
                            { 
                                name: "Mayfair Heritage", 
                                images: ["images/mayfair-heritage1.jpg", "images/mayfair-heritage2.jpg"],
                                rating: 4.7,
                                price: "₹5,200/night",
                                location: "https://goo.gl/maps/mayfair-heritage",
                                address: "Chakratirtha Road, Puri"
                            }
                        ]
                    }
                }
            },
            "Subarnapur": {
                image: "images/bhubaneswar.jpg",
                touristPlaces: {
                    "Lingaraj Temple": {
                        images: ["images/lingaraj1.jpg", "images/lingaraj2.jpg", "images/lingaraj3.jpg"],
                        description: "The Lingaraj Temple is one of the oldest temples in Bhubaneswar, dedicated to Lord Shiva. It's a fine example of Kalinga architecture.",
                        location: "https://goo.gl/maps/xyz",
                        foods: [
                            { 
                                name: "Pakhala Bhata", 
                                images: ["images/pakhala1.jpg", "images/pakhala2.jpg"],
                                description: "Traditional Odia fermented rice dish served with curd and seasonings."
                            },
                            { 
                                name: "Chhena Poda", 
                                images: ["images/chhena-poda1.jpg", "images/chhena-poda2.jpg"],
                                description: "Delicious cheese dessert baked with sugar and cardamom."
                            }
                        ],
                        hotels: [
                            { 
                                name: "Hotel Mayfair", 
                                images: ["images/mayfair1.jpg", "images/mayfair2.jpg"],
                                rating: 4.5,
                                price: "₹4,500/night",
                                location: "https://goo.gl/maps/hotel-mayfair",
                                address: "Plot No. 8, Jaydev Vihar, Bhubaneswar"
                            }
                        ]
                    }
                }
            },
              "Sundargarh": {
                image: "images/puri.jpg",
                touristPlaces: {
                    "Jagannath Temple": {
                        images: ["nature11.jpg", "nature11.jpg","nature11.jpg", "nature11.jpg","nature11.jpg", "nature11.jpg"],
                        videos: ["https://www.youtube.com/embed/example5", "https://www.youtube.com/embed/example6"],
                        description: "An important Hindu temple dedicated to Lord Jagannath, famous for its annual Rath Yatra festival.",
                        location: "https://goo.gl/maps/def",
                        foods: [
                            { 
                                name: "Mahaprasad", 
                                images: ["images/mahaprasad1.jpg", "images/mahaprasad2.jpg"],
                                description: "Sacred temple food offered to Lord Jagannath."
                            }
                        ],
                        hotels: [
                            { 
                                name: "Mayfair Heritage", 
                                images: ["images/mayfair-heritage1.jpg", "images/mayfair-heritage2.jpg"],
                                rating: 4.7,
                                price: "₹5,200/night",
                                location: "https://goo.gl/maps/mayfair-heritage",
                                address: "Chakratirtha Road, Puri"
                            }
                        ]
                    }
                }
            }
        }
    }
};

// DOM Elements
const pages = {
    home: document.getElementById('homePage'),
    districts: document.getElementById('districtsPage'),
    touristPlaces: document.getElementById('touristPlacesPage'),
    placeDetail: document.getElementById('placeDetailPage')
};

const backBtn = document.getElementById('backBtn');
const odishaBtn = document.getElementById('odishaBtn');
const districtsContainer = document.getElementById('districtsContainer');
const touristPlacesContainer = document.getElementById('touristPlacesContainer');
const touristPlacesTitle = document.getElementById('touristPlacesTitle');
const placeDetailTitle = document.getElementById('placeDetailTitle');
const imageSlider = document.getElementById('imageSlider');
const placeDescription = document.getElementById('placeDescription');
const additionalInfo = document.getElementById('additionalInfo');

// App State
let currentPage = 'home';
let currentDistrict = '';
let currentPlace = '';
let currentSlideIndex = 0;
let slideInterval;
let isExternalReferrer = false;
let cameFromExploreMore = false;

// Initialize the app
function init() {
    // Check referrer first
    if (document.referrer && document.referrer.includes('home.html')) {
        cameFromExploreMore = true;
        isExternalReferrer = false;
    } else if (document.referrer && !document.referrer.includes(window.location.hostname)) {
        isExternalReferrer = true;
    }
    
    setupEventListeners();
    updateBackButton();
}

// Set up event listeners
function setupEventListeners() {
    odishaBtn.addEventListener('click', showDistricts);
    backBtn.addEventListener('click', goBack);
    document.getElementById('locationBtn').addEventListener('click', showLocation);
    document.getElementById('foodsBtn').addEventListener('click', showFoods);
    document.getElementById('hotelsBtn').addEventListener('click', showHotels);
}

// Navigation functions
function showDistricts() {
    navigateTo('districts');
    cameFromExploreMore = false; // Mark as internal navigation
    
    districtsContainer.innerHTML = '';
    const districts = tourismData.odisha.districts;
    
    Object.keys(districts).forEach((districtName, index) => {
        const district = districts[districtName];
        const districtElement = document.createElement('div');
        districtElement.className = 'grid-item';
        districtElement.style.animationDelay = `${index * 0.1}s`;
        districtElement.innerHTML = `
            <img src="${district.image}" alt="${districtName}">
            <h3>${districtName}</h3>
        `;
        districtElement.addEventListener('click', () => showTouristPlaces(districtName));
        districtsContainer.appendChild(districtElement);
    });
}

function showTouristPlaces(districtName) {
    navigateTo('touristPlaces');
    currentDistrict = districtName;
    
    touristPlacesTitle.textContent = `nature camps in ${districtName}`;
    touristPlacesContainer.innerHTML = '';
    const places = tourismData.odisha.districts[districtName].touristPlaces;
    
    Object.keys(places).forEach((placeName, index) => {
        const place = places[placeName];
        const placeElement = document.createElement('div');
        placeElement.className = 'grid-item';
        placeElement.style.animationDelay = `${index * 0.1}s`;
        placeElement.innerHTML = `
            <img src="${place.images[0]}" alt="${placeName}">
            <h3>${placeName}</h3>
        `;
        placeElement.addEventListener('click', () => showPlaceDetail(placeName));
        touristPlacesContainer.appendChild(placeElement);
    });
}

function showPlaceDetail(placeName) {
    navigateTo('placeDetail');
    currentPlace = placeName;
    
    const place = tourismData.odisha.districts[currentDistrict].touristPlaces[placeName];
    placeDetailTitle.textContent = placeName;
    
    // Setup image slider
    setupImageSlider(place.images);
    
    // Set description
    placeDescription.textContent = place.description;
    
    // Reset additional info
    additionalInfo.innerHTML = '';
    additionalInfo.classList.remove('show');
    
    // Start auto slide
    startAutoSlide();
}

function navigateTo(page) {
    // Hide all pages
    Object.values(pages).forEach(p => {
        p.classList.remove('active');
        p.style.opacity = '0';
    });
    
    // Show new page
    setTimeout(() => {
        pages[page].classList.add('active');
        pages[page].style.opacity = '1';
        currentPage = page;
        updateBackButton();
    }, 300);
}

function updateBackButton() {
    if (currentPage === 'home' && !isExternalReferrer && !cameFromExploreMore) {
        backBtn.style.display = 'none';
    } else {
        backBtn.style.display = 'block';
    }
}

function goBack() {
    stopAutoSlide();
    
    if (cameFromExploreMore) {
        // If came from main page via Explore More, go back there
        window.history.back();
    } else if (isExternalReferrer) {
        // If came from external site, use browser back
        window.history.back();
    } else {
        // Original internal navigation
        if (currentPage === 'districts') {
            navigateTo('home');
        } else if (currentPage === 'touristPlaces') {
            navigateTo('districts');
        } else if (currentPage === 'placeDetail') {
            navigateTo('touristPlaces');
        }
    }
}

// Image slider functions
function setupImageSlider(images) {
    imageSlider.innerHTML = '';
    const dotsContainer = document.querySelector('.slider-dots');
    dotsContainer.innerHTML = '';
    
    images.forEach((img, index) => {
        // Create slide
        const slide = document.createElement('div');
        slide.className = 'slide';
        slide.innerHTML = `<img src="${img}" alt="Slide ${index + 1}">`;
        imageSlider.appendChild(slide);
        
        // Create dot
        const dot = document.createElement('span');
        dot.className = 'dot';
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });
    
    currentSlideIndex = 0;
    updateSlider();
}

function goToSlide(index) {
    stopAutoSlide();
    currentSlideIndex = index;
    updateSlider();
    startAutoSlide();
}

function updateSlider() {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    
    slides.forEach((slide, i) => {
        slide.style.transform = `translateX(-${currentSlideIndex * 100}%)`;
    });
    
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === currentSlideIndex);
    });
}

function moveSlide(n) {
    stopAutoSlide();
    const slides = document.querySelectorAll('.slide');
    currentSlideIndex = (currentSlideIndex + n + slides.length) % slides.length;
    updateSlider();
    startAutoSlide();
}

function startAutoSlide() {
    stopAutoSlide();
    slideInterval = setInterval(() => {
        moveSlide(1);
    }, 3000);
}

function stopAutoSlide() {
    if (slideInterval) {
        clearInterval(slideInterval);
    }
}

// Additional info functions
function showLocation() {
    const place = tourismData.odisha.districts[currentDistrict].touristPlaces[currentPlace];
    additionalInfo.innerHTML = `
        <h3><i class="fas fa-map-marker-alt"></i> Location</h3>
        <a href="${place.location}" target="_blank" class="location-btn">
            <i class="fas fa-external-link-alt"></i> View on Google Maps
        </a>
    `;
    additionalInfo.classList.add('show');
}

function showFoods() {
    const place = tourismData.odisha.districts[currentDistrict].touristPlaces[currentPlace];
    let foodsHTML = '<h3><i class="fas fa-utensils"></i> Local Foods</h3>';
    
    place.foods.forEach(food => {
        foodsHTML += `
            <div class="food-item">
                <h4>${food.name}</h4>
                <p>${food.description}</p>
                <div class="food-images">
                    ${food.images.map(img => `
                        <img src="${img}" alt="${food.name}" class="food-img">
                    `).join('')}
                </div>
            </div>
        `;
    });
    
    additionalInfo.innerHTML = foodsHTML;
    additionalInfo.classList.add('show');
}

function showHotels() {
    const place = tourismData.odisha.districts[currentDistrict].touristPlaces[currentPlace];
    let hotelsHTML = '<h3><i class="fas fa-hotel"></i> Nearby Hotels</h3>';
    
    place.hotels.forEach(hotel => {
        hotelsHTML += `
            <div class="hotel">
                <h4>${hotel.name}</h4>
                <div class="hotel-info">
                    <span class="rating">${'★'.repeat(Math.floor(hotel.rating))}${'½'.repeat(hotel.rating % 1)}</span>
                    <span class="price">${hotel.price}</span>
                </div>
                <div class="hotel-images">
                    ${hotel.images.map(img => `
                        <img src="${img}" alt="${hotel.name}" class="hotel-img">
                    `).join('')}
                </div>
                <a href="${hotel.location}" target="_blank" class="location-btn">
                    <i class="fas fa-map-marker-alt"></i> View Location
                </a>
            </div>
        `;
    });
    
    additionalInfo.innerHTML = hotelsHTML;
    additionalInfo.classList.add('show');
}

// Initialize the app
document.addEventListener('DOMContentLoaded', init);
// Add this to your existing JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Search functionality
    const districtSearch = document.getElementById('districtSearch');
    if(districtSearch) {
        districtSearch.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            const districts = document.querySelectorAll('#districtsContainer .grid-item');
            
            districts.forEach(district => {
                const districtName = district.querySelector('h3').textContent.toLowerCase();
                if(districtName.includes(searchTerm)) {
                    district.style.display = 'block';
                    district.style.animation = 'bounce 0.6s ease';
                } else {
                    district.style.display = 'none';
                }
            });
        });
    }
    
    // Add animation delays to grid items
    function addAnimationDelays() {
        const gridItems = document.querySelectorAll('.grid-item');
        gridItems.forEach((item, index) => {
            item.style.setProperty('--order', index);
        });
    }
    
    // Call this function whenever you load new grid items
    addAnimationDelays();
    
    // Add hover effect to images
    const images = document.querySelectorAll('.grid-item img');
    images.forEach(img => {
        img.addEventListener('mouseover', function() {
            this.style.transform = 'scale(1.1) rotate(2deg)';
        });
        img.addEventListener('mouseout', function() {
            this.style.transform = 'scale(1) rotate(0)';
        });
    });
});

// Add this to your page transition functions to animate new content
function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    const page = document.getElementById(pageId);
    page.classList.add('active');
    
    // Reapply animations when page changes
    setTimeout(() => {
        addAnimationDelays();
    }, 100);
}
// Function to show loading spinner
function showLoading(containerId) {
    const container = document.getElementById(containerId);
    if (container) {
        const spinner = container.querySelector('.loading-spinner');
        if (spinner) {
            spinner.style.display = 'block';
        }
    }
}

// Function to hide loading spinner
function hideLoading(containerId) {
    const container = document.getElementById(containerId);
    if (container) {
        const spinner = container.querySelector('.loading-spinner');
        if (spinner) {
            spinner.style.display = 'none';
        }
    }
}

// Example usage when loading districts:
async function loadDistricts() {
    showLoading('districtsContainer');
    // Your code to fetch districts data
    // After data is loaded:
    hideLoading('districtsContainer');
}

// Example usage when loading tourist places:
async function loadTouristPlaces(district) {
    showLoading('touristPlacesContainer');
    // Your code to fetch places data
    // After data is loaded:
    hideLoading('touristPlacesContainer');
}
