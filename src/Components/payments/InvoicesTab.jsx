import React from "react";
import TableFooter from "../TableFooter";

const InvoicesTab = () => {
  return (
    <div>
      <div className="bg-white border rounded-md shadow-sm p-6 text-center text-gray-500">
        <p className="text-sm">No invoices found.</p>
      </div>
      <TableFooter className="bg-white shadow-md mt-6" />
    </div>
  );
};

export default InvoicesTab;
