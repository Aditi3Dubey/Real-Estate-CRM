import React, { useState } from "react";
import { ArrowLeft } from "lucide-react";
import TransactionsTab from "./TransactionsTab";
import InvoicesTab from "./InvoicesTab";
import PaymentMethodTab from "./PaymentMethodTab";
import Button from "../Button";

const Payments = () => {
  const [activeTab, setActiveTab] = useState("Transactions");
  const tabs = ["Transactions", "Invoices", "Payment method"];

  return (
    <div className="px-4 py-6 max-w-screen-xl mx-auto bg-gray-50 min-h-screen">
      {/* Header Row */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <div className="flex items-center gap-2">
          <ArrowLeft className="h-5 w-5 text-gray-500" />
          <h1 className="text-xl font-semibold text-gray-800">Payments & Transactions</h1>
        </div>

        <div className="flex flex-wrap gap-2 sm:justify-end">
          <Button
            label="Export"
            bgColor="bg-white"
            textColor="black"
            borderColor="border-gray-300"
          />
          <Button
            label="New Transaction"
            bgColor="bg-orange-500"
            textColor="white"
            borderColor=""
          />
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-6 text-sm sm:text-md font-medium mb-6 border-b overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`pb-2 whitespace-nowrap ${
              activeTab === tab
                ? "border-b-2 border-orange-500 text-orange-500"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      {activeTab === "Transactions" && <TransactionsTab />}
      {activeTab === "Invoices" && <InvoicesTab />}
      {activeTab === "Payment method" && <PaymentMethodTab />}
    </div>
  );
};

export default Payments;
