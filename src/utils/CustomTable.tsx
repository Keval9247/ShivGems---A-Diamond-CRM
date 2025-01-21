import React from "react";

interface CustomTableProps {
    headers: string[];
    rows: Array<{ [key: string]: any }>;
    actions?: (rowData: any) => React.ReactNode;
    renderCell?: (header: string, value: any) => React.ReactNode;
}

const CustomTable: React.FC<CustomTableProps> = ({ headers, rows, actions, renderCell }) => {
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

    return (
        <div style={{ overflowX: "auto", borderRadius: "10px", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}>
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
                            {actions && <td style={cellStyle}>{actions(row)}</td>}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default CustomTable;