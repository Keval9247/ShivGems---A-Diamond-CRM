import React from "react";

interface CustomTableProps {
    headers: string[];
    rows: Array<{ [key: string]: any }>;
    actions?: (rowData: any) => React.ReactNode;
    renderCell?: (header: string, value: any) => React.ReactNode;
    field?: string;
}

const CustomTable: React.FC<CustomTableProps> = ({ headers, rows, actions, renderCell, field }) => {
    const headerStyle: React.CSSProperties = {
        padding: "16px 24px",
        fontSize: "0.890rem",
        fontWeight: 600,
        color: "grey",
        textTransform: "uppercase",
        letterSpacing: "0.05em",
        textAlign: "center",
        borderBottom: "4px solid #eeeeee",
    };

    const cellStyle: React.CSSProperties = {
        padding: "16px 24px",
        whiteSpace: "nowrap",
        fontSize: "0.875rem",
        color: "#1f2937",
        textAlign: "center",
        borderBottom: "1px solid #e5e7eb",
    };

    const actionCellStyle: React.CSSProperties = {
        ...cellStyle,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "8px", // Space between buttons
    };

    return (
        <>
            <div className="bg-white p-5 rounded-lg">
                <div className="flex flex-wrap justify-between px-4 items-center mb-4 gap-4">
                    {/* Left Section */}
                    <div className="flex flex-wrap gap-4 items-center">
                        <label htmlFor="field" className="text-sm font-medium">Field:</label>
                        <select
                            id="field"
                            className="px-3 py-2 border rounded-md text-sm focus:outline-none hover:cursor-pointer"
                        >
                            <option value="" disabled>Select Field</option>
                            {headers.map((header) => (
                                <option key={header} value={header}>
                                    {header}
                                </option>
                            ))}
                        </select>

                        <label htmlFor="type" className="text-sm font-medium">Type:</label>
                        <select
                            id="type"
                            className="px-3 py-2 border rounded-md text-sm focus:outline-none hover:cursor-pointer"
                        >
                            <option value="select type" disabled>Select Type</option>
                        </select>

                        <label htmlFor="value" className="text-sm font-medium">Value:</label>
                        <input
                            type="text"
                            id="value"
                            className="px-3 py-2 border rounded-md text-sm"
                            placeholder="Search..."
                        />

                        <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
                            Go
                        </button>
                        <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition">
                            Reset
                        </button>
                    </div>
                </div>

                <div style={{ overflowX: "auto", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", borderTop: '1px solid #eeeeee' }}>
                    <table style={{ width: "100%", backgroundColor: "white", borderCollapse: "collapse", borderRadius: "10px" }}>
                        <thead>
                            <tr>
                                <th style={headerStyle}>Index</th>
                                {headers.map((header, index) => (
                                    <th key={index} style={headerStyle}>
                                        {header}
                                    </th>
                                ))}
                                {actions && <th style={headerStyle}>Actions</th>}
                            </tr>
                        </thead>
                        <tbody>
                            {rows.map((row, rowIndex) => (
                                <tr
                                    key={rowIndex}
                                    style={{
                                        backgroundColor: rowIndex % 2 === 0 ? "#ffffff" : "#f9fafb",
                                        transition: "background-color 0.2s ease",
                                        cursor: "pointer",
                                    }}
                                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#f3f4f6")}
                                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = rowIndex % 2 === 0 ? "#ffffff" : "#f9fafb")}
                                >
                                    <td style={cellStyle}>{rowIndex + 1}.</td>
                                    {headers.map((header, colIndex) => (
                                        <td key={colIndex} style={{ ...cellStyle, color: header === "Status" && row[header] === "Active" ? "green" : "#1f2937" }}>
                                            {renderCell ? renderCell(header, row[header]) : row[header]}
                                        </td>
                                    ))}
                                    {actions &&
                                        <div>
                                            <td style={actionCellStyle}>{actions(row)}</td>
                                        </div>
                                    }
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default CustomTable;