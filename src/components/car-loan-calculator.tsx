"use client";

import { useState } from "react";
import type { Car } from "@/data/cars";
import { formatCarPrice } from "@/data/cars";

type CarLoanCalculatorProps = {
  car: Car;
};

function formatMillions(amount: number): string {
  const millions = new Intl.NumberFormat("id-ID", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount / 1_000_000);

  return `Rp ${millions} Juta`;
}

export function CarLoanCalculator({ car }: CarLoanCalculatorProps) {
  const [downPaymentPercent, setDownPaymentPercent] = useState(25);
  const [annualInterestPercent, setAnnualInterestPercent] = useState(21.5);
  const [termYears, setTermYears] = useState(3);
  const carPrice = car.price;

  if (carPrice === null) {
    return (
      <section
        className="loan-calculator"
        id="loan-calculator"
        aria-labelledby="loan-calculator-title"
      >
        <div className="loan-calculator__intro">
          <span className="loan-calculator__eyebrow">Kalkulator Kredit</span>
          <h2 id="loan-calculator-title">Hitung Simulasi Kredit Anda</h2>
          <p>
            Simulasi belum tersedia karena harga {car.brand} {car.name} belum
            diinformasikan.
          </p>
        </div>
      </section>
    );
  }

  const downPayment = (carPrice * downPaymentPercent) / 100;
  const loanPrincipal = carPrice - downPayment;
  const monthlyInterestRate = annualInterestPercent / 100 / 12;
  const termInMonths = termYears * 12;
  const monthlyPayment =
    loanPrincipal === 0
      ? 0
      : (loanPrincipal * monthlyInterestRate) /
        (1 - (1 + monthlyInterestRate) ** -termInMonths);
  const totalPayment = monthlyPayment * termInMonths;

  return (
    <section
      className="loan-calculator"
      id="loan-calculator"
      aria-labelledby="loan-calculator-title"
    >
      <div className="loan-calculator__intro">
        <span className="loan-calculator__eyebrow">Kalkulator Kredit</span>
        <h2 id="loan-calculator-title">Hitung Simulasi Kredit Anda</h2>
        <p>
          Atur uang muka, suku bunga, dan tenor untuk melihat perkiraan cicilan
          {` ${car.brand} ${car.name} ${car.year}`}.
        </p>
      </div>
      <div className="loan-calculator__controls">
        <div className="loan-calculator__car-summary">
          <span>
            {car.brand} {car.name} {car.year}
          </span>
          <strong>{formatCarPrice(carPrice)}</strong>
        </div>

        <div className="loan-calculator__slider">
          <div className="loan-calculator__field-heading">
            <label htmlFor="loan-down-payment">Uang Muka</label>
            <output htmlFor="loan-down-payment">{downPaymentPercent}%</output>
          </div>
          <input
            id="loan-down-payment"
            type="range"
            min="10"
            max="60"
            step="1"
            value={downPaymentPercent}
            onChange={(event) =>
              setDownPaymentPercent(Number(event.target.value))
            }
          />
          <div className="loan-calculator__range-labels" aria-hidden="true">
            <span>10%</span>
            <span>35%</span>
            <span>60%</span>
          </div>
        </div>

        <div className="loan-calculator__slider">
          <div className="loan-calculator__field-heading">
            <label htmlFor="loan-interest">Suku Bunga Tahunan</label>
            <output htmlFor="loan-interest">
              {new Intl.NumberFormat("id-ID", {
                maximumFractionDigits: 1,
              }).format(annualInterestPercent)}
              %
            </output>
          </div>
          <input
            id="loan-interest"
            type="range"
            min="6"
            max="36"
            step="0.5"
            value={annualInterestPercent}
            onChange={(event) =>
              setAnnualInterestPercent(Number(event.target.value))
            }
          />
          <div className="loan-calculator__range-labels" aria-hidden="true">
            <span>6%</span>
            <span>21%</span>
            <span>36%</span>
          </div>
        </div>

        <div className="loan-calculator__slider">
          <div className="loan-calculator__field-heading">
            <label htmlFor="loan-term">Tenor Pinjaman</label>
            <output htmlFor="loan-term">{termYears} Tahun</output>
          </div>
          <input
            id="loan-term"
            type="range"
            min="1"
            max="10"
            step="1"
            value={termYears}
            onChange={(event) => setTermYears(Number(event.target.value))}
          />
          <div className="loan-calculator__range-labels" aria-hidden="true">
            <span>1 Tahun</span>
            <span>5 Tahun</span>
            <span>10 Tahun</span>
          </div>
        </div>
      </div>

      <div className="loan-calculator__result" aria-live="polite">
        <div className="loan-calculator__result-heading">
          <span>SIMULASI</span>
        </div>
        <div className="loan-calculator__monthly">
          <span>Perkiraan cicilan per bulan</span>
          <strong>{formatMillions(monthlyPayment)}</strong>
        </div>
        <div className="loan-calculator__summary">
          <div>
            <strong>{formatMillions(downPayment)}</strong>
            <span>Uang muka ({downPaymentPercent}%)</span>
          </div>
          <div>
            <strong>{formatMillions(totalPayment)}</strong>
            <span>Total Pembayaran Pinjaman</span>
          </div>
        </div>
      </div>
      <p className="loan-calculator__disclaimer">
        Simulasi menggunakan perhitungan anuitas dan bunga tahunan dibagi 12.
        Hasil hanya perkiraan, belum termasuk biaya administrasi, asuransi, dan
        ketentuan pembiayaan dari pihak pemberi kredit.
      </p>
    </section>
  );
}
