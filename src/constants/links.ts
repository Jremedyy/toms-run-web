/**
 * Centralized link constants for Tom's Run Relay website
 * Update these values once and they'll be reflected across the entire site
 */

// ============================================
// EVENT INFO
// ============================================
export const EVENT_INFO = {
  year: "29th",
  dates: "June 4th - 6th, 2027",
  shortDates: "June 4-6, 2027",
  yearNumber: 29,
  startDate: "2027-06-04T00:01:00-04:00",
  endDate: "2027-06-06T11:00:00-04:00",
} as const;

// ============================================
// HOTEL (START LOCATION)
// ============================================
export const HOTEL = {
  name: "Fairfield by Marriott Inn & Suites Cumberland",
  groupRate: "$132/night",
  bookingDeadline: "May 5, 2027",
} as const;

// ============================================
// IMAGES
// ============================================
export const IMAGES = {
  logo: "https://images.tomsrunrelay.org/Toms_Run_Logo.png",
  heroImage: "https://images.tomsrunrelay.org/Toms-Run-Hero-Image.jpg",
} as const;

// ============================================
// SEALS / DECALS
// ============================================
export const SEALS = [
  "https://files.tomsrunrelay.org/Toms-Run-Files/Decals/cwoa.png",
  "https://files.tomsrunrelay.org/Toms-Run-Files/Decals/CPOA_USCG.png",
  "https://files.tomsrunrelay.org/Toms-Run-Files%2FDecals%2Fcgoalogo.png",
  "https://files.tomsrunrelay.org/Toms-Run-Files/Decals/CGEA-Final_1.png",
] as const;

// ============================================
// DOCUMENTS & FILES
// ============================================
export const DOCUMENTS = {
  teamApplication:
    "https://files.tomsrunrelay.org/Toms-Run-Files/MISC/28th%20Toms%20Run%20team%20application.pdf",
  courseMap:
    "https://files.tomsrunrelay.org/Toms-Run-Files/MISC/tomsruncoursemap%202025.pdf",
  legPlanner:
    "https://files.tomsrunrelay.org/Toms-Run-Files/MISC/Toms%20Run%20Leg%20Planner%202026.xlsx",
  equipment:
    "https://files.tomsrunrelay.org/Toms-Run-Files/MISC/tomsrunequipment%20.pdf",
  disclaimer:
    "https://files.tomsrunrelay.org/Toms-Run-Files/MISC/tomsrundisclaimer%20.pdf",
} as const;

// ============================================
// EXTERNAL LINKS
// ============================================
export const EXTERNAL_LINKS = {
  coCanal: "https://www.nps.gov/choh/index.htm",
  mtVernonTrail: "https://www.nps.gov/gwmp/planyourvisit/mtvernontrail.htm",
  fortHuntPark: "https://www.nps.gov/gwmp/planyourvisit/fort-hunt-park.htm",
  hotelBooking:
    "https://app.marriott.com/resview2?id=1790715324696&key=GRP&app=resvlink",
} as const;

// ============================================
// SOCIAL
// ============================================
export const SOCIAL = {
  instagram: "https://www.instagram.com/toms_run_relay",
  instagramHandle: "@toms_run_relay",
} as const;

// ============================================
// CONTACT
// ============================================
export const CONTACT = {
  email: "tomsrunrelay@gmail.com",
  emailLink: "mailto:tomsrunrelay@gmail.com",
} as const;
