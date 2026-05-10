const destinations = [
    {
        id: 1,
        name: "Manila Arrival",
        date: "April 5, 2026",
        region: "Manila",
        background: "Welcome to the vibrant capital of the Philippines! Manila is a city where history and modernity collide. Ninoy Aquino International Airport (NAIA) serves as the main gateway for our educational journey.",
        highlights: [
            "Arrival and orientation",
            "Initial view of the Manila skyline",
            "Group gathering at the terminal"
        ],
        comments: "The air in Manila is thick with excitement. Starting the tour at the airport really sets the stage for the 'arrival' feeling of a long-awaited adventure.",
        icon: "✈️",
        x: 100,
        y: 150,
        photos: [
            "photos/Manila-arrival/IMG_20260405_061059.webp",
            "photos/Manila-arrival/IMG_20260405_060512.webp",
            "photos/Manila-arrival/received_3314685682042307.webp",
            "photos/Manila-arrival/IMG_20260405_084811.webp"
        ]
    },
    {
        id: 2,
        name: "Intramuros",
        date: "April 5, 2026",
        region: "Manila",
        background: "The 'Walled City' was the seat of Spanish power in the Philippines for over 300 years. Built in the late 16th century, it features massive stone walls and fortifications designed to protect the city from foreign invasions.",
        highlights: [
            "Cobblestone streets and Spanish-era architecture",
            "The historic city walls",
            "Plaza Roma and surrounding landmarks"
        ],
        comments: "Walking through Intramuros feels like stepping back in time. The preservation of the walls is impressive and provides a stark contrast to the modern city outside.",
        icon: "🏰",
        x: 250,
        y: 100,
        photos: [
            "photos/Intramuros/IMG_20260405_152456.webp",
            "photos/Intramuros/DSC_0809.webp",
            "photos/Intramuros/DSC_0817.webp",
            "photos/Intramuros/DSC_0818.webp"
        ]
    },
    {
        id: 3,
        name: "Fort Santiago",
        date: "April 5, 2026",
        region: "Manila",
        background: "One of the most important historical sites in the Philippines, this citadel was built by Spanish conquistador Miguel López de Legazpi. It served as a defense fortress and famously held the national hero Jose Rizal before his execution.",
        highlights: [
            "Rizal Shrine and the hero's footsteps",
            "The iconic Gate of Fort Santiago",
            "Dungeons and historic guardhouses"
        ],
        comments: "The energy at Fort Santiago is heavy but deeply moving. Seeing the actual footsteps of Jose Rizal etched into the ground is a powerful reminder of our history.",
        icon: "🛡️",
        x: 350,
        y: 120,
        photos: [
            "photos/Fort-Santiago/2026_04_05_15_00_IMG_6024.webp",
            "photos/Fort-Santiago/2026_04_05_15_10_IMG_6025.webp",
            "photos/Fort-Santiago/2026_04_05_15_11_IMG_6028.webp"
        ]
    },
    {
        id: 4,
        name: "Rizal Park",
        date: "April 5, 2026",
        region: "Manila",
        background: "Also known as Luneta, this historic urban park is dedicated to Dr. Jose Rizal. It is one of the largest urban parks in Asia and has been the site of many significant events in Philippine history.",
        highlights: [
            "The Rizal Monument and honor guards",
            "Musical Dancing Fountain",
            "Japanese and Chinese Gardens"
        ],
        comments: "Luneta is the heart of Manila. Seeing families enjoy the open space while respecting the monument is a beautiful sight.",
        icon: "🌳",
        x: 450,
        y: 180,
        photos: [
            "photos/rizal-park/DSC_0762.webp",
            "photos/rizal-park/DSC_0734.webp",
            "photos/rizal-park/DSC_0735.webp",
            "photos/rizal-park/DSC_0764.webp",
            "photos/rizal-park/DSC_0766.webp"
        ]
    },
    {
        id: 5,
        name: "Manila Cathedral",
        date: "April 5, 2026",
        region: "Manila",
        background: "The Minor Basilica and Metropolitan Cathedral of the Immaculate Conception is the seat of the Roman Catholic Archdiocese of Manila. It has been destroyed and rebuilt seven times since 1581.",
        highlights: [
            "Stunning Neo-Romanesque architecture",
            "Intricate stained glass windows",
            "The historic pipe organ"
        ],
        comments: "The resilience of this building is inspiring. Even if you aren't religious, the craftsmanship and the sheer scale of the interior are breathtaking.",
        icon: "⛪",
        x: 550,
        y: 100,
        photos: [
            "photos/Manila-Cathedral/DSC_0782.webp",
            "photos/Manila-Cathedral/DSC_0781.webp",
            "photos/Manila-Cathedral/DSC_0780.webp",
            "photos/Manila-Cathedral/DSC_0790.webp",
            "photos/Manila-Cathedral/DSC_0791.webp"
        ]
    },
    {
        id: 6,
        name: "Mall of Asia",
        date: "April 5, 2026",
        region: "Manila",
        background: "One of the largest shopping malls in the world, SM MOA is a massive complex that features retail, dining, and entertainment, including an Olympic-sized ice rink and an IMAX theater.",
        highlights: [
            "The giant MOA Globe",
            "Sunset views at the Baywalk",
            "The Sky Ranch MOA Eye"
        ],
        comments: "It's more than just a mall; it's a city within a city. Ending the day here with a view of the Manila Bay sunset was perfect.",
        icon: "🛍️",
        x: 700,
        y: 200,
        photos: [
            "photos/Mall-of-Asia/received_1733790914451115.webp"
        ]
    },
    {
        id: 7,
        name: "HYTEC POWER INC.",
        date: "April 6, 2026",
        region: "Companies",
        background: "A premier provider of educational and industrial technology solutions in the Philippines. They specialize in technical training equipment and laboratory solutions for various engineering disciplines.",
        highlights: [
            "Advanced robotics and automation labs",
            "Renewable energy technology demos",
            "Industrial PLC systems overview"
        ],
        comments: "This visit was eye-opening for our future careers. Seeing how theory from our textbooks is applied in real-world industrial machines is fascinating.",
        icon: "⚡",
        x: 850,
        y: 150,
        photos: [
            "photos/hytec-power/DSC_0790 (1).webp",
            "photos/hytec-power/DSC_0776 (1).webp",
            "photos/hytec-power/received_1701385071231640.webp",
            "photos/hytec-power/received_1685383392646762.webp",
            "photos/hytec-power/DSC_0795 (1).webp"
        ]
    },
    {
        id: 8,
        name: "Opentext Philippines, Inc.",
        date: "April 6, 2026",
        region: "Companies",
        background: "A global leader in Enterprise Information Management (EIM). They provide software solutions that help companies manage their structured and unstructured data across the enterprise.",
        highlights: [
            "Corporate culture and workspace tour",
            "Insights into cloud-based data management",
            "Career paths in software development and support"
        ],
        comments: "The office environment at Opentext is so modern and professional. It definitely made me think about wanting to work in a global tech firm like this.",
        icon: "💻",
        x: 980,
        y: 120,
        photos: [
            "photos/opentext/IMG_20260406_151257.webp",
            "photos/opentext/IMG_20260406_134221.webp",
            "photos/opentext/IMG_20260406_134737.webp"
        ]
    },
    {
        id: 9,
        name: "MMDA Command Center",
        date: "April 7, 2026",
        region: "Companies",
        background: "The Metropolitan Manila Development Authority's nerve center for traffic management and emergency response. It uses a vast network of CCTV cameras to monitor the city's major thoroughfares.",
        highlights: [
            "The massive video wall showing real-time traffic",
            "Emergency dispatch and communication protocols",
            "Advanced traffic signal control systems"
        ],
        comments: "It felt like a mission control center from a movie. Seeing how they manage the chaos of Manila traffic using tech is incredible.",
        icon: "🚦",
        x: 1100,
        y: 180,
        photos: [
            "photos/MMDA/IMG_20260407_091536.webp",
            "photos/MMDA/received_718102691329161.webp",
            "photos/MMDA/received_2016511099223779.webp"
        ]
    },
    {
        id: 10,
        name: "Teleperformance",
        date: "April 7, 2026",
        region: "Companies",
        background: "A global leader in digital integrated business services. They provide customer experience management, back-office services, and digital solutions to companies worldwide.",
        highlights: [
            "BPO industry scale and operations",
            "Employee welfare and facility tour",
            "Digital transformation in customer service"
        ],
        comments: "The scale of their operations is mind-blowing. It's clear why the Philippines is a world leader in this industry.",
        icon: "🎧",
        x: 1230,
        y: 140,
        photos: [
            "photos/teleperformance/IMG_20260407_133354.webp"
        ]
    },
    {
        id: 11,
        name: "Top Peg Animation",
        date: "April 8, 2026",
        region: "Companies",
        background: "A creative studio based in the Philippines specializing in 2D and 3D animation. They have contributed to various local and international projects, showcasing Filipino talent in the arts.",
        highlights: [
            "Animation production pipeline demo",
            "Character design and concept art viewing",
            "Meeting local animators and artists"
        ],
        comments: "As a tech student, seeing the creative side of the industry was refreshing. The passion of the artists here is contagious.",
        icon: "🎨",
        x: 1350,
        y: 100,
        photos: [
            "photos/top-peg/received_931607662823470.webp",
            "photos/top-peg/received_1318885346722738.webp"
        ]
    },
    {
        id: 12,
        name: "Microsourcing",
        date: "April 8, 2026",
        region: "Companies",
        background: "A pioneer in offshore outsourcing, helping international businesses build their own dedicated teams in the Philippines. They focus on professional and high-value outsourcing services.",
        highlights: [
            "Offshore team management models",
            "Diverse professional roles in outsourcing",
            "Innovative office spaces"
        ],
        comments: "They show how the Philippines connects to the rest of the world. It’s a very dynamic environment.",
        icon: "🤝",
        x: 1480,
        y: 160,
        photos: [
            "photos/microsourcing/IMG_20260408_134623.webp",
            "photos/microsourcing/2026_04_08_15_18_IMG_6171.webp"
        ]
    },
    {
        id: 13,
        name: "Tagaytay",
        date: "April 9, 2026",
        region: "Tagaytay",
        background: "Located in the province of Cavite, Tagaytay is one of the most popular tourist destinations in the country due to its cool climate and spectacular views of the Taal Volcano and Lake.",
        highlights: [
            "Scenic views of Taal Lake",
            "Cool, refreshing mountain breeze",
            "Local delicacies like Bulalo"
        ],
        comments: "The change in temperature was so welcome after the heat of Manila. The view of Taal is something you have to see in person to truly appreciate.",
        icon: "🌋",
        x: 1650,
        y: 220,
        photos: []
    },
    {
        id: 14,
        name: "People's Park in the Sky",
        date: "April 9, 2026",
        region: "Tagaytay",
        background: "Originally called the Palace in the Sky, it was an unfinished mansion for former President Marcos. It is the highest point in the province of Cavite, offering panoramic views of several surrounding provinces.",
        highlights: [
            "360-degree views of Cavite and Batangas",
            "The historic unfinished structure",
            "The cool, often foggy atmosphere"
        ],
        comments: "It's a bit of a climb, but the view from the top is absolutely worth it. It felt like we were literally in the clouds.",
        icon: "☁️",
        x: 1750,
        y: 180,
        photos: [
            "photos/people's-park/received_1640835730474110.webp",
            "photos/people's-park/received_1615031093080681.webp",
            "photos/people's-park/IMG_20260409_210558_075.webp",
            "photos/people's-park/2026_04_09_08_18_IMG_6242.webp",
            "photos/people's-park/2026_04_09_08_44_IMG_6336.webp",
            "photos/people's-park/2026_04_09_08_44_IMG_6337.webp"
        ]
    },
    {
        id: 15,
        name: "Skyranch",
        date: "April 9, 2026",
        region: "Tagaytay",
        background: "An amusement park that serves as a major landmark in Tagaytay. Its main attraction is the Sky Eye, a 63-meter tall Ferris wheel that provides even higher vantage points of the ridge.",
        highlights: [
            "The Sky Eye (Ferris Wheel)",
            "Fun carnival rides and games",
            "Ridgetop dining with a view"
        ],
        comments: "Riding the Sky Eye was the highlight of our Tagaytay trip. It was a bit scary but the view of the lake while suspended in the air was unforgettable.",
        icon: "🎡",
        x: 1850,
        y: 240,
        photos: [
            "photos/skyranch/IMG_20260409_101141.webp",
            "photos/skyranch/received_1490880405710862.webp",
            "photos/skyranch/received_1489043169287918.webp",
            "photos/skyranch/received_1407489818060153.webp"
        ]
    },
    {
        id: 16,
        name: "Baguio City",
        date: "April 10, 2026",
        region: "Baguio",
        background: "The 'Summer Capital of the Philippines.' Established as a hill station by the Americans in 1900, it is known for its pine trees, cool climate, and its unique blend of indigenous and modern culture.",
        highlights: [
            "Winding roads of Kennon or Marcos Highway",
            "Pine-scented air and cool temperature",
            "Vibrant Session Road atmosphere"
        ],
        comments: "Baguio has such a unique vibe. The air smells like pine and the energy is so different from the lowlands.",
        icon: "🌲",
        x: 2050,
        y: 100,
        photos: [
            "photos/baguio/2026_04_10_07_37_IMG_6455.webp",
            "photos/baguio/2026_04_10_15_02_IMG_6648.webp",
            "photos/baguio/received_4202744726722592.webp"
        ]
    },
    {
        id: 17,
        name: "Strawberry Farm",
        date: "April 10, 2026",
        region: "Baguio",
        background: "Located in the swamp area of La Trinidad, Benguet. It is the only place in the Philippines where strawberries are grown on a large scale due to the cool mountain climate.",
        highlights: [
            "Strawberry souvenirs and fresh-picked strawberries",
            "Strawberry Taho and ice cream",
            "Local fresh vegetable market"
        ],
        comments: "Being able to eat strawberries directly from the plant was such a fun, hands-on experience. And the strawberry taho is a must-try!",
        icon: "🍓",
        x: 2220,
        y: 80,
        photos: [
            "photos/strawberry-farm/received_1310305857651519.webp",
            "photos/strawberry-farm/received_4374798632777022.webp",
            "photos/strawberry-farm/received_1478046957359041.webp"
        ]
    },
    {
        id: 18,
        name: "Chinese Bell Church",
        date: "April 10, 2026",
        region: "Baguio",
        background: "A Taoist temple on the boundary of Baguio and La Trinidad. It features traditional Chinese architecture, including pagodas, dragons, and a large bell that gives the church its name.",
        highlights: [
            "Beautifully manicured gardens",
            "Intricate dragon sculptures",
            "Peaceful, meditative environment"
        ],
        comments: "The temple is so quiet and peaceful. The contrast of the red and green architecture against the Baguio mist is very photogenic.",
        icon: "🔔",
        x: 2390,
        y: 150,
        photos: [
            "photos/chinese-bell-church/IMG_20260410_073210.webp",
            "photos/chinese-bell-church/IMG_20260410_073007.webp",
            "photos/chinese-bell-church/received_951986110790184.webp",
            "photos/chinese-bell-church/received_927125340204031.webp"
        ]
    },
    {
        id: 19,
        name: "PMA",
        date: "April 10, 2026",
        region: "Baguio",
        background: "The Philippine Military Academy is the premier military training institution in the country. Fort Del Pilar, its campus, is a sprawling park-like area that serves as a training ground for future officers of the Armed Forces.",
        highlights: [
            "Relics and military museums",
            "The manicured parade grounds",
            "Disciplined cadet drills (if timed right)"
        ],
        comments: "There's a strong sense of discipline and history at the PMA. The grounds are incredibly clean and well-maintained.",
        icon: "🎖️",
        x: 2500,
        y: 220,
        photos: [
            "photos/PMA/IMG_20260410_133857.webp",
            "photos/PMA/IMG_20260410_133851.webp",
            "photos/PMA/IMG_20260410_133327.webp"
        ]
    },
    {
        id: 20,
        name: "Mines View Park",
        date: "April 10, 2026",
        region: "Baguio",
        background: "One of Baguio's most iconic landmarks, it overlooks the old gold and copper mines of Itogon. It also offers a great view of the Amburayan Valley and the Cordillera mountains.",
        highlights: [
            "Viewing deck overlooking the mines",
            "Wearing traditional Igorot costumes",
            "Souvenir shopping for silver and woodcrafts"
        ],
        comments: "You can't say you've been to Baguio without visiting Mines View. It was crowded, but the view and the shopping for 'pasalubong' were great.",
        icon: "⛰️",
        x: 2650,
        y: 130,
        photos: [
            "photos/Mine's-view-park/received_1598313474795538.webp"
        ]
    }
];

const mapContent = document.getElementById('mapContent');
const mapLines = document.getElementById('mapLines');
const mainPlaceholder = document.getElementById('mainPlaceholder');
const detailsBox = document.getElementById('detailsBox');
const mediaBox = document.getElementById('mediaBox');
const infoTitle = document.getElementById('infoTitle');
const infoDate = document.getElementById('infoDate');
const infoBackground = document.getElementById('infoBackground');
const infoHighlights = document.getElementById('infoHighlights');
const infoComments = document.getElementById('infoComments');
const carouselMain = document.getElementById('carouselMain');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const carouselCounter = document.getElementById('carouselCounter');

let currentDest = null;
let currentPhotoIndex = 0;

function initMap() {
    // Render Icons
    destinations.forEach(dest => {
        const el = document.createElement('div');
        el.className = 'dest-point';
        el.style.left = `${dest.x}px`;
        el.style.top = `${dest.y}px`;
        el.innerHTML = `
            <div class="icon-wrapper">${dest.icon}</div>
            <div class="dest-name">${dest.name}</div>
        `;
        el.onclick = () => showInfo(dest, el);
        mapContent.appendChild(el);
    });

    // Render Region Labels
    const regions = [
        { name: "Manila", x: 100 },
        { name: "The Companies", x: 850 },
        { name: "Tagaytay", x: 1650 },
        { name: "Baguio City", x: 2050 }
    ];

    regions.forEach(r => {
        const label = document.createElement('div');
        label.className = 'region-label';
        label.style.left = `${r.x}px`;
        label.innerText = r.name;
        mapContent.appendChild(label);
    });

    // Draw Lines
    drawPathLines();

    // Carousel Event Listeners
    prevBtn.onclick = () => changePhoto(-1);
    nextBtn.onclick = () => changePhoto(1);
    carouselMain.onclick = () => {
        if (currentDest && currentDest.photos && currentDest.photos[currentPhotoIndex]) {
            window.open(currentDest.photos[currentPhotoIndex], '_blank');
        }
    };
}

function drawPathLines() {
    let pathData = `M ${destinations[0].x + 30} ${destinations[0].y + 30}`;
    
    for (let i = 1; i < destinations.length; i++) {
        pathData += ` L ${destinations[i].x + 30} ${destinations[i].y + 30}`;
    }

    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", pathData);
    path.setAttribute("fill", "none");
    path.setAttribute("stroke", "#8b5a2b");
    path.setAttribute("stroke-width", "2");
    path.setAttribute("stroke-dasharray", "5,5");
    path.setAttribute("opacity", "0.5");
    
    mapLines.appendChild(path);
}

function showInfo(dest, element) {
    currentDest = dest;
    currentPhotoIndex = 0;

    // Update Active State
    document.querySelectorAll('.dest-point').forEach(p => p.classList.remove('active'));
    element.classList.add('active');

    // Update Panels Visibility
    mainPlaceholder.classList.add('hidden');
    detailsBox.classList.remove('hidden');
    mediaBox.classList.remove('hidden');
    
    // Trigger animations
    detailsBox.style.animation = 'none';
    detailsBox.offsetHeight; 
    detailsBox.style.animation = null;
    
    mediaBox.style.animation = 'none';
    mediaBox.offsetHeight;
    mediaBox.style.animation = null;

    infoTitle.innerText = dest.name;
    infoDate.innerText = dest.date;
    
    // Populate sections
    infoBackground.innerText = dest.background;
    
    // Clear and populate highlights
    infoHighlights.innerHTML = '';
    dest.highlights.forEach(h => {
        const li = document.createElement('li');
        li.innerText = h;
        infoHighlights.appendChild(li);
    });
    
    infoComments.innerText = dest.comments;

    updateCarousel();

    // Scroll to panel on mobile
    if (window.innerWidth < 768) {
        detailsBox.scrollIntoView({ behavior: 'smooth' });
    }
}

function updateCarousel() {
    if (!currentDest || !currentDest.photos || currentDest.photos.length === 0) {
        carouselMain.innerHTML = '<div style="color: #8b5a2b; font-style: italic;">No photos available</div>';
        carouselCounter.innerText = "0 / 0";
        prevBtn.disabled = true;
        nextBtn.disabled = true;
        return;
    }

    const photoPath = currentDest.photos[currentPhotoIndex];
    carouselMain.innerHTML = `<img src="${photoPath}" alt="${currentDest.name}" loading="lazy">`;
    carouselCounter.innerText = `${currentPhotoIndex + 1} / ${currentDest.photos.length}`;

    prevBtn.disabled = currentDest.photos.length <= 1;
    nextBtn.disabled = currentDest.photos.length <= 1;
}

function changePhoto(step) {
    if (!currentDest || !currentDest.photos) return;
    
    currentPhotoIndex += step;
    
    if (currentPhotoIndex < 0) {
        currentPhotoIndex = currentDest.photos.length - 1;
    } else if (currentPhotoIndex >= currentDest.photos.length) {
        currentPhotoIndex = 0;
    }
    
    updateCarousel();
}

// Handle resizing (if needed for lines)
window.addEventListener('load', initMap);
