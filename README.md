

# Car Showcase 🚗

![alt text](image-1.png)

## Overview

Car Showcase is a modern web application developed using Next.js that allows users to explore and filter a wide variety of cars from around the world. The application provides a comprehensive and user-friendly interface for browsing vehicle details with advanced filtering and pagination support.

## 🌟 Live Demo

Check out the live application: [Car Showcase App](https://car-showcase-app-r5d1.vercel.app/)

## ⚙️ Tech Stack

- **Framework**: Next.js
- **Language**: TypeScript
- **Styling**: Tailwind CSS

## 🔋 Features

- **Dynamic Car Display**: Visually appealing homepage showcasing cars from a third-party API
- **Advanced Search and Filtering**: 
  - Filter cars by manufacturer, model, year, fuel type, and make
  - Comprehensive search functionality
- **Server-Side Rendering**: Seamless transition to SSR for improved performance
- **Pagination**: Easy navigation through large car datasets
- **SEO Optimization**: Enhanced metadata for better search engine visibility
- **Responsive Design**: Optimal user experience across all device types

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/Tharun-Balaji/car-showcase-app.git
   ```

2. Install dependencies
   ```bash
   cd car-showcase-app
   npm install
   ```

3. Set up environment variables
   - Create a `.env` file
   - Add your RapidAPI key:
     ```
     RAPID_API_KEY=your_rapidapi_key_here
     ```

4. Run the development server
   ```bash
   npm run dev
   ```

## 📂 Project Structure

```
car-showcase-app/
├── app/
│   ├── page.tsx (Server component)
│   └── layout.tsx (Server layout)
├── components/
│   ├── CarCard.tsx
│   ├── CustomButton.tsx
│   ├── SearchBar.tsx
│   └── ...
├── constants/
├── types/
├── utils/
└── globals.css
```

## 🧩 Key Components and Code Snippets

### Custom Button Component

```typescript
export interface CustomButtonProps {
  title: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit";
  textStyles?: string;
  rightIcon?: string;
  isDisabled?: boolean;
}
```

### Fetching Cars Utility

```typescript
async function fetchCars(filters: FilterProps): Promise<CarProps[]> {
  const { manufacturer, year, model, limit, fuel } = filters;

  const headers: HeadersInit = {
    "x-rapidapi-key": process.env.RAPID_API_KEY || "",
    "x-rapidapi-host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  try {
    const response = await fetch(
      `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`,
      { headers: headers }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json() as CarProps[];
  } catch (error) {
    console.error("Failed to fetch cars:", error);
    return []; 
  }
}
```

### Car Rent Calculation Utility

```typescript
const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50; 
  const mileageFactor = 0.1; 
  const ageFactor = 0.05; 

  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};
```

### Update Search Params Utility

```typescript
const updateSearchParams = (type: string, value: string) => {
  const searchParams = new URLSearchParams(window.location.search);
  searchParams.set(type, value);
  const newPathname = `${window.location.pathname}?${searchParams.toString()}`;
  return newPathname;
};
```

## 🔍 Key Interfaces

### Car Properties Interface

```typescript
export interface CarProps {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
}
```

### Filter Properties Interface

```typescript
export interface FilterProps {
  manufacturer?: string;
  year?: number;
  model?: string;
  limit?: number;
  fuel?: string;
}
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

## 👨‍💻 Contact

Tharun Balaji - [GitHub Profile](https://github.com/Tharun-Balaji)

Project Link: [https://github.com/Tharun-Balaji/car-showcase-app](https://github.com/Tharun-Balaji/car-showcase-app)
