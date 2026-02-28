const areas = {
    Chennai: ["T Nagar", "Velachery", "Anna Nagar"],
    Coimbatore: ["RS Puram", "Gandhipuram", "Peelamedu"],
    Madurai: ["Anna Nagar", "KK Nagar", "Thirunagar"],
    Erode: ["Perundurai", "Bhavani", "Gobichettipalayam"],
    Salem: ["Omalur", "Attur", "Mettur"],
    Krishnagiri: ["Hosur", "Denkanikottai", "Uthangarai"]
};

const stations = [
    {city: "Chennai", area: "T Nagar", name: "T Nagar EV Point", type: "Fast", status: "Available", map: "https://www.google.com/maps/search/?api=1&query=T+Nagar+EV+Point+Chennai"},
    {city: "Chennai", area: "Velachery", name: "Velachery Charge Hub", type: "Normal", status: "Busy", map: "https://www.google.com/maps/search/?api=1&query=Velachery+Charge+Hub+Chennai"},
    {city: "Chennai", area: "Anna Nagar", name: "Anna Nagar EV Station", type: "Fast", status: "Available", map: "https://www.google.com/maps/search/?api=1&query=Anna+Nagar+EV+Station+Chennai"},

    {city: "Coimbatore", area: "RS Puram", name: "RS Puram EV Station", type: "Fast", status: "Available", map: "https://www.google.com/maps/search/?api=1&query=RS+Puram+EV+Station+Coimbatore"},
    {city: "Coimbatore", area: "Gandhipuram", name: "Gandhipuram Charge Hub", type: "Normal", status: "Busy", map: "https://www.google.com/maps/search/?api=1&query=Gandhipuram+EV+Station+Coimbatore"},
    {city: "Coimbatore", area: "Peelamedu", name: "Peelamedu EV Point", type: "Fast", status: "Available", map: "https://www.google.com/maps/search/?api=1&query=Peelamedu+EV+Station+Coimbatore"},

    {city: "Madurai", area: "Anna Nagar", name: "Madurai Anna Nagar EV Hub", type: "Fast", status: "Available", map: "https://www.google.com/maps/search/?api=1&query=Anna+Nagar+EV+Station+Madurai"},
    {city: "Madurai", area: "KK Nagar", name: "KK Nagar Charge Point", type: "Normal", status: "Busy", map: "https://www.google.com/maps/search/?api=1&query=KK+Nagar+EV+Station+Madurai"},
    {city: "Madurai", area: "Thirunagar", name: "Thirunagar EV Station", type: "Fast", status: "Available", map: "https://www.google.com/maps/search/?api=1&query=Thirunagar+EV+Station+Madurai"},

    {city: "Erode", area: "Perundurai", name: "Perundurai EV Hub", type: "Fast", status: "Available", map: "https://www.google.com/maps/search/?api=1&query=Perundurai+EV+Station+Erode"},
    {city: "Erode", area: "Bhavani", name: "Bhavani Charge Point", type: "Normal", status: "Busy", map: "https://www.google.com/maps/search/?api=1&query=Bhavani+EV+Station+Erode"},
    {city: "Erode", area: "Gobichettipalayam", name: "Gobichettipalayam EV Station", type: "Fast", status: "Available", map: "https://www.google.com/maps/search/?api=1&query=Gobichettipalayam+EV+Station+Erode"},

    {city: "Salem", area: "Omalur", name: "Omalur EV Hub", type: "Fast", status: "Available", map: "https://www.google.com/maps/search/?api=1&query=Omalur+EV+Station+Salem"},
    {city: "Salem", area: "Attur", name: "Attur Charge Point", type: "Normal", status: "Busy", map: "https://www.google.com/maps/search/?api=1&query=Attur+EV+Station+Salem"},
    {city: "Salem", area: "Mettur", name: "Mettur EV Station", type: "Fast", status: "Available", map: "https://www.google.com/maps/search/?api=1&query=Mettur+EV+Station+Salem"},

    {city: "Krishnagiri", area: "Hosur", name: "Hosur EV Hub", type: "Fast", status: "Available", map: "https://www.google.com/maps/search/?api=1&query=Hosur+EV+Station+Krishnagiri"},
    {city: "Krishnagiri", area: "Denkanikottai", name: "Denkanikottai Charge Point", type: "Normal", status: "Busy", map: "https://www.google.com/maps/search/?api=1&query=Denkanikottai+EV+Station+Krishnagiri"},
    {city: "Krishnagiri", area: "Uthangarai", name: "Uthangarai EV Station", type: "Fast", status: "Available", map: "https://www.google.com/maps/search/?api=1&query=Uthangarai+EV+Station+Krishnagiri"}
];

function updateAreaDropdown() {
    const city = document.getElementById("citySelect").value;
    const areaSelect = document.getElementById("areaSelect");
    areaSelect.innerHTML = "<option value=''>--Select Area--</option>";

    if(city) {
        areas[city].forEach(a => {
            const option = document.createElement("option");
            option.value = a;
            option.text = a;
            areaSelect.appendChild(option);
        });
    }
}

function findMyStation() {
    const city = document.getElementById("citySelect").value;
    const area = document.getElementById("areaSelect").value;
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "";

    if(!city || !area) {
        resultDiv.innerHTML = "<p>Please select both city and area.</p>";
        return;
    }

    const filtered = stations.filter(s => s.city === city && s.area === area);

    if(filtered.length === 0) {
        resultDiv.innerHTML = "<p>No stations found.</p>";
        return;
    }

    filtered.forEach(s => {
        const statusClass = s.status === "Available" ? "available" : "busy";

        resultDiv.innerHTML += `
            <div class="station-card">
                <h3>${s.name}</h3>
                <p><b>Type:</b> ${s.type}</p>
                <p class="${statusClass}"><b>Status:</b> ${s.status}</p>
                <a href="${s.map}" target="_blank"><button>View on Map</button></a>
            </div>
        `;
    });
}

function refreshAvailability() {
    stations.forEach(function(s) {
        if (Math.random()>0.5){
            s.status = "Available";
        } else {
            s.status ="Busy";
        }
    });

    findMyStation();
}