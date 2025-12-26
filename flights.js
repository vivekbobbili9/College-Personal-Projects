const flights = [
  {
    id: "UK838",
    airline: "Vistara",
    flightNumber: "UK838",
    aircraftType: "Airbus A320neo",
    destination: {
      city: "Delhi",
      iata: "DEL"
    },
    origin: "Hyderabad (HYD)",
    date: "2025-09-16",
    departureTime: "10:45 AM",
    gate: "B5",
    type: "Domestic",
    status: "Ready for Boarding",
    distance: 1250,
    estimatedFlightTime: "1h 45m",
    occupancy: {
      business: { total: 8, occupied: 8 },
      economy: { total: 174, occupied: 167 }
    },
    passengers: [
      { order: 1, name: "Isha Gupta", seat: "5A", id: "PRIO123", status: "Priority" },
      { order: 2, name: "Raj Patel", seat: "30F", id: "ABC111", status: "Waiting" },
      { order: 3, name: "Sanya Sharma", seat: "28A", id: "DEF222", status: "Waiting" },
      { order: 4, name: "Arjun Mehta", seat: "25C", id: "GHI333", status: "Waiting" },
      { order: 5, name: "Priya Chauhan", seat: "18B", id: "JKL444", status: "Waiting" },
      { order: 6, name: "Karan Singh", seat: "15F", id: "MNO555", status: "Waiting" },
      { order: 7, name: "Diya Reddy", seat: "8A", id: "PQR666", status: "Waiting" },
      { order: 8, name: "Ananya Rao", seat: "2C", id: "STU777", status: "Waiting" },
      { order: 9, name: "Vikram Nair", seat: "2D", id: "VWX888", status: "Waiting" },
      { order: 10, name: "Aditi Joshi", seat: "1A", id: "YZA999", status: "Waiting" }
    ]
  },
  {
    id: "AI101",
    airline: "Air India",
    flightNumber: "AI101",
    aircraftType: "Boeing 777",
    destination: {
      city: "New York",
      iata: "JFK"
    },
    origin: "Delhi (DEL)",
    date: "2025-09-20",
    departureTime: "22:30",
    gate: "C12",
    type: "International",
    status: "Scheduled",
    occupancy: {
      business: { total: 40, occupied: 35 },
      economy: { total: 200, occupied: 180 }
    },
    passengers: [
      { order: 1, name: "Amit Sharma", seat: "3A", id: "INT001", status: "Priority" },
      { order: 2, name: "Neha Kapoor", seat: "45B", id: "INT002", status: "Waiting" },
      { order: 3, name: "Rohit Verma", seat: "42C", id: "INT003", status: "Waiting" },
      { order: 4, name: "Priyanka Malhotra", seat: "38D", id: "INT004", status: "Waiting" },
      { order: 5, name: "Suresh Kumar", seat: "25A", id: "INT005", status: "Waiting" },
      { order: 6, name: "Anita Desai", seat: "20F", id: "INT006", status: "Waiting" },
      { order: 7, name: "Vikram Singh", seat: "15B", id: "INT007", status: "Waiting" },
      { order: 8, name: "Meera Patel", seat: "10C", id: "INT008", status: "Waiting" },
      { order: 9, name: "Arun Mehra", seat: "5D", id: "INT009", status: "Waiting" },
      { order: 10, name: "Sunita Rao", seat: "2A", id: "INT010", status: "Waiting" }
    ]
  },
  {
    id: "6E204",
    airline: "IndiGo",
    flightNumber: "6E204",
    aircraftType: "Airbus A320",
    destination: {
      city: "Mumbai",
      iata: "BOM"
    },
    origin: "Hyderabad (HYD)",
    date: "2025-09-16",
    departureTime: "12:30 PM",
    gate: "A3",
    type: "Domestic",
    status: "On Time",
    occupancy: {
      business: { total: 0, occupied: 0 },
      economy: { total: 180, occupied: 150 }
    },
    passengers: [
      { order: 1, name: "Rahul Kumar", seat: "35C", id: "DOM001", status: "Waiting" },
      { order: 2, name: "Pooja Singh", seat: "32A", id: "DOM002", status: "Waiting" },
      { order: 3, name: "Vivek Reddy", seat: "30F", id: "DOM003", status: "Waiting" },
      { order: 4, name: "Sneha Patel", seat: "28B", id: "DOM004", status: "Waiting" },
      { order: 5, name: "Aakash Gupta", seat: "25D", id: "DOM005", status: "Waiting" },
      { order: 6, name: "Neelam Joshi", seat: "22E", id: "DOM006", status: "Waiting" },
      { order: 7, name: "Ravi Nair", seat: "20A", id: "DOM007", status: "Waiting" },
      { order: 8, name: "Kavita Sharma", seat: "18C", id: "DOM008", status: "Waiting" },
      { order: 9, name: "Siddharth Mehta", seat: "15F", id: "DOM009", status: "Waiting" },
      { order: 10, name: "Anjali Rao", seat: "12B", id: "DOM010", status: "Waiting" },
      { order: 11, name: "Harish Chauhan", seat: "10D", id: "DOM011", status: "Waiting" },
      { order: 12, name: "Divya Verma", seat: "8A", id: "DOM012", status: "Waiting" }
    ]
  },
  {
    id: "EK525",
    airline: "Emirates",
    flightNumber: "EK525",
    aircraftType: "Boeing 777-300ER",
    destination: {
      city: "Dubai",
      iata: "DXB"
    },
    origin: "Hyderabad (HYD)",
    date: "2025-09-16",
    departureTime: "04:15 PM",
    gate: "D7",
    type: "International",
    status: "Delayed",
    occupancy: {
      business: { total: 42, occupied: 38 },
      economy: { total: 304, occupied: 290 }
    },
    passengers: [
      { order: 1, name: "Mohammed Ali", seat: "50K", id: "INT011", status: "Waiting" },
      { order: 2, name: "Fatima Khan", seat: "48J", id: "INT012", status: "Waiting" },
      { order: 3, name: "Ahmed Rahman", seat: "45H", id: "INT013", status: "Waiting" },
      { order: 4, name: "Sara Ahmed", seat: "42G", id: "INT014", status: "Waiting" },
      { order: 5, name: "Omar Malik", seat: "40F", id: "INT015", status: "Waiting" },
      { order: 6, name: "Aisha Siddiqui", seat: "38E", id: "INT016", status: "Waiting" },
      { order: 7, name: "Yusuf Hussain", seat: "35D", id: "INT017", status: "Waiting" },
      { order: 8, name: "Zara Iqbal", seat: "32C", id: "INT018", status: "Waiting" },
      { order: 9, name: "Bilal Shaikh", seat: "30B", id: "INT019", status: "Waiting" },
      { order: 10, name: "Laila Abbas", seat: "28A", id: "INT020", status: "Waiting" },
      { order: 11, name: "Khalid Noor", seat: "25J", id: "INT021", status: "Waiting" },
      { order: 12, name: "Nadia Farooq", seat: "22H", id: "INT022", status: "Waiting" },
      { order: 13, name: "Imran Qureshi", seat: "20G", id: "INT023", status: "Waiting" },
      { order: 14, name: "Rania Saeed", seat: "18F", id: "INT024", status: "Waiting" },
      { order: 15, name: "Tariq Anwar", seat: "15E", id: "INT025", status: "Waiting" }
    ]
  },
  {
    id: "SG123",
    airline: "SpiceJet",
    flightNumber: "SG123",
    aircraftType: "Boeing 737",
    destination: {
      city: "Bangalore",
      iata: "BLR"
    },
    origin: "Hyderabad (HYD)",
    date: "2025-09-16",
    departureTime: "02:00 PM",
    gate: "B2",
    type: "Domestic",
    status: "Ready for Boarding",
    occupancy: {
      business: { total: 0, occupied: 0 },
      economy: { total: 189, occupied: 175 }
    },
    passengers: [
      { order: 1, name: "Lakshmi Narayan", seat: "29C", id: "DOM013", status: "Waiting" },
      { order: 2, name: "Suresh Babu", seat: "27A", id: "DOM014", status: "Waiting" },
      { order: 3, name: "Geeta Devi", seat: "25F", id: "DOM015", status: "Waiting" },
      { order: 4, name: "Ramesh Kumar", seat: "23B", id: "DOM016", status: "Waiting" },
      { order: 5, name: "Sunita Yadav", seat: "21D", id: "DOM017", status: "Waiting" },
      { order: 6, name: "Vijay Singh", seat: "19E", id: "DOM018", status: "Waiting" },
      { order: 7, name: "Priyanka Chopra", seat: "17A", id: "DOM019", status: "Waiting" },
      { order: 8, name: "Amitabh Bachchan", seat: "15C", id: "DOM020", status: "Waiting" },
      { order: 9, name: "Shah Rukh Khan", seat: "13F", id: "DOM021", status: "Waiting" },
      { order: 10, name: "Deepika Padukone", seat: "11B", id: "DOM022", status: "Waiting" }
    ]
  },
  {
    id: "QP1248",
    airline: "Akasa Air",
    flightNumber: "QP1248",
    aircraftType: "Boeing 737 MAX",
    destination: {
      city: "Chennai",
      iata: "MAA"
    },
    origin: "Hyderabad (HYD)",
    date: "2025-09-16",
    departureTime: "07:30 AM",
    gate: "A7",
    type: "Domestic",
    status: "On Time",
    occupancy: {
      business: { total: 0, occupied: 0 },
      economy: { total: 186, occupied: 168 }
    },
    passengers: [
      { order: 1, name: "Venkatesh Iyer", seat: "35F", id: "DOM023", status: "Waiting" },
      { order: 2, name: "Kavitha Menon", seat: "33C", id: "DOM024", status: "Waiting" },
      { order: 3, name: "Arun Krishnan", seat: "31B", id: "DOM025", status: "Waiting" },
      { order: 4, name: "Padma Lakshmi", seat: "29E", id: "DOM026", status: "Waiting" },
      { order: 5, name: "Rajesh Subramanian", seat: "27A", id: "DOM027", status: "Waiting" },
      { order: 6, name: "Malini Raghavan", seat: "25D", id: "DOM028", status: "Waiting" },
      { order: 7, name: "Karthik Sundaram", seat: "23F", id: "DOM029", status: "Waiting" },
      { order: 8, name: "Shreya Balan", seat: "21C", id: "DOM030", status: "Waiting" },
      { order: 9, name: "Murali Vijay", seat: "19B", id: "DOM031", status: "Waiting" },
      { order: 10, name: "Lakshmi Natarajan", seat: "17E", id: "DOM032", status: "Waiting" },
      { order: 11, name: "Srinivas Reddy", seat: "15A", id: "DOM033", status: "Waiting" },
      { order: 12, name: "Divya Suresh", seat: "13D", id: "DOM034", status: "Waiting" },
      { order: 13, name: "Ramakrishna Rao", seat: "11F", id: "DOM035", status: "Waiting" },
      { order: 14, name: "Anitha Kumar", seat: "9C", id: "DOM036", status: "Waiting" },
      { order: 15, name: "Bala Ganesh", seat: "7B", id: "DOM037", status: "Waiting" },
      { order: 16, name: "Vaani Kapoor", seat: "5E", id: "DOM038", status: "Waiting" },
      { order: 17, name: "Naveen Babu", seat: "3A", id: "DOM039", status: "Waiting" }
    ]
  },
  {
    id: "IX482",
    airline: "Air India Express",
    flightNumber: "IX482",
    aircraftType: "Boeing 737-800",
    destination: {
      city: "Kolkata",
      iata: "CCU"
    },
    origin: "Hyderabad (HYD)",
    date: "2025-09-16",
    departureTime: "09:15 AM",
    gate: "B8",
    type: "Domestic",
    status: "Scheduled",
    occupancy: {
      business: { total: 0, occupied: 0 },
      economy: { total: 175, occupied: 159 }
    },
    passengers: [
      { order: 1, name: "Soumya Chatterjee", seat: "34F", id: "DOM040", status: "Waiting" },
      { order: 2, name: "Aniket Banerjee", seat: "32D", id: "DOM041", status: "Waiting" },
      { order: 3, name: "Ritika Sen", seat: "30A", id: "DOM042", status: "Waiting" },
      { order: 4, name: "Debashish Ghosh", seat: "28C", id: "DOM043", status: "Waiting" },
      { order: 5, name: "Priyanka Mukherjee", seat: "26E", id: "DOM044", status: "Waiting" },
      { order: 6, name: "Arjun Das", seat: "24B", id: "DOM045", status: "Waiting" },
      { order: 7, name: "Sanjana Bose", seat: "22F", id: "DOM046", status: "Waiting" },
      { order: 8, name: "Abhishek Roy", seat: "20D", id: "DOM047", status: "Waiting" },
      { order: 9, name: "Tanvi Sarkar", seat: "18A", id: "DOM048", status: "Waiting" },
      { order: 10, name: "Kaushik Dutta", seat: "16C", id: "DOM049", status: "Waiting" },
      { order: 11, name: "Riya Chakraborty", seat: "14E", id: "DOM050", status: "Waiting" },
      { order: 12, name: "Suman Bhattacharya", seat: "12B", id: "DOM051", status: "Waiting" },
      { order: 13, name: "Ananya Mitra", seat: "10F", id: "DOM052", status: "Waiting" },
      { order: 14, name: "Rakesh Sinha", seat: "8D", id: "DOM053", status: "Waiting" },
      { order: 15, name: "Nandini Paul", seat: "6A", id: "DOM054", status: "Waiting" },
      { order: 16, name: "Subrata Kundu", seat: "4C", id: "DOM055", status: "Waiting" },
      { order: 17, name: "Moumita Sengupta", seat: "2E", id: "DOM056", status: "Waiting" },
      { order: 18, name: "Rohit Mazumdar", seat: "1B", id: "DOM057", status: "Waiting" }
    ]
  },
  {
    id: "6E7158",
    airline: "IndiGo",
    flightNumber: "6E7158",
    aircraftType: "Airbus A320neo",
    destination: {
      city: "Pune",
      iata: "PNQ"
    },
    origin: "Hyderabad (HYD)",
    date: "2025-09-16",
    departureTime: "11:00 AM",
    gate: "A5",
    type: "Domestic",
    status: "Delayed",
    occupancy: {
      business: { total: 0, occupied: 0 },
      economy: { total: 180, occupied: 162 }
    },
    passengers: [
      { order: 1, name: "Manish Deshmukh", seat: "36B", id: "DOM058", status: "Waiting" },
      { order: 2, name: "Snehal Kulkarni", seat: "34E", id: "DOM059", status: "Waiting" },
      { order: 3, name: "Varun Patil", seat: "32A", id: "DOM060", status: "Waiting" },
      { order: 4, name: "Shweta Joshi", seat: "30F", id: "DOM061", status: "Waiting" },
      { order: 5, name: "Nikhil Bhosale", seat: "28C", id: "DOM062", status: "Waiting" },
      { order: 6, name: "Pooja Marathe", seat: "26D", id: "DOM063", status: "Waiting" },
      { order: 7, name: "Aditya Pawar", seat: "24B", id: "DOM064", status: "Waiting" },
      { order: 8, name: "Rucha Deshpande", seat: "22E", id: "DOM065", status: "Waiting" },
      { order: 9, name: "Sagar Kale", seat: "20F", id: "DOM066", status: "Waiting" },
      { order: 10, name: "Vidya Sawant", seat: "18A", id: "DOM067", status: "Waiting" },
      { order: 11, name: "Prasad Shinde", seat: "16C", id: "DOM068", status: "Waiting" },
      { order: 12, name: "Madhuri Raut", seat: "14D", id: "DOM069", status: "Waiting" },
      { order: 13, name: "Chetan Jadhav", seat: "12B", id: "DOM070", status: "Waiting" },
      { order: 14, name: "Anushka More", seat: "10E", id: "DOM071", status: "Waiting" },
      { order: 15, name: "Rohit Gaikwad", seat: "8F", id: "DOM072", status: "Waiting" },
      { order: 16, name: "Pallavi Nikam", seat: "6A", id: "DOM073", status: "Waiting" },
      { order: 17, name: "Sachin Mane", seat: "4C", id: "DOM074", status: "Waiting" },
      { order: 18, name: "Trupti Salve", seat: "2D", id: "DOM075", status: "Waiting" }
    ]
  },
  {
    id: "UK957",
    airline: "Vistara",
    flightNumber: "UK957",
    aircraftType: "Airbus A321neo",
    destination: {
      city: "Jaipur",
      iata: "JAI"
    },
    origin: "Hyderabad (HYD)",
    date: "2025-09-16",
    departureTime: "01:45 PM",
    gate: "B4",
    type: "Domestic",
    status: "On Time",
    occupancy: {
      business: { total: 12, occupied: 10 },
      economy: { total: 176, occupied: 160 }
    },
    passengers: [
      { order: 1, name: "Rajat Sharma", seat: "33F", id: "DOM076", status: "Waiting" },
      { order: 2, name: "Simran Agarwal", seat: "31C", id: "DOM077", status: "Waiting" },
      { order: 3, name: "Vikrant Rajput", seat: "29B", id: "DOM078", status: "Waiting" },
      { order: 4, name: "Meenakshi Rathore", seat: "27E", id: "DOM079", status: "Waiting" },
      { order: 5, name: "Aryan Chouhan", seat: "25A", id: "DOM080", status: "Waiting" },
      { order: 6, name: "Deepti Meena", seat: "23D", id: "DOM081", status: "Waiting" },
      { order: 7, name: "Harshit Gehlot", seat: "21F", id: "DOM082", status: "Waiting" },
      { order: 8, name: "Kavita Bishnoi", seat: "19C", id: "DOM083", status: "Waiting" },
      { order: 9, name: "Nitin Jangid", seat: "17B", id: "DOM084", status: "Waiting" },
      { order: 10, name: "Ritu Poonia", seat: "15E", id: "DOM085", status: "Waiting" },
      { order: 11, name: "Ashok Soni", seat: "13A", id: "DOM086", status: "Waiting" },
      { order: 12, name: "Shilpa Mathur", seat: "11D", id: "DOM087", status: "Waiting" },
      { order: 13, name: "Gaurav Shekhawat", seat: "9F", id: "DOM088", status: "Waiting" },
      { order: 14, name: "Priya Vijay", seat: "7C", id: "DOM089", status: "Waiting" },
      { order: 15, name: "Manish Jain", seat: "5B", id: "DOM090", status: "Waiting" },
      { order: 16, name: "Anjali Singhal", seat: "3E", id: "DOM091", status: "Waiting" },
      { order: 17, name: "Tarun Mittal", seat: "2A", id: "DOM092", status: "Waiting" }
    ]
  },
  {
    id: "6E6312",
    airline: "IndiGo",
    flightNumber: "6E6312",
    aircraftType: "Airbus A320",
    destination: {
      city: "Goa",
      iata: "GOI"
    },
    origin: "Hyderabad (HYD)",
    date: "2025-09-16",
    departureTime: "03:20 PM",
    gate: "A2",
    type: "Domestic",
    status: "Scheduled",
    occupancy: {
      business: { total: 0, occupied: 0 },
      economy: { total: 180, occupied: 165 }
    },
    passengers: [
      { order: 1, name: "Miguel D'Souza", seat: "35D", id: "DOM093", status: "Waiting" },
      { order: 2, name: "Alisha Fernandes", seat: "33B", id: "DOM094", status: "Waiting" },
      { order: 3, name: "Ryan Rodrigues", seat: "31E", id: "DOM095", status: "Waiting" },
      { order: 4, name: "Natasha Pereira", seat: "29F", id: "DOM096", status: "Waiting" },
      { order: 5, name: "Aaron Dias", seat: "27A", id: "DOM097", status: "Waiting" },
      { order: 6, name: "Jessica Lobo", seat: "25C", id: "DOM098", status: "Waiting" },
      { order: 7, name: "Shawn Gomes", seat: "23D", id: "DOM099", status: "Waiting" },
      { order: 8, name: "Anita Miranda", seat: "21B", id: "DOM100", status: "Waiting" },
      { order: 9, name: "Kevin Braganza", seat: "19E", id: "DOM101", status: "Waiting" },
      { order: 10, name: "Diana Sequeira", seat: "17F", id: "DOM102", status: "Waiting" },
      { order: 11, name: "Brandon Carvalho", seat: "15A", id: "DOM103", status: "Waiting" },
      { order: 12, name: "Melanie Furtado", seat: "13C", id: "DOM104", status: "Waiting" },
      { order: 13, name: "Ryan Monteiro", seat: "11D", id: "DOM105", status: "Waiting" },
      { order: 14, name: "Priyanka Silva", seat: "9B", id: "DOM106", status: "Waiting" },
      { order: 15, name: "Jason Pinto", seat: "7E", id: "DOM107", status: "Waiting" },
      { order: 16, name: "Christine Rebello", seat: "5F", id: "DOM108", status: "Waiting" },
      { order: 17, name: "Brendan D'Costa", seat: "3A", id: "DOM109", status: "Waiting" },
      { order: 18, name: "Scarlett Vaz", seat: "1C", id: "DOM110", status: "Waiting" }
    ]
  },
  {
    id: "AI847",
    airline: "Air India",
    flightNumber: "AI847",
    aircraftType: "Airbus A320",
    destination: {
      city: "Ahmedabad",
      iata: "AMD"
    },
    origin: "Hyderabad (HYD)",
    date: "2025-09-16",
    departureTime: "05:10 PM",
    gate: "B6",
    type: "Domestic",
    status: "On Time",
    occupancy: {
      business: { total: 8, occupied: 7 },
      economy: { total: 150, occupied: 142 }
    },
    passengers: [
      { order: 1, name: "Hitesh Shah", seat: "32E", id: "DOM111", status: "Waiting" },
      { order: 2, name: "Kinjal Patel", seat: "30B", id: "DOM112", status: "Waiting" },
      { order: 3, name: "Chirag Modi", seat: "28F", id: "DOM113", status: "Waiting" },
      { order: 4, name: "Rani Thakkar", seat: "26C", id: "DOM114", status: "Waiting" },
      { order: 5, name: "Dhruv Mehta", seat: "24A", id: "DOM115", status: "Waiting" },
      { order: 6, name: "Ishita Trivedi", seat: "22D", id: "DOM116", status: "Waiting" },
      { order: 7, name: "Parth Desai", seat: "20E", id: "DOM117", status: "Waiting" },
      { order: 8, name: "Naina Joshi", seat: "18B", id: "DOM118", status: "Waiting" },
      { order: 9, name: "Yash Pandya", seat: "16F", id: "DOM119", status: "Waiting" },
      { order: 10, name: "Diya Vora", seat: "14C", id: "DOM120", status: "Waiting" },
      { order: 11, name: "Ravi Panchal", seat: "12A", id: "DOM121", status: "Waiting" },
      { order: 12, name: "Sonal Parekh", seat: "10D", id: "DOM122", status: "Waiting" },
      { order: 13, name: "Harsh Raval", seat: "8E", id: "DOM123", status: "Waiting" },
      { order: 14, name: "Krisha Sheth", seat: "6B", id: "DOM124", status: "Waiting" },
      { order: 15, name: "Amit Bhatt", seat: "4F", id: "DOM125", status: "Waiting" },
      { order: 16, name: "Prachi Amin", seat: "2C", id: "DOM126", status: "Waiting" },
      { order: 17, name: "Nirav Gandhi", seat: "1A", id: "DOM127", status: "Waiting" }
    ]
  },
  {
    id: "QR500",
    airline: "Qatar Airways",
    flightNumber: "QR500",
    aircraftType: "Boeing 787-9 Dreamliner",
    destination: {
      city: "Doha",
      iata: "DOH"
    },
    origin: "Hyderabad (HYD)",
    date: "2025-09-16",
    departureTime: "08:40 PM",
    gate: "D3",
    type: "International",
    status: "On Time",
    occupancy: {
      business: { total: 28, occupied: 24 },
      economy: { total: 246, occupied: 230 }
    },
    passengers: [
      { order: 1, name: "Abdullah Hassan", seat: "42K", id: "INT026", status: "Waiting" },
      { order: 2, name: "Yasmin Al-Farsi", seat: "40H", id: "INT027", status: "Waiting" },
      { order: 3, name: "Ibrahim Khalil", seat: "38G", id: "INT028", status: "Waiting" },
      { order: 4, name: "Noura Al-Mansoori", seat: "36F", id: "INT029", status: "Waiting" },
      { order: 5, name: "Hamza Youssef", seat: "34E", id: "INT030", status: "Waiting" },
      { order: 6, name: "Amira Ahmed", seat: "32D", id: "INT031", status: "Waiting" },
      { order: 7, name: "Tariq Al-Rashid", seat: "30C", id: "INT032", status: "Waiting" },
      { order: 8, name: "Layla Hussein", seat: "28B", id: "INT033", status: "Waiting" },
      { order: 9, name: "Karim Nasser", seat: "26A", id: "INT034", status: "Waiting" },
      { order: 10, name: "Salma Farid", seat: "24J", id: "INT035", status: "Waiting" },
      { order: 11, name: "Jamal Al-Thani", seat: "22K", id: "INT036", status: "Waiting" },
      { order: 12, name: "Hana Al-Dosari", seat: "20H", id: "INT037", status: "Waiting" },
      { order: 13, name: "Rashed Mahmoud", seat: "18G", id: "INT038", status: "Waiting" },
      { order: 14, name: "Zahra Khaled", seat: "16F", id: "INT039", status: "Waiting" },
      { order: 15, name: "Faisal Al-Kuwari", seat: "14E", id: "INT040", status: "Waiting" },
      { order: 16, name: "Mariam Saeed", seat: "12D", id: "INT041", status: "Waiting" },
      { order: 17, name: "Omar Al-Jaber", seat: "10C", id: "INT042", status: "Waiting" },
      { order: 18, name: "Leena Mustafa", seat: "8B", id: "INT043", status: "Waiting" },
      { order: 19, name: "Ali Brahim", seat: "6A", id: "INT044", status: "Waiting" }
    ]
  },
  {
    id: "SQ522",
    airline: "Singapore Airlines",
    flightNumber: "SQ522",
    aircraftType: "Airbus A350-900",
    destination: {
      city: "Singapore",
      iata: "SIN"
    },
    origin: "Hyderabad (HYD)",
    date: "2025-09-16",
    departureTime: "11:30 PM",
    gate: "D9",
    type: "International",
    status: "Scheduled",
    occupancy: {
      business: { total: 42, occupied: 38 },
      economy: { total: 253, occupied: 240 }
    },
    passengers: [
      { order: 1, name: "Wei Chen", seat: "45J", id: "INT045", status: "Waiting" },
      { order: 2, name: "Priya Ramasamy", seat: "43H", id: "INT046", status: "Waiting" },
      { order: 3, name: "David Tan", seat: "41G", id: "INT047", status: "Waiting" },
      { order: 4, name: "Mei Lin Wong", seat: "39F", id: "INT048", status: "Waiting" },
      { order: 5, name: "Arjun Krishnan", seat: "37E", id: "INT049", status: "Waiting" },
      { order: 6, name: "Sarah Lim", seat: "35D", id: "INT050", status: "Waiting" },
      { order: 7, name: "Rajesh Kumar", seat: "33C", id: "INT051", status: "Waiting" },
      { order: 8, name: "Angela Ng", seat: "31B", id: "INT052", status: "Waiting" },
      { order: 9, name: "Marcus Koh", seat: "29A", id: "INT053", status: "Waiting" },
      { order: 10, name: "Kavitha Nair", seat: "27K", id: "INT054", status: "Waiting" },
      { order: 11, name: "Benjamin Goh", seat: "25J", id: "INT055", status: "Waiting" },
      { order: 12, name: "Nisha Pillai", seat: "23H", id: "INT056", status: "Waiting" },
      { order: 13, name: "Ryan Teo", seat: "21G", id: "INT057", status: "Waiting" },
      { order: 14, name: "Deepa Menon", seat: "19F", id: "INT058", status: "Waiting" },
      { order: 15, name: "Ethan Lee", seat: "17E", id: "INT059", status: "Waiting" },
      { order: 16, name: "Lakshmi Srinivasan", seat: "15D", id: "INT060", status: "Waiting" },
      { order: 17, name: "Jonathan Sim", seat: "13C", id: "INT061", status: "Waiting" },
      { order: 18, name: "Aishwarya Reddy", seat: "11B", id: "INT062", status: "Waiting" },
      { order: 19, name: "Daniel Ong", seat: "9A", id: "INT063", status: "Waiting" },
      { order: 20, name: "Revathi Subramaniam", seat: "7K", id: "INT064", status: "Waiting" }
    ]
  },
  {
    id: "BA118",
    airline: "British Airways",
    flightNumber: "BA118",
    aircraftType: "Boeing 787-10 Dreamliner",
    destination: {
      city: "London",
      iata: "LHR"
    },
    origin: "Hyderabad (HYD)",
    date: "2025-09-17",
    departureTime: "02:15 AM",
    gate: "D11",
    type: "International",
    status: "Scheduled",
    occupancy: {
      business: { total: 48, occupied: 44 },
      economy: { total: 283, occupied: 265 }
    },
    passengers: [
      { order: 1, name: "James Wilson", seat: "48K", id: "INT065", status: "Waiting" },
      { order: 2, name: "Emma Thompson", seat: "46J", id: "INT066", status: "Waiting" },
      { order: 3, name: "Oliver Smith", seat: "44H", id: "INT067", status: "Waiting" },
      { order: 4, name: "Sophia Brown", seat: "42G", id: "INT068", status: "Waiting" },
      { order: 5, name: "Harry Johnson", seat: "40F", id: "INT069", status: "Waiting" },
      { order: 6, name: "Isabella Williams", seat: "38E", id: "INT070", status: "Waiting" },
      { order: 7, name: "George Taylor", seat: "36D", id: "INT071", status: "Waiting" },
      { order: 8, name: "Amelia Davies", seat: "34C", id: "INT072", status: "Waiting" },
      { order: 9, name: "Jack Evans", seat: "32B", id: "INT073", status: "Waiting" },
      { order: 10, name: "Emily Wilson", seat: "30A", id: "INT074", status: "Waiting" },
      { order: 11, name: "Thomas Roberts", seat: "28K", id: "INT075", status: "Waiting" },
      { order: 12, name: "Charlotte Jones", seat: "26J", id: "INT076", status: "Waiting" },
      { order: 13, name: "William Anderson", seat: "24H", id: "INT077", status: "Waiting" },
      { order: 14, name: "Jessica Moore", seat: "22G", id: "INT078", status: "Waiting" },
      { order: 15, name: "Daniel Clarke", seat: "20F", id: "INT079", status: "Waiting" },
      { order: 16, name: "Chloe White", seat: "18E", id: "INT080", status: "Waiting" },
      { order: 17, name: "Alexander Harris", seat: "16D", id: "INT081", status: "Waiting" },
      { order: 18, name: "Grace Martin", seat: "14C", id: "INT082", status: "Waiting" }
    ]
  },
  {
    id: "LH763",
    airline: "Lufthansa",
    flightNumber: "LH763",
    aircraftType: "Airbus A340-600",
    destination: {
      city: "Frankfurt",
      iata: "FRA"
    },
    origin: "Hyderabad (HYD)",
    date: "2025-09-16",
    departureTime: "10:50 PM",
    gate: "D5",
    type: "International",
    status: "On Time",
    occupancy: {
      business: { total: 44, occupied: 40 },
      economy: { total: 255, occupied: 238 }
    },
    passengers: [
      { order: 1, name: "Klaus Schmidt", seat: "44K", id: "INT083", status: "Waiting" },
      { order: 2, name: "Anna Mueller", seat: "42J", id: "INT084", status: "Waiting" },
      { order: 3, name: "Hans Weber", seat: "40H", id: "INT085", status: "Waiting" },
      { order: 4, name: "Petra Wagner", seat: "38G", id: "INT086", status: "Waiting" },
      { order: 5, name: "Wolfgang Becker", seat: "36F", id: "INT087", status: "Waiting" },
      { order: 6, name: "Sabine Hoffmann", seat: "34E", id: "INT088", status: "Waiting" },
      { order: 7, name: "Jurgen Fischer", seat: "32D", id: "INT089", status: "Waiting" },
      { order: 8, name: "Helga Zimmermann", seat: "30C", id: "INT090", status: "Waiting" },
      { order: 9, name: "Dieter Schulz", seat: "28B", id: "INT091", status: "Waiting" },
      { order: 10, name: "Ingrid Koch", seat: "26A", id: "INT092", status: "Waiting" },
      { order: 11, name: "Michael Kruger", seat: "24K", id: "INT093", status: "Waiting" },
      { order: 12, name: "Monika Hartmann", seat: "22J", id: "INT094", status: "Waiting" },
      { order: 13, name: "Stefan Lange", seat: "20H", id: "INT095", status: "Waiting" },
      { order: 14, name: "Gisela Schneider", seat: "18G", id: "INT096", status: "Waiting" },
      { order: 15, name: "Rainer Klein", seat: "16F", id: "INT097", status: "Waiting" },
      { order: 16, name: "Erika Wolf", seat: "14E", id: "INT098", status: "Waiting" },
      { order: 17, name: "Andreas Schroeder", seat: "12D", id: "INT099", status: "Waiting" },
      { order: 18, name: "Brigitte Neumann", seat: "10C", id: "INT100", status: "Waiting" },
      { order: 19, name: "Martin Braun", seat: "8B", id: "INT101", status: "Waiting" }
    ]
  },
  {
    id: "TG331",
    airline: "Thai Airways",
    flightNumber: "TG331",
    aircraftType: "Boeing 777-200ER",
    destination: {
      city: "Bangkok",
      iata: "BKK"
    },
    origin: "Hyderabad (HYD)",
    date: "2025-09-16",
    departureTime: "06:45 PM",
    gate: "D8",
    type: "International",
    status: "On Time",
    occupancy: {
      business: { total: 35, occupied: 32 },
      economy: { total: 267, occupied: 250 }
    },
    passengers: [
      { order: 1, name: "Somchai Prasert", seat: "46J", id: "INT102", status: "Waiting" },
      { order: 2, name: "Nattaya Chaiyawat", seat: "44H", id: "INT103", status: "Waiting" },
      { order: 3, name: "Kittipong Thanasak", seat: "42G", id: "INT104", status: "Waiting" },
      { order: 4, name: "Panida Siriporn", seat: "40F", id: "INT105", status: "Waiting" },
      { order: 5, name: "Chaiwat Boonsong", seat: "38E", id: "INT106", status: "Waiting" },
      { order: 6, name: "Siriwan Thongchai", seat: "36D", id: "INT107", status: "Waiting" },
      { order: 7, name: "Anucha Phongsakul", seat: "34C", id: "INT108", status: "Waiting" },
      { order: 8, name: "Wilai Sukhum", seat: "32B", id: "INT109", status: "Waiting" },
      { order: 9, name: "Surasak Wattana", seat: "30A", id: "INT110", status: "Waiting" },
      { order: 10, name: "Orawan Mongkol", seat: "28K", id: "INT111", status: "Waiting" },
      { order: 11, name: "Pichit Narong", seat: "26J", id: "INT112", status: "Waiting" },
      { order: 12, name: "Kanokwan Somporn", seat: "24H", id: "INT113", status: "Waiting" },
      { order: 13, name: "Thaworn Lek", seat: "22G", id: "INT114", status: "Waiting" },
      { order: 14, name: "Waranya Suchart", seat: "20F", id: "INT115", status: "Waiting" },
      { order: 15, name: "Boonmee Panya", seat: "18E", id: "INT116", status: "Waiting" },
      { order: 16, name: "Sunisa Manop", seat: "16D", id: "INT117", status: "Waiting" },
      { order: 17, name: "Apirak Chatchai", seat: "14C", id: "INT118", status: "Waiting" },
      { order: 18, name: "Jintana Pranom", seat: "12B", id: "INT119", status: "Waiting" },
      { order: 19, name: "Niran Somchai", seat: "10A", id: "INT120", status: "Waiting" },
      { order: 20, name: "Anchana Preecha", seat: "8K", id: "INT121", status: "Waiting" }
    ]
  }
];
