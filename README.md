# Geofencing with Next.js

## Project Overview
This project demonstrates a geofencing concept using **Next.js**. It identifies the current location of a device and retrieves restaurant information for the specific location. The project leverages modern web technologies, including **BigCloud API** for reverse geocoding and a custom backend to manage restaurant data.

---

## Features
- **Location Fetching**: Uses the browser's `navigator.geolocation` API to retrieve the current coordinates of the laptop.
- **Reverse Geocoding**: Converts latitude and longitude into a human-readable address (pincode) using the **BigCloud API**.
- **Backend Integration**: Stores and manages restaurant data for various locations.
- **Restaurant Display**: Fetches restaurants based on the identified pincode and displays them dynamically on the UI.

---

## Tech Stack
- **Frontend**: [Next.js](https://nextjs.org/) for the UI framework.
- **API**: [BigCloud API](https://bigcloud.com/) for reverse geocoding.
- **Backend**: Custom backend for storing and serving restaurant data.

---

## Installation and Setup

### Prerequisites
- Node.js installed on your machine.
- Access to a BigCloud API key.

### Steps to Run
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/your-repository.git

link to view page - gillisresto.netlify.app

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
