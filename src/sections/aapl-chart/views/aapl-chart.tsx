import './aapl-chart.css';

import axios from "axios";
import Chart from "react-apexcharts";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

import { Box, Stack, Button, CircularProgress } from "@mui/material";

interface StockData {
  time: string;
  price: number;
}

const resolutions: Record<string, number> = {
  "3M": 3,
  "6M": 6,
  "12M": 12,
  "3Y": 36,
};

export function AAPLStockChartView() {
  const [data, setData] = useState<number[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [resolution, setResolution] = useState<string>("12M");

  const { i18n } = useTranslation();

  useEffect(() => {
    const fetchStockData = async () => {
      try {
        const response = await axios.get(
          "https://www.alphavantage.co/query",
          {
            params: {
              function: "TIME_SERIES_MONTHLY",
              symbol: "AAPL",
              apikey: import.meta.env.VITE_ALPHAVANTAGE_API_KEY,
            },
          }
        );

        const timeSeries = response.data["Monthly Time Series"];
        if (timeSeries) {
          const formattedData: StockData[] = Object.keys(timeSeries)
            .slice(0, resolutions[resolution])
            .map((time) => ({
              time,
              price: parseFloat(timeSeries[time]["1. open"]),
            }));

          setData(formattedData.map((entry) => entry.price));
          setCategories(formattedData.map((entry) => entry.time));
        }
      } catch (error) {
        console.error("Error fetching stock data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStockData();
  }, [resolution]);

  const options = {
    chart: {
      type: "bar" as const,
    },
    xaxis: {
      categories,
    },
    responsive: [
      {
        breakpoint: 768,
        options: {
          chart: {
            height: 300, // 🔹 Altura ajustada en pantallas pequeñas
          },
          xaxis: {
            labels: {
              rotate: -45, // 🔹 Evita superposición de etiquetas
            },
          },
        },
      },
    ],
  };

  const series = [
    {
      name: "AAPL Stock Price",
      data,
    },
  ];

  return (
    <div className="px-4">
      <h2>{i18n.t("stock.aaplPrice")}</h2>
      <Stack direction="row" spacing={1} mb={2}>
        {Object.keys(resolutions).map((key) => (
          <Button
            key={key}
            variant={resolution === key ? "contained" : "outlined"}
            onClick={() => setResolution(key)}
          >
            {key}
          </Button>
        ))}
      </Stack>
      <div className="chart-container">
        {loading ? (
          <Box display="flex" justifyContent="center" alignItems="center" height={350}>
            <CircularProgress />
          </Box>
        ) : (
          <Chart className="chart" options={options} series={series} type="bar" height={350} />
        )}
      </div>
    </div>
  );
};
